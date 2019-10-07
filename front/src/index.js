// el inicio de la app
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./components/MainContainer/Main";

//Config Ant + Boostrap
import "../../back/src/public/styles/Override.css";
import "../../back/src/public/styles/Site.css";
// import "../../back/src/public/styles/Login.css";
import 'antd/dist/antd.css';
// import "bootstrap-css-only/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);

