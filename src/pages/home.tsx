import React from "react";
import { API } from "../Server/API";
import "../css/home.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import videoBg from "../images/animals-sound-kids-brave-2022-11-16-12-22-50_pFFaKSHG.mp4";

//components
import AnimalsModals from "../components/showAnimals";
import AddAnimal from "../components/AddAnimal";
import SendMessage from "../components/sendMessageToAdmin";
import DeleteInfo from "../components/deleteAnimal";
import ChooseUpdatedAnimal from "../components/UpdatedInfoAnimal";


//home page
const Home: React.FC = () => {


  //input data admin login
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  //pop up connect admin
  const [showConnectAdmin, setShowConnectAdmin] = useState(false);
  const handleCloseConnectAdmin = () => setShowConnectAdmin(false);
  const handleShowConnectAdmin = () => setShowConnectAdmin(true);

  //popup send meesage to admin
  const [showSendMessage, setShowSendMessage] = useState(false);
  const handleCloseSendMessage = () => setShowSendMessage(false);
  const handleShowSendMessage = () => setShowSendMessage(true);

  //popup chiose options add new animal , delete info animal , Updated info Animal
  const [showOptionsAdmin, setShowOptionsAdmin] = useState(false);
  const handleCloseOptionsAdmin = () => setShowOptionsAdmin(false);
  const handleShowOptionsAdmin = () => setShowOptionsAdmin(true);

  //popup add new animal
  const [showAddNewAnimal, setShowAddNewAnimal] = useState(false);
  const handleCloseAddNewAnimal = () => setShowAddNewAnimal(false);
  const handleShowAddNewAnimal = () => setShowAddNewAnimal(true);

  //popup delete info animal
  const [showDeleteAnimal, setShowDeleteAnimal] = useState(false);
  const handleCloseDeleteAnimal = () => setShowDeleteAnimal(false);
  const handleShowDeleteAnimal = () => setShowDeleteAnimal(true);

  //popup Updated info Animal
  const [showUpdatedAnimal, setShowUpdatedAnimal] = useState(false);
  const handleCloseUpdatedAnimal = () => setShowUpdatedAnimal(false);
  const handleShowUpdatedAnimal = () => setShowUpdatedAnimal(true);

  //save user data from database
  const [user, SetUser] = useState({});



  //load admin data from nodeJs database
  const LoadUser = async () => {

    let res = await fetch(API.USER.GET, { method: "GET" });
    let data = await res.json();

    SetUser(data);
  };



  //connect admin check if input Good or same database
  const ConnectToAdmin = async () => {

    sessionStorage.setItem("Admin", JSON.stringify(user)); 

    let userData = JSON.parse(sessionStorage.getItem("Admin") as any);

    
    for (let i = 0; i < userData.length; i++) {

      if (userData[i].Login == login && userData[i].Password == password) {

        //show popup
        handleShowOptionsAdmin();
      }
      
      else {
        Swal.fire({
          position: "top",
          icon: "error",
          text: "you need input all value or don`t have this user !",
          confirmButtonColor: "green",
        });
      }
    }
  };



  //pop up when you click + say if you went connect to admin show popup
  const clickToButtonAddPopUp = async () => {

    Swal.fire({
      position: "top",
      confirmButtonColor: "grey",
      denyButtonColor: "#1099E1",
      cancelButtonColor: "green",
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: `Send message`,
      cancelButtonText: `Ok`,
      confirmButtonText: `Connect Admin`,
      icon: "question",
      html: '<p class="popUpTextP1">Add new Animal Info Can Only Admin<br/><h6 class="popUpTextP2">if you want new animal Info send Message to Admin.</h6></p>',
    }).then((result) => {

      if (result.isConfirmed) {
        handleShowConnectAdmin();
      } else if (result.isDenied) {
        handleShowSendMessage();
      }
    });
  };



  // here admin chiose add new animal or delete , we send a number when onclick to button , and check with number what we need active
  const chioseForAdmin = async (chiose: number) => {

    if (chiose == 1) {
      handleShowAddNewAnimal();
    }

    if (chiose == 2) {
      handleShowDeleteAnimal();
    }

    if (chiose == 3) {
      handleShowUpdatedAnimal();
    }
  };



  // show video info about Admin what he can to do in this website
  const AdminInfo = async () => {
    
    Swal.fire({
      html: `<div class="styleVideoAdmin"><video controls autoplay loop muted playsinline src=${videoBg}></video></div>`,
      confirmButtonText: "Wow",
      background: "rgba(0, 0, 0, 0.501)",
      confirmButtonColor: "#2d79b5",
    });
  };



  // send this function to component sendMessageToAdmin to close model
  const hideModelSendMail = () => {

    setShowSendMessage(false);
  }



  useEffect(() => {
    LoadUser();
  }, []);




  return (
    <div>

      {/* button add new info about animal */}
      <div className="wrap">
        <div onClick={clickToButtonAddPopUp} className="wrapAdd"></div>
      </div>

      

      {/* pop up connect Admin */}
      <div>
        <Modal
          show={showConnectAdmin}
          onHide={handleCloseConnectAdmin}
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <p className="closes" onClick={handleCloseConnectAdmin} aria-label="Close">
            &times;
          </p>

          <div className="titleHeater">
            <h1>
              Login Admin{" "}
              <img
                src="https://img.icons8.com/color/48/000000/admin-settings-male.png"
                style={{ height: "40px" }}
              />
            </h1>
          </div>

          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Login"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
          </Modal.Body>

          <div className="infoAdminVideo">
            <a onClick={AdminInfo}>Click See What Admin can to do !</a>
          </div>

          <br />

          <div className="ButtonInfo">
            <Button variant="success" onClick={ConnectToAdmin}>
              Sign In
            </Button>
          </div>

          <br />
        </Modal>
      </div>

      

      {/* pop up send message to admin,if you wants to new info animal , from sendMessage.js compoment */}
      <div>
        <Modal
          show={showSendMessage}
          onHide={handleCloseSendMessage}
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Body>
            <Form>
              <SendMessage closeModelEmail={hideModelSendMail} />
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      

      {/* pop up chiose what admin do to add new animal or delete info animal or Updated info Animal */}
      <div>
        <Modal
          show={showOptionsAdmin}
          onHide={handleCloseOptionsAdmin}
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <p className="closes" onClick={handleCloseOptionsAdmin} aria-label="Close">
            &times;
          </p>

          <div className="titleHeater">
            <h1>
              Hello Admin , Choose one of the options{" "}
              <img
                src="https://i.postimg.cc/brk32DV6/Pngtree-anxious-confused-person-thinking-and-6707777.png"
                style={{ height: "200px" }}
              />
            </h1>
          </div>

          <Modal.Body>
            <Form>
              <div className="styleChioseOptionAdmin">
                <Button
                  onClick={() => {
                    chioseForAdmin(1);
                  }}
                  variant="primary"
                >
                  Add new Animal
                </Button>
                <Button
                  onClick={() => {
                    chioseForAdmin(3);
                  }}
                  variant="secondary"
                >
                  Updated Info Animal
                </Button>
                <Button
                  onClick={() => {
                    chioseForAdmin(2);
                  }}
                  variant="danger"
                >
                  Delete Info Animal
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      

      {/* pop up add new info animal from compoment addAnimal , from AddAnimal.js compoment */}
      <div>
        <Modal
          show={showAddNewAnimal}
          onHide={handleCloseAddNewAnimal}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <p className="closes" onClick={handleCloseAddNewAnimal} aria-label="Close">
            &times;
          </p>

          <Modal.Body>
            <Form>
              <AddAnimal />
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      

      {/* pop up delete animal info , from deleteInfo.js compoment */}
      <div>
        <Modal
          show={showDeleteAnimal}
          onHide={handleCloseDeleteAnimal}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <p className="closes" onClick={handleCloseDeleteAnimal} aria-label="Close">
            &times;
          </p>

          <Modal.Body>
            <Form>
              <DeleteInfo />
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      

      {/* pop up Choose Animal updated info , from ChooseUpdatedAnimal.js compoment*/}
      <div>
        <Modal
          show={showUpdatedAnimal}
          onHide={handleCloseUpdatedAnimal}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <p className="closes" onClick={handleCloseUpdatedAnimal} aria-label="Close">
            &times;
          </p>

          <Modal.Body>
            <Form>
              <ChooseUpdatedAnimal />
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      

      {/* show all cards animals */}
      <div>
        {/* here you active all card animals and sound with compoment showAnimals */}
        <AnimalsModals />
      </div>

      
      
    </div>
  );
};

export default Home;