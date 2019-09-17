import React from "react";
import ProductGrid from "../../../../components/containers/productGrid/productGrid";
// import { trouserData } from "../../../../data/RawData";
import HeaderTextComponent from "../../../../components/ui/headerText/HeaderText";
import axios from "axios";

class TrouserPage extends React.Component {
  state = {
    trousers: []
  };
  componentDidMount() {
    axios
      .get("http://15.206.16.194:3000/v2/api/psg/user/mobile/9959475551")
      .then(data => {
        this.setState({ trousers: data["data"]["details"][0]["recTrousers"] });
      })
      .catch(error => {});
  }
  render() {
    return (
      <React.Fragment>
        <HeaderTextComponent
          title="Recommended Trousers"
          subTitle="My Perfect Fit Personal Style Guide"
        />
        <React.Fragment>
          <ProductGrid productsData={this.state.trousers} />
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default TrouserPage;
