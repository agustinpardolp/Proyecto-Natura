// el inicio de la app
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./components/mainContainer/Main";

//Config MDB

import "../../back/src/public/styles/Override.css";
// import "../../back/src/public/styles/Layout.css";
import 'antd/dist/antd.css';

// import "../../back/src/public/styles/eventCalendar.css"
// import "../../back/src/public/styles/smartphone.css";
// import "../../back/src/public/styles/sidebar.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);

