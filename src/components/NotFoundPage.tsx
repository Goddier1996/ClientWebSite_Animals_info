import React from "react";
import { Button } from "react-bootstrap";
import "../css/NotFoundPage.css";



export const NotFoundPage = () => {

  return (
    <>
      <div className="face">
        <div className="band">
          <div className="red"></div>
          <div className="white"></div>
          <div className="blue"></div>
        </div>

        <div className="eyes"></div>
        <div className="dimples"></div>
        <div className="mouth"></div>
      </div>

      <div className="infoNotFound">
        <h1>
          Oops! Something went wrong!
          <br />
          You’re either misspelling the URL or requesting a page that's no
          longer here.
        </h1>
      </div>

      <div className="backToHome">
        <Button
          size="sm"
          variant="success"
          href="/"
          style={{ fontSize: "16px" }}
        >
          Back to Home Page
        </Button>
      </div>
    </>
  );
};