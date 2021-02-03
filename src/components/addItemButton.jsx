import React, { Component } from "react";
import Plus from "../Images/Plus.jpg"
import Modal from 'react-modal'

class AddItemButton extends Component {
  state ={
      showAddItemBox:false,
      itemName: "",
      currentCheck: true,
      previousCheck: true
  }

 constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCurrentCheck = this.handleCurrentCheck.bind(this);
    this.handlePreviousCheck = this.handlePreviousCheck.bind(this);
 

  }

 handleClick(){  
   this.setState({showAddItemBox:true})
 }

 handleCurrentCheck(e){
   const prevCheck = this.state.previousCheck
  if(prevCheck === true){
  this.setState({currentCheck:e.target.checked})
  } 
 }

 handlePreviousCheck(e){
  const currCheck = this.state.currentCheck
 if(currCheck === true){
 this.setState({previousCheck:e.target.checked})
 }
  
}


 handleSubmit(){
   //e.preventDefault();
    this.setState({showAddItemBox:false})
    this.props.addName(this.state.itemName , this.state.currentCheck , this.state.previousCheck)
 
 }

 handleInput(e){
  const { value } = e.target;

  this.setState({ itemName: value });
  
 }

  render() {
   let show = this.state.showAddItemBox
    return (
          <div>

          <img className="ButtonImages" onClick={this.handleClick} key = "addItem" src={Plus} alt="Add item"/>     
          <Modal
    
          className="AddItemModal"
          isOpen={show}
          ariaHideApp={false}
   
        >  
          <form onSubmit={this.handleSubmit} className="AddItemForm">
            <div className="AddItemName"> 
            Item Name:
              </div>
            <textarea
              required
              className="AddItemInput"
              name="AddItemInput"
              onChange={this.handleInput}
              type="text"
              id="content"
              height="500"
            />

            <div className="CCheck">
          <input
          className="CurrentCheck"
        id ="currentCheck"
        type="checkbox"
        checked={this.state.currentCheck}
        onChange={this.handleCurrentCheck}
       />
       <div className="CText">
         Current
       </div>
          </div>

            <div className="PCheck">
        <input
        className="PreviousCheck"
        id ="previousCheck"
        type="checkbox"
        checked={this.state.previousCheck}
        onChange={this.handlePreviousCheck}
       />
        <div className="PText">
          Previous
        </div>
        </div>
            <button className="SubmitButton">Add Item</button>
          </form>
        </Modal>

          </div>
   
    );
  }
}

export default AddItemButton;