import React, { Component } from "react";
import ListItem from "./listItem"

class CurrentList extends Component {



  render() {
    const currentItems = this.props.currentItems
    const selectedItem = this.props.selectedItem
    const selectedList = this.props.selectedList
    const priorityItems = this.props.priorityItems
    return (
      
      <div className="List">
      {
        currentItems.map((item , index)=>{
          return <ListItem priorityItems={priorityItems} key = {item+index.toString()} itemName = {item} select={this.props.select} listType="Current" selectedItem = {selectedItem} selectedList = {selectedList}></ListItem>
        })
      }
      </div>
    );
  }
}

export default CurrentList;