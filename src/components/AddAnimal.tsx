import React , { useState } from "react";
import "../css/home.css";
import { Form, Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { addAnimal } from "../Server/AddDataToApi";



//this is AddAnimal commpoment active in Home.js for add new animals info
const AddAnimal: React.FC = () => {

  //value input a add new animal
  const [title, setTitle] = useState<string>("");
  const [eat, setEat] = useState<string>("");
  const [infoAnimal, setInfoAnimal] = useState<string>("");
  const [infoImage, setInfoImage] = useState<string>("");
  const [sound, setSound] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [eatImage, setEatImage] = useState<string>("");
  const [notEatImage, setNotEatImage] = useState<string>("");




  //check url input image and sound  - 1
  const isValidUrl = (urlString: string) => {

    let urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator

    return !!urlPattern.test(urlString);
  };



  //check url input image and sound   - 2
  const checkValue = async () => {

    // check url input
    let x: boolean = isValidUrl(sound);
    let x1: boolean = isValidUrl(image);
    let x2: boolean = isValidUrl(infoImage);

    if (
      sound === "" ||
      image === "" ||
      title === "" ||
      eat === "" ||
      infoAnimal === "" ||
      notEatImage === "" ||
      eatImage === "" ||
      x == false ||
      x1 == false ||
      x2 == false
    )
    {
      Swal.fire({
        position: "top",
        confirmButtonColor: "green",
        icon: "error",
        title: "Oops...",
        html: '<p class="popUpTextP1">you need input value please Or Url link don`t Good</p>',
      });

      return;
    }


    if (x == true && x1 == true && x2 == true) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Add successfully",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        addNewAnimal();
        sessionStorage.clear();
        window.location.reload();
      });
    }

  };



  const addNewAnimal = async () => {

    let user = {
      title: title,
      sound: sound,
      image: image,
      eat: eat,
      infoAnimal: infoAnimal,
      infoImage: infoImage,
      notEatImage: notEatImage,
      eatImage: eatImage,
    };

    await addAnimal(user)
  };


  

  return (
    <div>

      <div className="titleHeater">
        <h1>
          Add a new Animal{" "}
          <img
            src="https://i.postimg.cc/85D0BbW2/Basic-Ui-544.jpg"
            style={{ height: "40px" }}
          />
        </h1>
      </div>

      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="please input name Animal"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            autoFocus
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="input what this animal eat"
            value={eat}
            onChange={(event) => setEat(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="url"
            placeholder="link url sound"
            value={sound}
            onChange={(event) => setSound(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="url"
            placeholder="link url image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="info animal"
            value={infoAnimal}
            onChange={(event) => setInfoAnimal(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="url"
            placeholder="link url info image"
            value={infoImage}
            onChange={(event) => setInfoImage(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="url"
            placeholder="link url image what eat animal"
            value={eatImage}
            onChange={(event) => setEatImage(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="url"
            placeholder="link url image what not eat animal"
            value={notEatImage}
            onChange={(event) => setNotEatImage(event.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={checkValue}>
          Add new Animal
        </Button>
      </Modal.Footer>
      
    </div>
  );
};



export default AddAnimal;