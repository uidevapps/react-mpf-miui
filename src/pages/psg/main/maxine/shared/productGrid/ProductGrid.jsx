import React from "react";
import Grid from "@material-ui/core/Grid";
import MaxineCardComponent, { QRCCardComponent } from "../../shared/card/Card";
import { useStyles } from "./styles";

const ProductGridComponent = props => {
  const { data, cardType } = props;
  const classes = useStyles();
  let cardItem = null;

  if (cardType === "shirt" || cardType === "trouser") {
    if (data.length > 0) {
      cardItem = (
        <React.Fragment>
          {data.map((item, index) => (
            <Grid item xs={6} md={4} lg={4} sm={4} key={index}>
              <MaxineCardComponent
                imgUrl={item.image}
                title="PRODUCT ID"
                subTitle={item.productId}
              />
            </Grid>
          ))}
        </React.Fragment>
      );
    }
  }

  if (cardType === "accessories") {
    if (data.length > 0) {
      cardItem = (
        <React.Fragment>
          {data.map((item, index) => (
            <Grid item xs={6} md={4} lg={4} sm={4} key={index}>
              <MaxineCardComponent
                imgUrl={item.image}
                title={item.brand}
                subTitle={item.name}
              />
            </Grid>
          ))}
        </React.Fragment>
      );
    }
  }

  if (cardType === "profile") {
    if (data.length > 0) {
      cardItem = (
        <React.Fragment>
          {data.map((item, index) => (
            <Grid item xs={6} md={4} lg={4} sm={4} key={index}>
              <MaxineCardComponent
                imgUrl={item.imgUrl}
                title={item.type}
                subTitle={item.description}
              />
            </Grid>
          ))}
        </React.Fragment>
      );
    }
  }

  return (
    <Grid
      container
      spacing={props.cardSpacing}
      className={classes.mainContainer}
    >
      {cardItem}

      {props.qrcImage && (
        <Grid item xs={6} md={4} lg={4} sm={4}>
          <QRCCardComponent image={props.qrcImage} />
        </Grid>
      )}
    </Grid>
  );
};

export default ProductGridComponent;
