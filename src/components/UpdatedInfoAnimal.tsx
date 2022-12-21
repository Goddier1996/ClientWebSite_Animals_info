import React from "react";
import "../css/home.css";
import { API } from "../Server/API";
import { useState, useEffect } from "react";
import { Form, Modal } from "react-bootstrap";
import UpdatedInfo from "../components/UpdatedAnimal";


// here choose a animal.how we need updated , when we choose save a id in seesion storge and go to UpdatedInfo.js components
function ChooseUpdatedAnimal() {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [notes, SetNotes] = useState([] as any[]);



  //load all card animals from database
  const LoadAllNotes = async () => {

    let res = await fetch(API.NODE.GET, { method: "GET" });
    let data = await res.json();

    SetNotes(data);
  };



  // here we save a id animal to session storge , for Updated info this animal , and to use in UpdatedInfo.js component
  const AnimalChoose = async (id: string) => {
    
    let IdAnimalUpdatedInfo = { idAnimal: id };

    sessionStorage.setItem("IdAnimalUpdated",JSON.stringify(IdAnimalUpdatedInfo)); 

    handleShow();
  };




  useEffect(() => {
    LoadAllNotes();
  }, []);



  return (
    <div>
      <div className="titleHeater">
        <h1>
          Choose Animal for Updated{" "}
          <img
            src="https://i.postimg.cc/85D0BbW2/Basic-Ui-544.jpg"
            style={{ height: "40px" }}
          />
        </h1>
      </div>

      <Modal.Body>
        <div className="modelsInfoDeleteOrUpdated">
          {notes.map((node) => (
            <div key={node._id} className="cardDeleteOrUpdated">
              <div className="card_image">
                <img src={node.image} onClick={() => AnimalChoose(node._id)} />
              </div>
            </div>
          ))}
        </div>
      </Modal.Body>

      {/* pop up Updated info Animal , from UpdatedInfo.js component*/}

      <div>
        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <p className="closes" onClick={handleClose} aria-label="Close">
            &times;
          </p>

          <Modal.Body>
            <Form>
              <UpdatedInfo />
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}



export default ChooseUpdatedAnimal;