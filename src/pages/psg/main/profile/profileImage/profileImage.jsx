import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
const ProfileImageComponent = props => {
  return (
    <Card square={true} elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.imgUrl}
          title="Contemplative Reptile"
          height="250"
        />
      </CardActionArea>
    </Card>
  );
};
export default ProfileImageComponent;
