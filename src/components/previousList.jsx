import React, { Component } from "react";
import ListItem from "./listItem"

class PreviousList extends Component {



  render() {
    const previousItems = this.props.previousItems
    const selectedItem = this.props.selectedItem
    const selectedList = this.props.selectedList
    const priorityItems = this.props.priorityItems
    return (
      
      <div className="List">
      {
        previousItems.map((item , index)=>{
          return <ListItem priorityItems={priorityItems} key = {item+index.toString()} itemName = {item} select={this.props.select} listType="Previous" selectedItem = {selectedItem} selectedList = {selectedList}></ListItem>
        })
      }
      </div>
    );
  }
}

export default PreviousList;