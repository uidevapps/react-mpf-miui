import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { accessoriesCardStyles } from "./accessCardStyles";

const AccessoriesCard = props => {
  const classes = accessoriesCardStyles();
  return (
    <Card className={classes.card} elevation={0}>
      <CardMedia
        className={classes.media}
        image={props.imgUrl}
        title={props.title}
      />
      <CardContent>
        <Typography
          variant="h6"
          color="textPrimary"
          component="h6"
          align="center"
          className={classes.h6}
        >
         {props.title}
        </Typography>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          component="p"
          align="center"
        >
         {props.dec}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AccessoriesCard;
