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
          <p>today 10am</p>
        </td>
        <td>
        <img src='https://s3-alpha-sig.figma.com/img/5c73/c6c2/83004abb594407a237b5d29e77e8f61b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IqWE6NTOE6NmIvzjQdWRD3rkAIBNpq6yyokPgqCg4s8cGBbZuyVV3jvtfH7FBGi0KS3GLW-7-oxws-dBUgvB3nChw4toHjmh7zTHwV7U45bZmKyL30BE~oPiInTpP1Rbue1hGTTqaBwlsgHh-X0-XXPUBkBFo3WjQYRE1G69boReOJ-KwnZ0ytThdzELf7NYtcnlYZ6IxiZYYa8jofEvLt1RCmJaGInfeHCU9bcW~k9Ghi63NGVA9oVpbkIwBfrW663VEFVHGkxTWV-Xt~q2E1KP1ZT7ggzINWbMc0iv9dZ-mdVOvpmf5tpRP21OjEQKeHdexG5ATRXjE3nDTsrrKg__'alt="" height={50} width={50} />
          <b>{val.StaffName}</b>
         
          <p>Additional Information</p>
        </td>

        <td><button>BookNow</button></td>
        {/* <td>{val.BookNow}</td> */}
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
            <th>Actions</th>
           
          </tr>
        </thead>
        <tbody>{ClassData}</tbody>
      </table>
    </>
  );
};

export default ClassData;
