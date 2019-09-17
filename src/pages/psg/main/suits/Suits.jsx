import React from "react";
import HeaderTextComponent from "../../../../components/ui/headerText/HeaderText";
import ProductGrid from "../../../../components/containers/productGrid/productGrid";
import axios from "axios";
class SuitsPage extends React.Component {
  state = {
    suits: null
  };
  componentDidMount() {
    axios
      .get("http://15.206.16.194:3000/v2/api/psg/user/mobile/9959475551")
      .then(data => {
        this.setState({ suits: data["data"]["details"][0]["recSuits"] });
      })
      .catch(error => {});
  }
  render() {
    return (
      <React.Fragment>
        <HeaderTextComponent
          title="Recommended Suits"
          subTitle="My Perfect Fit Personal Guide"
        />
        <React.Fragment>
          {this.state.suits && (
            <ProductGrid productsData={this.state.suits}></ProductGrid>
          )}
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default SuitsPage;
