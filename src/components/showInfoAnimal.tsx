import React from "react";
import "../css/home.css";
import { Modal, Button } from "react-bootstrap";



//this compoment show info about animal,active this compoment in showAnimal.js
const InfoAnimal: React.FC<{ hideModelInfo: Function }> = ({ hideModelInfo }) => {


  let animalData = JSON.parse(sessionStorage.getItem("animal") as any);



  return (
    <div>

      <Modal.Body>
        <div className="titleHeaterInfo">
          <h1>Info Animal {animalData.name} :</h1>
        </div>

        <br />

        <div className="infoImage">
          <img src={animalData.image}></img>
        </div>

        <br />

        <div className="infoText">
          <p>{animalData.info}</p>
        </div>

        <div className="ButtonInfo">
          <Button variant="success" onClick={() => hideModelInfo()}>
            Wow Good Info
          </Button>
        </div>
      </Modal.Body>
      
    </div>
  );
};



export default InfoAnimal;