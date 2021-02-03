import React, { Component } from "react";
import  RightArrow from "../Images/RightArrow.jpg"


class CurrentToPreviousButton extends Component {


 constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

 handleClick(){  
   this.props.clicked()
 }

  render() {

    return (
         
          <img className="ButtonImages" onClick={this.handleClick} key = "PrevToCurrent" src={RightArrow} alt="Move to Previous"/>     
          
   
    );
  }
}

export default CurrentToPreviousButton;