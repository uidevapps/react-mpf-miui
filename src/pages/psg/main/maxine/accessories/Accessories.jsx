import React from "react";

import { useStyles } from "./styles";
import Paper from "@material-ui/core/Paper";
import brandLogo from "../../../../../assets/imgs/mpflogo.png";
import Typography from "@material-ui/core/Typography";
import qrcCOde from "../../../../../assets/imgs/shirts-qr-code.png";
import MaxineFooter from "../../../../../components/ui/maxineFooter/MaxineFooter";
import MaxineHeaderComponent from "../shared/header/Header";
import DividerComponent from "../shared/divider/Divider";
import MaxineContainer from "../shared/container/Container";
import ProductGridComponent from "../shared/productGrid/ProductGrid";
import { SECONDARY_COLOR } from "../../../../../theme/colors";

const Accessories = props => {
  const { data } = props;
  const classes = useStyles();
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
          <ProductGridComponent
            cardType="accessories"
            cardSpacing={2}
            data={data}
            qrcImage={qrcCOde}
          />
          <DividerComponent minHeight="3px" color={SECONDARY_COLOR} />
          <MaxineFooter pageNo="05" />
        </Paper>
      </div>
    </MaxineContainer>
  );
};

export default Accessories;
