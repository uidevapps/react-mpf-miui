import React from "react";
import HeaderTextComponent from "../../../../components/ui/headerText/HeaderText";
import ProductGrid from "../../../../components/containers/productGrid/productGrid";
// import { accessoriesData } from "../../../../data/RawData";
import axios from "axios";
class AccessoriesPage extends React.Component {

  state = {
    accessories: []
  };
  componentDidMount() {
    axios
      .get("http://15.206.16.194:3000/v2/api/psg/user/mobile/9959475551")
      .then(data => {
        this.setState({ accessories: data["data"]["details"][0]["recAccessories"] });
       
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <HeaderTextComponent
          title="Recommended Accessories"
          subTitle="My Perfect Fit Personal Style Guide"
        />
        <React.Fragment>
          <ProductGrid productsData={this.state.accessories} />
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default AccessoriesPage;
