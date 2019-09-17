import React from "react";
import ColorComponent from "./Color";
const ColorsComponent = props => {
  return props.colors.map(color => (
    <ColorComponent
      name={color.name}
      key={color.id}
      bgColor={color.colorValue}
    />
  ));
};

export default ColorsComponent;
