import "./App.css";
import { useState } from "react";
import image_1 from "./assets/Corousel_Img/img_1.jpg";
import image_2 from "./assets/Corousel_Img/img_2.jpg";
import image_3 from "./assets/Corousel_Img/img_3.jpg";
import image_4 from "./assets/Corousel_Img/img_4.png";
import image_5 from "./assets/Corousel_Img/img_5.jpg";
import image_6 from "./assets/Corousel_Img/img_6.jpg";
import image_7 from "./assets/Corousel_Img/img_7.jpg";
import image_8 from "./assets/Corousel_Img/img_8.jpg";

function App() {
  const [activeImage, setactiveImage] = useState(0);
  console.log(activeImage);

  const images = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
  ];

  return (
    <div className="image_container-primary">
      <img
        src={images[activeImage]}
        alt="someting went wrong!"
        className="image_container__hero-image"
      />

      <div className="image_container-secondary">
        <div className="image_container__corousel">
          {images.map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                alt="Something went wrong!"
                style={activeImage === index ? { border: "2px solid red" } : {}}
                className="image_container__corousel-img"
                onClick={() => {
                  setactiveImage(index);
                }}
              />
            );
          })}
          <div className="images_container__corousel--button">
            <button
              onClick={() => {
                {
                  activeImage > 0
                    ? setactiveImage(activeImage - 1)
                    : setactiveImage(images.length - 1);
                }
              }}
            >
              PREV
            </button>
            <button
              onClick={() => {
                {
                  activeImage >= images.length - 1
                    ? setactiveImage(0)
                    : setactiveImage(activeImage + 1);
                }
              }}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
