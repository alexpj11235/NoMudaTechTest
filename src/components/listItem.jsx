import React, { Component } from "react";


class ListItem extends Component {
  


 constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
  }

 handleClick(){   
    this.props.select( this.props.itemName , this.props.listType)
 }

  render() {
      const priorityItems = this.props.priorityItems
      let name = this.props.itemName
      let display = this.props.itemName
      //const priority = false
      if(priorityItems.includes(name) && this.props.listType === "Current"){
          //priority = true
          display = name.concat(" !")
      }
      const itemClass = (this.props.selectedList === this.props.listType && this.props.selectedItem === name)? "SelectedItem" : "Item"
    return (
         
          <div onClick={this.handleClick} key = {name} className = {itemClass}>      
            {display}
          </div>
   
    );
  }
}

export default ListItem;