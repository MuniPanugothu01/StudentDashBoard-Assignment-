import React from "react";
import Data from "../Db.json/db.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
const ClassData = () => {
  let ClassData = Data.map((val, index) => {
    return (
      <tr key={index}>
        <td>{val.id}</td>
        <td>
          <b>{val.ClassName}</b>
          <p>TodayTime</p>
        </td>
        <td>
          <b>{val.StaffName}</b>
          <p>Additional Information</p>
        </td>

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
