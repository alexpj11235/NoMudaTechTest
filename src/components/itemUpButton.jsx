import React, { Component } from "react";
import  UpArrow from "../Images/UpArrow.jpg"


class ItemUpButton extends Component {


 constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

 handleClick(){  
   this.props.clicked()
 }

  render() {

    return (
         
          <img  className="ButtonImages" onClick={this.handleClick} key = "itemUp" src={UpArrow} alt="Move item up"/>     
          
   
    );
  }
}

export default ItemUpButton;