import React, { useState, useEffect } from "react";
import CoverView from "../cover/CoverPage";
import ProfileView from "./profile/profile";
import StylesView from "./style/Styles";
import ShirtsView from "./shirts/Shirts";
import TrouserView from "./trousers/Trouser";
import AccessoriesView from "./accessories/Accessories";
import ContactView from "../contact/Contact";
import axios from "axios";

const MaxineViewPage = () => {
  const [shirts, updateShirts] = useState([]);
  const [trousers, updatetrousers] = useState([]);
  const [accessories, updateAccessories] = useState([]);
  const [profile, updateProfile] = useState({});

  useEffect(() => {
    console.log('data');
    axios
      .get("http://15.206.16.194:3000/v2/api/psg/user/mobile/9959475551")
      .then(data => {
        updateShirts(data["data"]["details"][0]["recShirts"]);
        updatetrousers(data["data"]["details"][0]["recTrousers"]);
        updateAccessories(data["data"]["details"][0]["recAccessories"]);
        updateProfile({
          name: data["data"]["details"][0]["firstName"],
          imageUrl: data["data"]["details"][0]["images"][0],
          info: data["data"]["details"][0]["brief"]
        });
      })
      .catch(error => {});
  }, []);

  return (
    <React.Fragment>
      <CoverView />
      {profile && <ProfileView profile={profile} />}
      <StylesView />
      {shirts && <ShirtsView data={shirts} />}
      {trousers && <TrouserView data={trousers} />}
      {accessories && <AccessoriesView data={accessories} />}
      <ContactView />
    </React.Fragment>
  );
};

export default MaxineViewPage;
