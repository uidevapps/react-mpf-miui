import React from "react";
import ColorComponent from "./Color";
const ColorsComponent = props => {
  return props.colors.map((color, index) => (
    <React.Fragment key={index}>
      <ColorComponent
        name={color.name}
        key={color.id}
        bgColor={color.colorValue}
      />
    </React.Fragment>
  ));
};

export default ColorsComponent;
