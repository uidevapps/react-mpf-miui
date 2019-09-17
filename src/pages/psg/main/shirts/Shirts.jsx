import React from "react";
import ProductGrid from "../../../../components/containers/productGrid/productGrid";
import axios from "axios";
import HeaderTextComponent from "../../../../components/ui/headerText/HeaderText";
class Shirts extends React.Component {
  state = {
    shirts: []
  };
  componentDidMount() {
    axios
      .get("http://15.206.16.194:3000/v2/api/psg/user/mobile/9959475551")
      .then(data => {
         console.log(data["data"]["details"][0])
        this.setState({ shirts: data["data"]["details"][0]["recShirts"] });
      })
      .catch(error => {
       
      });
  }
  render() {
    const _shirtsData = this.state.shirts;
    
    return (
      <React.Fragment>
        <HeaderTextComponent
          title="Recommended Shirts"
          subTitle="My Perfect Fit Personal Style Guide"
        />
        <React.Fragment>
          {_shirtsData && <ProductGrid productsData={_shirtsData} />}
          {/* <ProductGrid productsData={shirtsData} /> */}
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default Shirts;
