import React from "react";
import "../css/home.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { send } from "emailjs-com";
import { Form, Modal, Button } from "react-bootstrap";


//this compoment user send meesage to gmail Admin , if user need new info animal , use this compoment in home.js
const SendMessage: React.FC<{ closeModelEmail: Function }> = ({ closeModelEmail }) => {


  //value input to message
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });


  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };



  //send meesage to admin Gmail use EmailJS ,and check value
  const onSubmit = (e: any) => {

    if (
      toSend.from_name == "" ||
      toSend.reply_to == "" ||
      toSend.message == ""
    ) {
      e.preventDefault();

      Swal.fire({
        position: "top",
        confirmButtonColor: "green",
        icon: "error",
        title: "you can`t send message",
        text: "please input all value !",
      });
    }

    else {
      e.preventDefault();
      
      send("private", "private", toSend, "private")
        .then((response) => {
          Swal.fire({
            position: "top",
            confirmButtonColor: "green",
            icon: "success",
            title: "has been sent successfully",
            text: "Wait for the webmaster`s response",
          });
        })

        .catch((err) => {
          console.log("FAILED...", err);
        });
    }

  };



  return (
    <div>

      <div className="titleHeater">
        <h1>
          Send Message To Admin{" "}
          <img src="https://img.icons8.com/doodle/48/000000/gmail-new.png" />
        </h1>
      </div>

      <br />

      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={toSend.from_name}
            onChange={handleChange}
            autoFocus
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            name="reply_to"
            placeholder="Your Email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            placeholder="Your Message"
            value={toSend.message}
            onChange={handleChange}
          />
        </Form.Group>
      </Modal.Body>

      <div className="ButtonInfo">
        <Button variant="success" onClick={onSubmit}>
          Send
        </Button>

        <Button variant="danger" onClick={() => closeModelEmail()}>
          Close
        </Button>
      </div>
      
    </div>
  );
};



export default SendMessage;