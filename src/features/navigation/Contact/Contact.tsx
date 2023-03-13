import Footer from "../../footer/Footer";
import Navigation from "../Navigation";
import styles from "./Contact.module.css";
import { useForm } from "react-hook-form";
import { FormContactI } from "../../../interface/global";
import { db } from "../../../firebase";
import { push, ref } from "firebase/database";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormContactI>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: null,
      message: "",
    },
  });

  const onSubmit = (data: FormContactI) => {
    const reference = ref(db, "userMessages");
    push(reference, {
      ...data,
    });
    alert('Your message has sent. Our shop-assistant will reply on your email.')
    reset();
  };

  return (
    <div>
      <Navigation />
      <main className={styles.contact_wrapper}>
        <h1 className={styles.contact_Form_HeadLine}>
          Talk with our shop assistant
        </h1>
        <form className={styles.contact_Form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.contact_Input_Block}>
            <label className={styles.contact_Label} htmlFor="firstName">
              First Name *
            </label>
            <input
              placeholder="John"
              className={styles.contact_Input}
              {...register("firstName", {
                required: true,
                minLength: {
                  value: 4,
                  message: "First Name length bigger that 3.",
                },
              })}
            />
            {errors.firstName?.message ? (
              <span className={styles.contact_Form_Error}>
                {errors.firstName?.message}
                <div className={styles.contact_Form_Error_Arrow_Wrap}></div>
              </span>
            ) : null}
          </div>
          <div className={styles.contact_Input_Block}>
            <label className={styles.contact_Label} htmlFor="lastName">
              Last Name *
            </label>
            <input
              placeholder="Wick"
              className={styles.contact_Input}
              {...register("lastName", {
                required: true,
                minLength: {
                  value: 4,
                  message: "Last Name length bigger that 3.",
                },
              })}
            />
            {errors.lastName?.message ? (
              <span className={styles.contact_Form_Error}>
                {errors.lastName?.message}
                <div className={styles.contact_Form_Error_Arrow_Wrap}></div>
              </span>
            ) : null}
          </div>
          <div className={styles.contact_Input_Block}>
            <label className={styles.contact_Label} htmlFor="email">
              Email *
            </label>
            <input
              placeholder="JohnWick@gmail.com"
              className={styles.contact_Input}
              {...register("email", {
                required: true,
                minLength: {
                  value: 9,
                  message: "Must be valid email@gmail.com",
                },
                validate: {
                  randomValidate: (value) => {
                    return value.includes("@");
                  },
                },
              })}
            />
            {errors.email?.message ? (
              <span className={styles.contact_Form_Error}>
                {errors.email?.message}
                <div className={styles.contact_Form_Error_Arrow_Wrap}></div>
              </span>
            ) : null}
          </div>
          <div className={styles.contact_Input_Block}>
            <label className={styles.contact_Label} htmlFor="phone">
              Phone number
            </label>
            <input
              type="number"
              placeholder="+380638098742"
              className={styles.contact_Input}
              {...register("phoneNumber")}
            />
          </div>
          <div className={styles.Text_Area_Block}>
            <label className={styles.contact_Label} htmlFor="message">
              What would you like to discuss? *
            </label>
            <textarea
              placeholder="Your message ..."
              className={styles.contact_Text_Area}
              {...register("message", {
                required: true,
                minLength: {
                  value: 10,
                  message: "Message length more that 9 symbols.",
                },
              })}
            />
            {errors.message?.message ? (
              <span className={styles.contact_Form_Error}>
                {errors.message?.message}
                <div className={styles.contact_Form_Error_Arrow_Wrap}></div>
              </span>
            ) : null}
          </div>
          <div className={styles.contact_Submit_Section}>
            <input
              className={styles.contact_Submit_Button}
              type="submit"
              value="Submit"
            />
            <span className={styles.contact_Form_Info}>
              Fields marked with (*) are required
            </span>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
