import React, { Component } from "react";
import  Exclamation from "../Images/Exclamation.jpg"


class PrioritizeItemButton extends Component {


 constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

 handleClick(){  
   this.props.clicked()
 }

  render() {

    return (
         
          <img className="ExclamationButtonImage" onClick={this.handleClick} key = "prioritizeItem" src={Exclamation} alt="Prioritize Item"/>     
          
   
    );
  }
}

export default PrioritizeItemButton;