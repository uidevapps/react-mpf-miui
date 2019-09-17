import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { UiCardStyle } from "../../ui/card/CardStyles";
const UiCard = props => {
  const classes = UiCardStyle();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component={props.mediaType}
          alt="Contemplative Reptile"
          image={props.productImgUrl}
          title={props.productTitle}
        />
        <CardContent className={classes.cardContent.root}>
          <Typography
            variant="subtitle1"
            component="h6"
            noWrap
            className={classes.subtitle1}
          >
            {props.productTitle}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"

            noWrap
          >
            {props.productDescription}
          </Typography>
          <Typography
            className={classes.subtitle2}
            variant="subtitle2"
            color="textPrimary"
            align="left"
            component="p"
          >
            Rs.{props.productPrice}/-
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={props.HandleAction}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default UiCard;
