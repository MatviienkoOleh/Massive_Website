import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import styles from "./Slider.module.css";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router";
import { addPositionId } from "../../../categories/categoriesSlice";

export default function Slider() {
  const list = useAppSelector((state) => state.categories.arrayOfShoes);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const imageSlider = "./assets/slider_background.jpg";

  const navigateToPosition = (id: string) => {
    dispatch(addPositionId(id));
    navigate("/Position");
  };

  const newCollection = list
    .filter((shoe) => shoe.status === "newCollection")
    .reverse();
  const oldCollection = list.filter((shoe) => shoe.status === "old").reverse();
  const saleCollection = list
    .filter((shoe) => shoe.status === "sale")
    .reverse();

  return (
    <div className={styles.carousel_Wrapper}>
      <Carousel>
        <Carousel.Item>
          <div className={styles.slider}>
            <img
              className={styles.slider_Image}
              src={newCollection[0] ? newCollection[0].url : imageSlider}
              alt="First slide"
              onClick={() => navigateToPosition(String(newCollection[0].model))}
            />
            <img
              className={[styles.slider_Image, styles.slider_Hide_Picture].join(
                " "
              )}
              src={newCollection[1] ? newCollection[1].url : imageSlider}
              alt="First slide"
              onClick={() => navigateToPosition(String(newCollection[1].model))}
            />
            <img
              className={[styles.slider_Image, styles.slider_Hide_Picture].join(
                " "
              )}
              src={newCollection[2] ? newCollection[2].url : imageSlider}
              alt="First slide"
              onClick={() => navigateToPosition(String(newCollection[2].model))}
            />
          </div>
          <Carousel.Caption>
            <h3>New Collection</h3>
            <p>New models from Collection!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.slider}>
            <img
              className={styles.slider_Image}
              src={oldCollection[0] ? oldCollection[0].url : imageSlider}
              alt="First slide"
              onClick={() => navigateToPosition(String(oldCollection[0].model))}
            />
            <img
              className={[styles.slider_Image, styles.slider_Hide_Picture].join(
                " "
              )}
              src={oldCollection[1] ? oldCollection[1].url : imageSlider}
              alt="First slide"
              onClick={() => navigateToPosition(String(oldCollection[1].model))}
            />
            <img
              className={[styles.slider_Image, styles.slider_Hide_Picture].join(
                " "
              )}
              src={oldCollection[2] ? oldCollection[2].url : imageSlider}
              alt="First slide"
              onClick={() => navigateToPosition(String(oldCollection[2].model))}
            />
          </div>
          <Carousel.Caption>
            <h3>Old Collection</h3>
            <p>Old models from Collection!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.slider}>
            <img
              className={styles.slider_Image}
              src={saleCollection[0] ? saleCollection[0].url : imageSlider}
              alt="First slide"
              onClick={() =>
                navigateToPosition(String(saleCollection[0].model))
              }
            />
            <img
              className={[styles.slider_Image, styles.slider_Hide_Picture].join(
                " "
              )}
              src={saleCollection[1] ? saleCollection[1].url : imageSlider}
              alt="First slide"
              onClick={() =>
                navigateToPosition(String(saleCollection[1].model))
              }
            />
            <img
              className={[styles.slider_Image, styles.slider_Hide_Picture].join(
                " "
              )}
              src={saleCollection[2] ? saleCollection[2].url : imageSlider}
              alt="First slide"
              onClick={() =>
                navigateToPosition(String(saleCollection[2].model))
              }
            />
          </div>
          <Carousel.Caption>
            <h3>Sales</h3>
            <p>Old models for Sales!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
