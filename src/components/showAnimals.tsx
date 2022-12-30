import React, { useState, useEffect } from "react";
import "../css/home.css";
import Swal from "sweetalert2";
import { Form, Modal } from "react-bootstrap";

//commpoment
import AddFoodAnimal from "./addFoodAnimal";
import InfoAnimal from "./showInfoAnimal";
import { LoadAllCardsAnimals } from "../Server/LoadDataApi";



//this in card ui style and load from node js data a animals name and sound commpoment active home.js for show
const AnimalsModals: React.FC<{ query: string }> = ({ query }) => {


  //popup open or close , sound animal show popUp
  const [showGetFoodAnimal, setShowGetFoodAnimal] = useState(false);
  const handleCloseGetFoodAnimal = () => setShowGetFoodAnimal(false);
  const handleShowGetFoodAnimal = () => setShowGetFoodAnimal(true);

  //popup open or close , show info about animal
  const [showShowInfoAnimal, setShowShowInfoAnimal] = useState(false);
  const handleCloseShowInfoAnimal = () => setShowShowInfoAnimal(false);
  const handleShowShowInfoAnimal = () => setShowShowInfoAnimal(true);

  //save for show all models animals from nodejs json file
  const [notes, SetNotes] = useState([] as any[]);



  //load all card animals from api
  const LoadAllNotes = async () => {
    SetNotes(await LoadAllCardsAnimals());
  };



  //here we save data animal from nodeJs database to seesion storge,and show popup where we input value what animal eat
  const start = async (
    sound: string,
    name: string,
    eat: string,
    notEatImage: string,
    eatImage: string
  ) => {
    let animal = {
      name: name,
      eat: eat,
      sound: sound,
      eatImage: eatImage,
      notEatImage: notEatImage,
    };

    sessionStorage.setItem("animal", JSON.stringify(animal));

    //show popup
    handleShowGetFoodAnimal();
  };



  //here we save data animal from nodeJs json file to seesion storge,and show popup about Animal show info
  const clickToImageForInfo = async (
    info: string,
    imageInfo: string,
    name: string
  ) => {
    let animal = {
      name: name,
      info: info,
      image: imageInfo,
    };

    sessionStorage.setItem("animal", JSON.stringify(animal));

    handleShowShowInfoAnimal();
  };



  // send this function to component showInfoAnimal to close model
  const hideModelInfoAnimal = () => {

    setShowShowInfoAnimal(false);
  };



  // filter Search the animal from data base
  const filteredData = notes.filter((item: any) => {
    return item.title.toLowerCase().startsWith(query);
  });



  //active a LoadAllNotes
  useEffect(() => {
    LoadAllNotes();

    Swal.fire({
      position: "center",
      background: "none",
      showConfirmButton: false,
      timer: 2000,
      html: '<div class="popUpHome"> <h1>Welcome To Safari</h1> <img src="https://i.pinimg.com/originals/ac/46/7c/ac467cbb2eb0fde593996c175cec0176.gif"> </div>',
    });
  }, []);



  return (
    <div>

      <div className="cards-list">
        {filteredData.map((node) => (
          <div key={node._id} className="cardx">
            <div className="card_image">
              <img
                src={node.image}
                onClick={() =>
                  clickToImageForInfo(
                    node.infoAnimal,
                    node.infoImage,
                    node.title
                  )
                }
              />
            </div>

            <div className="card_title title-white">
              <h6> {node.title}</h6>
              <p
                onClick={() =>
                  start(
                    node.sound,
                    node.title,
                    node.eat,
                    node.notEatImage,
                    node.eatImage
                  )
                }
              >
                <img src={require("../images/bowel1.png")}></img>
              </p>
            </div>
          </div>
        ))}
      </div>

      
      {/* get a food animal */}
      <div>
        <Modal
          show={showGetFoodAnimal}
          aria-labelledby="contained-modal-title-vcenter"
          onHide={handleCloseGetFoodAnimal}
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        >
          <p className="closes" onClick={handleCloseGetFoodAnimal} aria-label="Close">
            &times;
          </p>

          <Modal.Body>
            <Form>
              {/* show pop up add eat animal for sound - all this in compoments addFoodAnimals,js */}
              <AddFoodAnimal />
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      
      {/* show animal info model */}
      <div>
        <Modal
          show={showShowInfoAnimal}
          aria-labelledby="contained-modal-title-vcenter"
          onHide={handleCloseShowInfoAnimal}
          style={{ background: "rgba(0, 0, 0, 0.6)" }}
        >
          <Modal.Body>
            <Form>
              {/* show pop up info about animal - use showInfoAnimal.js */}
              <InfoAnimal hideModelInfo={hideModelInfoAnimal} />
            </Form>
          </Modal.Body>
        </Modal>
      </div>

    </div>
  );
};


export default AnimalsModals;