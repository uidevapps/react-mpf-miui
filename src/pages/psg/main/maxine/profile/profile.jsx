import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { styles } from "./styles";
import brandLogo from "../../../../../assets/imgs/mpflogo.png";
import Typography from "@material-ui/core/Typography";
import MaxineHeaderComponent from "../shared/header/Header";
import MaxineFooter from "../../../../../components/ui/maxineFooter/MaxineFooter";
import DividerComponent from "../shared/divider/Divider";
import ProductGridComponent from "../shared/productGrid/ProductGrid";

import { personalInfo } from "../../../../../data/RawData";
import { SECONDARY_COLOR } from "../../../../../theme/colors";

const profile = props => {
  
  const data = personalInfo;
  const classes = styles();
  const { profile } = props;

  return (
    <Container maxWidth="lg" className={classes.root}>
      <div className={classes.profileWrapper}>
        <Paper className={classes.paper}>
          <MaxineHeaderComponent
            gridItemSpacing={3}
            image={profile.imageUrl}
            textPrimary={`MR. ${profile.name}'S BRIEF`}
            textSecondary="PROFILE"
            isProfileHeader={true}
            brandLogo={brandLogo}
          >
            <Typography variant="subtitle2" color="textSecondary">
              {profile.info}
            </Typography>
          </MaxineHeaderComponent>
          <DividerComponent minHeight="3px" color={SECONDARY_COLOR} />
          <ProductGridComponent
            cardType="profile"
            cardSpacing={2}
            data={data}
            qrcImage={null}
          />
          <DividerComponent minHeight="3px" color={SECONDARY_COLOR} />
          <MaxineFooter pageNo="01"></MaxineFooter>
        </Paper>
      </div>
    </Container>
  );
};

export default profile;
