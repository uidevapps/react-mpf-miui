import React from "react";
import CardComponent from "./Card";
const CardsComponent = props => {
  return props.data.map(card => (
    <CardComponent
      key={card.id}
      title={card.title}
      subTitle={card.subTitle}
      imgUrl={card.imgUrl}
    />
  ));
};

export default CardsComponent;
