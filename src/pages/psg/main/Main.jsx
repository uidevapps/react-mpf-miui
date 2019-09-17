import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DashboardLayout from "../../../components/layout/dashboard/Dashboard";
import ShirtsPage from "./shirts/Shirts";
import TrouserPage from "./trousers/Trouser";
import AccessoriesPage from "./accessories/Accessories";
import SuitsPage from "./suits/Suits";
import ProfilePage from "./profile/Profile";
import MaxineViewPage from "./maxine/Maxine";
import StylePage from "./style/Style";
import CoverPage from "./cover/CoverPage";
import ContactPage from "./contact/Contact";
class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <DashboardLayout>
          <Switch>
            <Redirect exact from="/main" to="/main/cover" />
            <Route path="/main/cover" component={CoverPage}></Route>
            <Route path="/main/profile" component={ProfilePage}></Route>
            <Route path="/main/style" component={StylePage}></Route>
            <Route path="/main/shirts" render={() => <ShirtsPage />}></Route>
            <Route path="/main/suits" component={SuitsPage}></Route>
            <Route path="/main/trousers" component={TrouserPage}></Route>
            <Route path="/main/accessories" component={AccessoriesPage}></Route>
            <Route path="/main/contact" component={ContactPage}></Route>
            <Route path="/main/pdfview" component={MaxineViewPage}></Route>
          </Switch>
        </DashboardLayout>
      </React.Fragment>
    );
  }
}

export default MainPage;
