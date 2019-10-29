import React, { Component } from "react";
import Footer from "../FooterContainer/footer";

export default class FooterContainer extends Component {
  constructor() {
    super();
    this.state = {
      scrollChange: "hidden-footer"
    };

    this.onScroll = this.onScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
}

onScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {

      this.setState({
        scrollChange: "show-footer"
      });

    } else {
      this.setState({
        scrollChange: "hidden-footer"
      });
    }
  }
  render() {
    return <Footer scrollChange={this.state.scrollChange} />;
  }
}
