import React from "react";

const Detail = props => {
  return <p style={detailStyle}>{props.details}</p>;
};

const detailStyle = {
  padding: "0.2rem"
};

export default Detail;
