import { ref, update } from "firebase/database";
import { uploadBytes, getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { db, storage, storageRef } from "../../../firebase";
import { CreateShoeI, ShoeI } from "../../../interface/global";
import styles from "./AdminCreateForm.module.css";
import AdminCreateFormInput from "./adminCreateFormInput/AdminCreateFormInput";

export default function AdminCreateForm() {
  const arrayOfShoes = useAppSelector((state) => state.categories.arrayOfShoes);
  const [modelData, setModelData] = useState<CreateShoeI>({
    model: 0,
    type: "boots",
    status: "newCollection",
    description: "",
    price: 0,
    url: "",
    id: String(Date.now()),
  });
  const [image, setImage] = useState<string>("");

  const [modelError, setModelError] = useState("Incorrect model...");
  const [isValidModelError, setIsValidModelError] = useState(false);
  const [priceError, setPriceError] = useState("Incorrect price...");
  const [isValidPriceError, setIsValidPriceError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(
    "Incorrect Description..."
  );
  const [isValidDescriptionError, setIsValidDescriptionError] = useState(false);

  const onBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "model":
        setIsValidModelError(true);
        break;
      case "price":
        setIsValidPriceError(true);
        break;
      case "description":
        setIsValidDescriptionError(true);
        break;
      default:
        break;
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      setModelData((prev: any) => {
        return {
          ...prev,
          url: files[0],
        };
      });
      let src = URL.createObjectURL(files[0]);
      setImage(src);
    }
  };
  const validateModelHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModelData((prev) => {
      return {
        ...prev,
        model: +e.target.value,
      };
    });
    let stringModel = "" + e.target.value;
    if (stringModel.length < 4) {
      setModelError("Model number should be longer than 3 symbols");
    } else if (stringModel.length === 0) {
      setModelError("Model number should be longer than 3 symbols");
      setIsValidModelError(true);
    } else {
      setModelError("");
    }
  };
  const validateTypeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setModelData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const validateStatusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setModelData((prev) => {
      return {
        ...prev,
        status: value,
      };
    });
  };
  const validatePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModelData((prev) => {
      return {
        ...prev,
        price: Number(e.target.value),
      };
    });
    const stringPrice = "" + e.target.value;
    if (stringPrice.length === 1 || stringPrice.length > 3) {
      setPriceError("Price should be in diapason 10 - 999");
    } else if (stringPrice.length === 0) {
      setPriceError("Price should be in diapason 10 - 999");
      setIsValidPriceError(true);
    } else {
      setPriceError("");
    }
  };
  const validateDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModelData((prev) => {
      return {
        ...prev,
        description: e.target.value,
      };
    });

    if (e.target.value.length < 10) {
      setDescriptionError("Description should be at least 9 symbols long!");
    } else if (e.target.value.length === 0) {
      setIsValidDescriptionError(true);
    } else {
      setDescriptionError("");
    }
  };
  const createPosition = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Position have been added, please wait!!')

    // add File to Storage
    let storageReference = storageRef(storage, `${String(modelData.model)}`);
    const fileURL: any = modelData.url;
    uploadBytes(storageReference, fileURL).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });

    setTimeout(() => {
      asyncFunction(storageReference);
    }, 5000);
  };
  const asyncFunction = async (storageReference: any) => {
    console.log("add image to dataBase");
    let copyUrl = "";

    await getDownloadURL(storageReference)
      .then((ref) => {
        copyUrl += ref;
      })
      .catch((error) => console.log(error));

    const newShoe = {
      ...modelData,
      url: copyUrl,
    };
    // update DB with new array
    const reference = ref(db, "arrayOfShoes/filtered");
    const copyArrayOfShoes = [...arrayOfShoes];
    copyArrayOfShoes.push(newShoe);

    update(reference, {
      ...copyArrayOfShoes,
    });
  };

  const isButtonDisabled =
    typeof modelData.url === "string" ||
    modelError ||
    priceError ||
    descriptionError
      ? true
      : false;

  return (
    <form className={styles.create_Form} onSubmit={createPosition}>
      <AdminCreateFormInput
        label="model"
        handler={validateModelHandler}
        blurHandler={onBlurHandler}
      />
      {isValidModelError ? (
        <span className={styles.Admin_Create_From_Error}>{modelError}</span>
      ) : null}
      <AdminCreateFormInput
        label="price"
        handler={validatePrice}
        blurHandler={onBlurHandler}
      />
      {isValidPriceError ? (
        <span className={styles.Admin_Create_From_Error}>{priceError}</span>
      ) : null}
      <AdminCreateFormInput
        label="description"
        handler={validateDescription}
        blurHandler={onBlurHandler}
      />
      {isValidDescriptionError ? (
        <span className={styles.Admin_Create_From_Error}>
          {descriptionError}
        </span>
      ) : null}
      <select
        onChange={validateTypeHandler}
        name="type"
        className={styles.Type_Selector}
      >
        <option value="boots">Boots</option>
        <option value="sandals">Sandals</option>
        <option value="highHeels">High Heels</option>
        <option value="loafers">Loafers</option>
        <option value="oxford">Oxford</option>
        <option value="platforms">Platforms</option>
      </select>
      <select
        onChange={validateStatusHandler}
        name="status"
        className={styles.Type_Selector}
      >
        <option value="newCollection">New Collection</option>
        <option value="sale">Sale</option>
        <option value="old">Old Collection</option>
      </select>
      <div className={styles.Image_Block}>
        <AdminCreateFormInput
          label="url"
          handler={handleFileChange}
          blurHandler={onBlurHandler}
        />
        <img
          src={image}
          className={styles.model_ImageURl}
          style={image ? { display: "block" } : { display: "none" }}
        />
      </div>
      <button
        className={
          !isButtonDisabled
            ? styles.create_Position_Button
            : styles.create_Position_Button_Disabled
        }
        disabled={isButtonDisabled}
      >
        Create Position
      </button>
    </form>
  );
}
