import React from "react";
import "../css/home.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import OptionsSite from "./optionsSite";


//this in menu commpoment active in App.js for show
const Menu: React.FC = () => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <div className="title">
      <div className="titleWeb">
        <p>Information about all types of animals for children</p>
      </div>

      <div className="help">
        <Button size="sm" variant="warning" onClick={handleShow}>
          More Info
        </Button>

        <Modal
          show={show}
          aria-labelledby="contained-modal-title-vcenter"
          onHide={handleClose}
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        >
          <Modal.Body>
            <div className="titleInfoHowUseWebSite">
              <p>Welcome to Safari</p>
            </div>

            <div className="titleInfoHowLearn">
              <p>Learning for children about animals and also their voices</p>
            </div>

            <div className="imgInfo">
              <img src="https://i.postimg.cc/XqhBtVNY/mflx-zhpt-220613.jpg"></img>
            </div>

            <br />
            <br />

            <div className="titleInfoHowLearnStart">
              <p>
                * to look about Animal , click to image Animal what you chiose.
                <br />
                <br />
                * hear animal sounds , click on a bowl of food next to the
                picture, and write down what the animal is eating, and hear its
                voice.
                <br />
                <br />
                * if you don`t no what animal eat , click to info.
                <br />
                <br />* only Admin can add new info Animal , if you would like
                new animal send mail to Admin.
              </p>
            </div>

            
            {/* chioose options start or move to model component OptionsSite show all options site */}
            <div style={{textAlign:"center"}}>
              <Button style={{margin:"3%"}} variant="success" onClick={handleClose}>
                Let`s start
              </Button>

              <OptionsSite />

            </div>

          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};


export default Menu;