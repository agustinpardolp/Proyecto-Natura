import React from "react";
import SideBar from "../SiderBarContainer/SideBar"

export default class SideBarContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
            hiddenSidebar:false
          };
          this.onCollapse = this.onCollapse.bind(this)
          this.onScreenChange = this.onScreenChange.bind(this)
    }
componentDidMount() {
  window.addEventListener("resize", this.onScreenChange)
}
  onCollapse (collapsed){

    this.setState({ collapsed });
  };

  onScreenChange(e){
   
   var screenSize = window.innerWidth

   if(screenSize < 767){

     this.setState({hiddenSidebar:true})
   }else{
    this.setState({hiddenSidebar:false})
   }

  }

  render() {
    return (
        <SideBar onCollapse = {this.onCollapse} collapsed = {this.state.collapsed} hiddenSidebar = {this.state.hiddenSidebar}  onScreenChange ={this.onScreenChange}/>
    );
  }
}