import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
const ProfileImageComponent = props => {
  return (
    <Card square={true} elevation={0}>
      <CardActionArea>
        <CardMedia
          image={props.imgUrl}
          title={props.type}
          component="img"
          height="250"
        />
      </CardActionArea>
    </Card>
  );
};
export default ProfileImageComponent;
