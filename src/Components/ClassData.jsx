import React from "react";
import Data from "../Db.json/db.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './style.css'
const ClassData = () => {
  let ClassData = Data.map((val, index) => {
    return (
      <tr key={index}>
        <td>{val.id}</td>
        <td>{val.ClassName}</td>
        <td>{val.StaffName}</td>
        {/* <td>{val.TodayTime}</td> */}
        <td>{val.BookNow}</td>
      </tr>
    );
  });

  return (
    <>
      {console.log(Data)}

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>ClassName</th>
            <th>StaffName</th>
            <th>BookNow</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{ClassData}</tbody>
      </table>
    </>
  );
};

export default ClassData;
