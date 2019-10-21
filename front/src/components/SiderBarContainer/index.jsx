import React from "react";
import SideBar from "../SiderBarContainer/SideBar"

export default class SideBarContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
          };
          this.onCollapse = this.onCollapse.bind(this)
    }

  onCollapse (collapsed){

    this.setState({ collapsed });
  };

  render() {
    return (
        <SideBar onCollapse = {this.onCollapse} collapsed = {this.state.collapsed}/>
    );
  }
}