import React , { useState, useEffect } from "react";
import "../css/home.css";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { DeleteAnimal } from "../Server/DeleteDataApi";
import { LoadAllCardsAnimals } from "../Server/LoadDataApi";



// this compoment to delete the info animal from database,use in home.js
const DeleteInfo: React.FC = () => {


  //save for show all models animals from nodejs database
  const [notes, SetNotes] = useState([] as any[]);



  //load all card animals from database
  const LoadAllNotes = async () => {

    SetNotes(await LoadAllCardsAnimals());
  };



  // here we delete the info animal from data base
  const DeleteAnimalFromDataBase = async (Id: string) => {

    await DeleteAnimal(Id);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Deleted successfully",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      sessionStorage.clear();
      window.location.reload();
    });
  };



  useEffect(() => {
    LoadAllNotes();
  }, []);



  return (
    <div>

      <div>
        <div className="titleHeater">
          <h1>
            Delete Info Animal{" "}
            <img
              src="https://i.postimg.cc/LsmXccMh/Pngtree-delete-button-3d-icon-8633077.png"
              style={{ height: "40px" }}
            />
          </h1>
        </div>

        <Modal.Body>
          <div className="modelsInfoDeleteOrUpdated">

            {notes.map((node) => (
              <div key={node._id} className="cardDeleteOrUpdated">
                <div className="card_image">
                  <img
                    src={node.image}
                    onClick={() => DeleteAnimalFromDataBase(node._id)}
                  />
                </div>
              </div>
            ))}
            
          </div>
        </Modal.Body>

      </div>

    </div>
  );
};



export default DeleteInfo;