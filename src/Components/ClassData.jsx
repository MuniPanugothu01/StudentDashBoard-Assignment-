import React from "react";
import Data from "../Db.json/db.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ClassData = () => {
  return (
    <>
      {console.log(Data)}
      {Data.map((val, index) => {
        return (
          <div key={index}>
            <Card style={{ width: "20rem", height: "23rem" }}>
              <Card.Img variant="top" src={val.image} height={150} />
              <Card.Body>
                <Card.Title style={{ color: "red" }}>
                  Class: <span style={{ color: "black" }}>{val.ClassName}</span>
                </Card.Title>
                <h6>
                  <span style={{ color: "red" }}>Staff-Name:</span>{" "}
                  {val.StaffName}
                </h6>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default ClassData;
