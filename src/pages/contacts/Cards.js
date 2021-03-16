import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

export default function Card(props) {
  return (
    <div className="card">
      <div className="head">
        <p>{props.count}</p>
        <h2>{props.name}</h2>
      </div>
      <Avatar img={props.imgUrl} />
      <div className="content">
        <Detail details={props.phone} />
        <Detail details={props.email} />
      </div>
    </div>
  );
}
