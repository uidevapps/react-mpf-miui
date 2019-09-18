import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { useStyles } from "./styles";

const MaxineCardComponent = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card} elevation={0}>
      <CardMedia
        className={classes.media}
        image={props.imgUrl}
        title={props.name}
      />
      <CardContent>
        <Typography
          variant="h6"
          color="textPrimary"
          component="h6"
          align="center"
          className={classes.h6}
        >
          PRODUCT ID
        </Typography>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          component="p"
          align="center"
        >
          {props.productId}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MaxineCardComponent;

export const QRCCardComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.qrcCode}>
      <img src={props.image} alt="qrc" className={classes.qrcImage} />
      <div className={classes.qrContent}>
        <Typography variant="subtitle2" component="p" color="textSecondary">
          1. Open your app <br />
          2. Point your camera <br />
          3. Browser and shop
        </Typography>
      </div>
    </div>
  );
};
