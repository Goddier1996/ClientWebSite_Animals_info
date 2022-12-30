import React , { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../css/home.css";

//components
import ImageEat from "../components/FotoEat";
import InputEat from "../components/giveFoodAnimal";



//here component we add to animal food and check if this he eat,show popup,use in showAnimals compoments
const AddFoodAnimal: React.FC = () => {


  //take data from seeison storage this animal,we add sessioson storage in showAnimals.js start fucn
  let animalData = JSON.parse(sessionStorage.getItem("animal") as any);


  // show popUp

  //chiose image eat
  const [showImageEat, setShowImageEat] = useState(false);
  const handleCloseImageEat = () => setShowImageEat(false);
  const handleShowImageEat = () => setShowImageEat(true);

  //chiose input eat
  const [showInputTextEat, setShowInputTextEat] = useState(false);
  const handleCloseInputTextEat = () => setShowInputTextEat(false);
  const handleShowInputTextEat = () => setShowInputTextEat(true);



  // send this function to component showInfoAnimal to close model
  const hideModelInputTextFood = () => {

    setShowInputTextEat(false);
  }



  return (
    <div>

      <div className="titleHeater">
        <h1>
          Hi I Am {animalData.name} , i am angry{" "}
          <img src="https://i.postimg.cc/6qx8029p/vecteezy-pets-bowl-food.jpg" />
          Give me food.
        </h1>

        <p>
          Choose one of the options :<br />
        </p>
        <h6>
          Select image Or Input Text
          <br />
        </h6>
      </div>

      
      <div className="chioseInputOrImage">
        <img
          src="https://i.postimg.cc/SsP7gY7L/image.png"
          alt="chiose image"
          onClick={handleShowImageEat}
        ></img>

        <img
          src="https://i.postimg.cc/MpG0JYP0/pencil11.png"
          alt="input text food"
          onClick={handleShowInputTextEat}
        ></img>
      </div>

      

      {/* pop up chiose image eat , active here to show compoment FotoEat.js */}
      <div>
        <Modal
          show={showImageEat}
          onHide={handleCloseImageEat}
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Body>
            <Form>
              {/* active compoment FotoEat */}
              <ImageEat />
            </Form>

            <div className="buttonExit">
              <Button variant="danger" onClick={handleCloseImageEat}>
                Close
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      

      
      {/* pop up chiose input eat , active here to show compoment InputEat.js */}
      <div>
        <Modal
          show={showInputTextEat}
          onHide={handleCloseInputTextEat}
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Body>
            <Form>
              {/* active compoment InputEat.js */}
              <InputEat hideModelFood={hideModelInputTextFood}/>
            </Form>
          </Modal.Body>
        </Modal>
      </div>

    </div>
  );
};

export default AddFoodAnimal;