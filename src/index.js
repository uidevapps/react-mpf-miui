import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";
import "./index.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store/configureStore";
const store = configureStore();

const rootElement = document.getElementById("root");
let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootElement
  );
};
if (module.hot) {
  module.hot.accept("./app/App", () => {
    setTimeout(render);
  });
}
render();
serviceWorker.unregister();
