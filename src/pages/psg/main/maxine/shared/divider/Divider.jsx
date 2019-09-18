import React from "react";
const DividerComponent = ({ minHeight, color, marginTop, marginButtom }) => {
  let styles = {
    minHeight: minHeight ? minHeight : "3px",
    backgroundColor: color ? color : "rgb(242, 180, 47)",
    marginTop: marginTop ? marginTop : "1rem",
    marginButtom: marginButtom ? marginButtom : "1rem",
    width: "100%"
  };
  return <div style={styles}></div>;
};

export default DividerComponent;
