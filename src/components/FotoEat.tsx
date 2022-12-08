import React from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import Swal from "sweetalert2";



//here component we add to animal food and check if this he eat,show popup,use in AddFoodAnimal compoments
const FotoEat: React.FC = () => {


  //take data from seeison storage this animal,we add sessioson storage in showAnimals.js start fucn
  let animalData = JSON.parse(sessionStorage.getItem("animal") as any);



  //chiose image food check if eat this food,and lesten sound animal
  const GetEatToAnimal = async (eat: string) => {

    if (eat == "Not Eat") {
      Swal.fire({
        position: "center",
        confirmButtonColor: "green",
        background: "none",
        html: '<p class="popUpTextP3">I don`t eat it ):</p> ',
      });
    }


    if (eat == "Eat") {

      //play sound animal
      let audio = new Audio(animalData.sound);
      audio.play();

      Swal.fire({
        position: "center",
        confirmButtonColor: "green",
        background: "none",
        html: '<div class="popUpHome"><img class="soFull" src="https://c.tenor.com/3VMs08FbdTUAAAAC/garfield-fat.gif"> </div>',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }

  };




  //show info what animal eat - when click in pop up info
  const popover = (

    <Popover id="popover-basic">
      <Popover.Header as="h3">{animalData.name} eat</Popover.Header>
      <Popover.Body>{animalData.eat}</Popover.Body>
    </Popover>
  );




  return (
    <div>

      <div className="titleHeaterHelp">
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="outline-light">
            <img src="https://img.icons8.com/ios/50/000000/info--v1.png" />
          </Button>
        </OverlayTrigger>
      </div>

      <div className="titleHeaterInfo">
        <p>
          if you don`t Do not know what {animalData.name} eat Click to Info.
          <br />
          <br />
          please to chiose image :{" "}
        </p>
      </div>

      <br />

      <div className="chioseImage">
        <img
          src={animalData.eatImage}
          onClick={() => {
            GetEatToAnimal("Eat");
          }}
        ></img>

        <img
          src={animalData.notEatImage}
          onClick={() => {
            GetEatToAnimal("Not Eat");
          }}
        ></img>
      </div>

      <br />
      
    </div>
  );
};



export default FotoEat;