import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { styleCardStyles } from "./StyleCardStyles";
const StyleCardComponent = (props) => {
  const classes = styleCardStyles();
  return (
    <Card className={classes.card} elevation={0}>
      <CardMedia
        className={classes.media}
        image={props.imgUrl}
        title={props.type}
       
      />
      <CardContent>
        <Typography
          variant="h6"
          color="textPrimary"
          component="h6"
          align="center"
        >
          {props.name}
        </Typography>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          component="p"
          align="center"
        >
          {props.type}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StyleCardComponent;
