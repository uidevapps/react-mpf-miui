import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import HeaderTextComponent from "../../../../components/ui/headerText/HeaderText";
import AboutMeComponent from "./aboutMe/aboutMe";
import ProfileImageComponent from "./profileImage/profileImage";
import Container from "@material-ui/core/Container";
import PersonalInfoComponent from "./personalInfo/PersonalInfo";
import axios from "axios";

class ProfilePage extends React.Component {
  state = {
    profile: {
      fristName: "",
      lastName: "",
      image: "",
      brief: "",
      faceType: {
        image: "",
        name: ""
      },
      facialLook: {
        image: "",
        name: ""
      },
      skinType: {
        image: "",
        name: ""
      },
      clothingStyle: {
        image: "",
        name: ""
      },
      bodyType: {
        image: "",
        name: ""
      },
      existingWadrobeMix: {
        image: "",
        name: ""
      }
    }
  };
  componentDidMount() {
    axios
      .get("http://15.206.16.194:3000/v2/api/psg/user/mobile/9959475551")
      .then(data => {
        const profileData = { ...data["data"]["details"][0] };
        this.setState({
          profile: {
            fristName: profileData["firstName"],
            lastName: profileData["lastName"],
            image: profileData["images"][0],
            brief: profileData["brief"],
            faceType: {
              name: profileData["faceType"].name,
              image: profileData["faceType"].image
            },
            facialLook: {
              name: profileData["facialLook"].name,
              image: profileData["facialLook"].image
            },
            skinType: {
              image: profileData["skinType"].image,
              name: profileData["skinType"].name
            },
            clothingStyle: {
              image: profileData["clothingStyle"].image,
              name: profileData["clothingStyle"].name
            },
            bodyType: {
              image: profileData["bodyType"].image,
              name: profileData["bodyType"].name
            },
            existingWadrobeMix: {
              image: profileData["existingWadrobeMix"].image,
              name: profileData["existingWadrobeMix"].name
            }
          }
        });
       
      })
      .catch(error => {
       
      });
  }
  render() {
    
    let renderData = null;
    if (this.state.profile) {
      renderData = (
        <React.Fragment>
          <Container maxWidth="lg">
            <React.Fragment>
              <HeaderTextComponent
                title={`${this.state.profile["fristName"]} ${this.state.profile["lastName"]}'s Profile`}
                subTitle="My Perfect Fit Personal Style Guide"
              />
            </React.Fragment>
            <Paper>
              <Grid container spacing={0}>
                <Grid item md={5} lg={5} xs={12} sm={6}>
                  <ProfileImageComponent imgUrl={this.state.profile["image"]} />
                </Grid>
                <Grid item md={7} lg={7} xs={12} sm={6}>
                  <AboutMeComponent info={this.state.profile['brief']} />
                </Grid>
              </Grid>
            </Paper>
            <PersonalInfoComponent />
          </Container>
        </React.Fragment>
      );
    } else {
      renderData = (
        <Container maxWidth="lg">
          <Paper>
            <h5>Plese wait data loading...</h5>
          </Paper>
        </Container>
      );
    }
    return <React.Fragment>{renderData}</React.Fragment>;
  }
}

export default ProfilePage;
