import React, { Component } from "react";
import  DownArrow from "../Images/DownArrow.jpg"


class ItemDownButton extends Component {


 constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

 handleClick(){  
   this.props.clicked()
 }

  render() {

    return (
         
          <img className="ButtonImages" onClick={this.handleClick} key = "itemDown" src={DownArrow} alt="Move item down"/>     
          
   
    );
  }
}

export default ItemDownButton;