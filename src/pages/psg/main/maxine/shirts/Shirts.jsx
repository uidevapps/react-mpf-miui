import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import brandLogo from "../../../../../assets/imgs/mpflogo.png";
import Typography from "@material-ui/core/Typography";
// import qrcCOde from "../../../../../assets/imgs/shirts-qr-code.png";
import MaxineFooter from "../../../../../components/ui/maxineFooter/MaxineFooter";
import MaxineHeaderComponent from "../shared/header/Header";
import DividerComponent from "../shared/divider/Divider";
import MaxineContainer from "../shared/container/Container";
import MaxineCardComponent from "../shared/card/Card";
import { SECONDARY_COLOR } from "../../../../../theme/colors";
import { useStyles } from "./styles";

const Shirts = props => {
  const classes = useStyles();
  // const {data} = props;
  return (
    <MaxineContainer>
      <div className={classes.styleContainer}>
        <Paper className={classes.paper}>
          <MaxineHeaderComponent
            gridItemSpacing={3}
            image={brandLogo}
            textPrimary="RECOMMENDED"
            textSecondary="SHIRTS"
          >
            <Typography variant="subtitle2" component="p" color="textSecondary">
              Here are our team of experts (Image Consultants, Stylists and
              Master Tailors) curated an exclusive styling recommendation and
              outfit collection that is just perfect for you.
            </Typography>
          </MaxineHeaderComponent>
          <DividerComponent minHeight="3px" color={SECONDARY_COLOR} />
          <Grid container spacing={2} className={classes.mainContainer}>
            {props.data.map(item => (
              <Grid item xs={6} md={4} lg={4} sm={4} key={item._id}>
                <MaxineCardComponent
                  imgUrl={item.image}
                  productId={item.productId}
                />
              </Grid>
            ))}
            <Grid item xs={6} md={4} lg={4} sm={4}>
              {/* <QRCCardComponent image={qrcCOde} /> */}
            </Grid>
          </Grid>
          <DividerComponent minHeight="3px" color={SECONDARY_COLOR} />
          <MaxineFooter pageNo="03" />
        </Paper>
      </div>
    </MaxineContainer>
  );
};

export default Shirts;
