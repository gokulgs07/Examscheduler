import React from "react";
import Popup from "reactjs-popup";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
const Pop = () => {
  return (
    <div>
      <Popup
        trigger={
          <Button
            style={{
              padding: "10px",
              width: "174px",
              borderRadius: "5px",
              background: "#5375E2",
              color: "white",
              marginTop: "30px",
              marginLeft: "900px",
              border: "#5375E2",
            }}>
            Save
          </Button>
          }>
        <div
          style={{
            position:"absolute",
            top:"50%",
            left:"50%",
            color: "White",
            width: "900px",
            height: "293px",
            backgroundColor: "#FFFFFF",
            position: " center",
            marginBottom: "10%",
            marginRight:"100%",
            marginTop:"120%"
          }}
        >
          <span
            style={{marginLeft:"900px",
            marginTop:"100px"
            }}
          ></span>
          
          <div
            style={{
              color: "black",
              width: "680px",
              marginTop: "45px",
              marginLeft: "165px",
            }}
          >
            <h2>BE EEE SEM3 schedule was successfully created.</h2>
          </div>
          <div>
            <button
              style={{
                marginTop: "30px",
                borderRadius: "5px",
                border: "1px solid #5375E2",
                marginLeft: "249px",
                marginRight: "30px",
                height: "40px",
                width: "185px",
                color: "#5375E2",
                backgroundColor: "white",
              }}
            >
              Create New Schedule
            </button>

            <button
              style={{
                marginTop: "30px",
                borderRadius: "5px",
                border: "1px solid #5375E2",
                marginLeft: "",
                marginRight: "",
                height: "40px",
                width: "185px",
                background: "#5375E2",
                color: "white",
                marginBottom: "30%",
              }}
            >
            <Link to="/AllocatePage">
              Allocate Schedule
              </Link>
            </button>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default Pop;
