import React from "react";
import { useState } from "react";
import { Button, Form, Popover, OverlayTrigger } from "react-bootstrap";
import Swal from "sweetalert2";


//here component we add to animal food and check if this he eat,show popup,use in AddFoodAnimal compoments
const InputEat: React.FC = () => {


  //take data from seeison storage this animal,we add sessioson storage in showAnimals.js start fucn
  let animalData = JSON.parse(sessionStorage.getItem("animal") as any);

  //input eat value
  const [eat, setEat] = useState<string>("");



  //get animal and check input value,and lesten sound animal
  const GetEatToAnimal = async () => {

    //if input was == value from nodeJs , we save in session storge before this easy use now for check
    if (animalData.eat == eat.toLowerCase()) {

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


    //if dont input value
    else if (eat == "") {
      Swal.fire({
        position: "center",
        confirmButtonColor: "green",
        background: "none",
        html: '<p class="popUpTextP3">please input what i need eat</p> ',
      });
    }
    
    else if (animalData.eat != eat) {
      Swal.fire({
        position: "center",
        confirmButtonColor: "green",
        // position: "center",
        background: "none",
        html: '<p class="popUpTextP3">I don`t eat it ):</p> ',
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
          Please input what Animal need eat :
        </p>
      </div>

      <br />

      <Form.Group
        className="mb-3 inputEat"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Control
          type="text"
          placeholder="Feed food suitable for the animal you have chosen"
          value={eat}
          onChange={(event) => setEat(event.target.value)}
          autoFocus
        />
      </Form.Group>

      <br />

      <div className="ButtonInfo">
        <Button variant="success" onClick={GetEatToAnimal}>
          To Feed
        </Button>
      </div>
      
    </div>
  );
};



export default InputEat;