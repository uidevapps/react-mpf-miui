import React from "react";
import CoverView from "../cover/CoverPage";
import ProfileView from "./profile/profile";
import StylesView from "./style/Styles";
import ShirtsView from "./shirts/Shirts";
import TrouserView from "./trousers/Trouser";
import AccessoriesView from "./accessories/Accessories";
import ContactView from "../contact/Contact";
import axios from "axios";

class MaxineViewPage extends React.Component {
  state = {
    profile: {
      name: "",
      imageUrl: "",
      info:''
    },
    shirts: null,
    trousers: null,
    accessories: null
  };

  componentDidMount() {
    axios
      .get("http://15.206.16.194:3000/v2/api/psg/user/mobile/9959475551")
      .then(data => {
        this.setState({ shirts: data["data"]["details"][0]["recShirts"] });
        this.setState({ trousers: data["data"]["details"][0]["recTrousers"] });
        this.setState({
          accessories: data["data"]["details"][0]["recAccessories"]
        });
        this.setState({
          profile: {
            name: data["data"]["details"][0]["firstName"],
            imageUrl: data["data"]["details"][0]["images"][0],
            info:data["data"]["details"][0]["brief"]
          }
        });
      
      })
      .catch(error => {});
  }

  render() {
    return (
      <React.Fragment>
        <CoverView />
        <ProfileView profile={this.state.profile} />
        <StylesView />
        {this.state.shirts && <ShirtsView data={this.state.shirts} />}
        {this.state.trousers && <TrouserView data={this.state.trousers} />}
        {this.state.accessories && (
          <AccessoriesView data={this.state.accessories} />
        )}
        <ContactView />
      </React.Fragment>
    );
  }
}

export default MaxineViewPage;
