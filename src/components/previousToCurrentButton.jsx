import React, { Component } from "react";
import  LeftArrow from "../Images/LeftArrow.jpg"


class PreviousToCurrentButton extends Component {


 constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

 handleClick(){  
   this.props.clicked()
 }

  render() {

    return (
         
          <img className="ButtonImages" onClick={this.handleClick} key = "PrevToCurrent" src={LeftArrow} alt="Move to Current"/>     
          
   
    );
  }
}

export default PreviousToCurrentButton;