import React, { Component } from "react";
import  Minus from "../Images/Minus.jpg"


class DeleteItemButton extends Component {


 constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

 handleClick(){  
   this.props.clicked()
 }

  render() {

    return (
         
          <img className="ButtonImages" onClick={this.handleClick} key = "deleteItem" src={Minus} alt="Delete Item"/>     
          
   
    );
  }
}

export default DeleteItemButton;