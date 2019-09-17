import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import UiCard from "../../ui/card/Card";

const styles = {
  root: {
    flexGrow: 1
  }
};

class ProductGrid extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={1}>
          {this.props.productsData.map(item => (
            <Grid item xs={6} sm={4} md={3} lg={3} key={item.productId}>
               <UiCard
                mediaType="img"
                productTitle={item.name}
                productid={item.productId}
                productImgUrl={item.image}
                productDescription={item.productId}
                productPrice={item.price}
                HandleAction={() => {
                 
                }}
              />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ProductGrid);
