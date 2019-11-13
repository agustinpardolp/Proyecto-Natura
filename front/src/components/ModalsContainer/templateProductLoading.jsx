import {
  Spin,
  Alert,
} from "antd"
import React from "react";

export default function templateProductLoading(){

  return (
    <Spin tip="Loading...">
    <Alert
      message="Cargando productos..."
      description=""
      type="info"
      />
      <div>
        <img src="/assets/img/natura-logo.jpg" alt=""/>
      </div>
   
    </Spin>
  );
}
