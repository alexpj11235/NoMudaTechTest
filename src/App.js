
import './App.css';
import React , {Component} from "react";
import PreviousList from "./components/previousList"
import CurrentList from "./components/currentList"
import PreviousToCurrentButton from "./components/previousToCurrentButton"
import CurrentToPreviousButton from "./components/currentToPreviousButton"
import ItemUpButton from "./components/itemUpButton"
import ItemDownButton from "./components/itemDownButton"
import AddItemButton from "./components/addItemButton"
import DeleteItemButton from "./components/DeleteItemButton"
import PrioritizeItemButton from "./components/prioritizeItemButton"


class App extends Component {
  state = { 
    selected:{name:"",
               listType:""},
    previousItems: [
    "Bananas",
    "Biscuits",
    "Bread",
    "Cereal",
    "Milk",
    "Sugar",
    "Tea bags"
  ],
       currentItems:[],
      priorityItems:[]
      }

  select = (name , listType) => {
    this.setState({
      selected : {name:name , listType:listType }
    })
  }

  addItemClick = (name , currentCheck , previousCheck)=>{
   console.log("adding item" )
   if(currentCheck === true && !this.state.currentItems.includes(name)){
     const newCurrent = this.state.currentItems
     newCurrent.push(name)
     this.setState({currentItems: newCurrent})
   }
   if(previousCheck === true && !this.state.previousItems.includes(name)){
    const newPrevious = this.state.previousItems
    newPrevious.push(name)
    this.setState({previousItems: newPrevious})
  }

  }

deleteItemClick = ()=>{

    if(this.state.selected.listType === "Current"){
       const index = this.state.currentItems.indexOf(this.state.selected.name) 

       const newCurrentItems = this.state.currentItems
       newCurrentItems.splice(index , 1)
       this.setState({currentItems: newCurrentItems})
       this.setState({selected: {name:"" , listType:"" }})
    }
    if(this.state.selected.listType === "Previous"){
      const index = this.state.previousItems.indexOf(this.state.selected.name) 


        const newPreviousItems = this.state.previousItems
        newPreviousItems.splice(index , 1)
        this.setState({previousItems: newPreviousItems})
      this.setState({selected: {name:"" , listType:"" }})
   }
  
}

prioritizeItemClick = () => {
  const newPriority = this.state.priorityItems
  if(newPriority.includes(this.state.selected.name)){
   const index = this.state.priorityItems.indexOf(this.state.selected.name)
   newPriority.splice(index , 1)
  }
  else{
    newPriority.push(this.state.selected.name)
    if(this.state.currentItems.includes(this.state.selected.name)){
       const index = this.state.currentItems.indexOf(this.state.selected.name)
       const newCurrentItems = this.state.currentItems
       const item = newCurrentItems.splice(index , 1)[0]
       newCurrentItems.unshift(item)
    }
  }
  this.setState({priorityItems: newPriority})
}

  upClick = () =>{
  if(this.state.selected.listType === "Current"){
    const index = this.state.currentItems.indexOf(this.state.selected.name)
    if(index > 0){
      const newCurrentItems = this.state.currentItems
      const item = newCurrentItems.splice(index , 1)[0]
      newCurrentItems.splice(index-1 , 0  , item)
      this.setState({currentItems: newCurrentItems})
    }
  }
  if(this.state.selected.listType === "Previous"){
    const index = this.state.previousItems.indexOf(this.state.selected.name)
    if(index > 0){
      const newPreviousItems = this.state.previousItems
      const item = newPreviousItems.splice(index , 1)[0]
      newPreviousItems.splice(index-1 , 0  , item)
      this.setState({previousItems: newPreviousItems})
    }
  }
  }

  DownClick = () =>{
    if(this.state.selected.listType === "Current"){
      const index = this.state.currentItems.indexOf(this.state.selected.name)
      if(index < this.state.currentItems.length-1){
        const newCurrentItems = this.state.currentItems
        const item = newCurrentItems.splice(index , 1)[0]
        newCurrentItems.splice(index+1 , 0  , item)
        this.setState({currentItems: newCurrentItems})
      }
    }
    if(this.state.selected.listType === "Previous"){
      const index = this.state.previousItems.indexOf(this.state.selected.name)
      if(index < this.state.previousItems.length-1){
        const newPreviousItems = this.state.previousItems
        const item = newPreviousItems.splice(index , 1)[0]
        newPreviousItems.splice(index+1 , 0  , item)
        this.setState({previousItems: newPreviousItems})
      }
    }
    }

 previousToCurrentClick = () =>{
   if(!this.state.currentItems.includes(this.state.selected.name) && this.state.selected.listType === "Previous"){

     this.setState({currentItems:[...this.state.currentItems , this.state.selected.name]})
     this.setState({selected:{name:this.state.selected.name, listType: "Current"}})
   }
 }

currentToPreviousClick = () =>{
  if(this.state.selected.listType === "Current"){
    const index = this.state.currentItems.indexOf(this.state.selected.name)
    if(index >-1){

      const newCurrentItems = this.state.currentItems
      newCurrentItems.splice(index , 1)
      this.setState({currentItems: newCurrentItems})
      this.setState({selected:{name:this.state.selected.name,
        listType: "Previous"}})
    }
    if(!this.state.previousItems.includes(this.state.selected.name)){
      this.setState({previousItems:[...this.state.previousItems , this.state.selected.name]})

    }
  }
}

  render(){


      return (

        <div className="App">
            <header className="CurrentHeader">
               Current
            </header>


            <div className="CurrentList">
            <CurrentList  priorityItems={this.state.priorityItems} currentItems = {this.state.currentItems} select={this.select} selectedItem = {this.state.selected.name} selectedList = {this.state.selected.listType}/>
             </div>
             <header className="PreviousHeader">
               Previous
            </header>
             <div className="PreviousList">
            <PreviousList priorityItems={this.state.priorityItems} previousItems = {this.state.previousItems} select={this.select} selectedItem = {this.state.selected.name} selectedList = {this.state.selected.listType}/>  
             </div>
            
            <div className="Buttons">          
            <div className="CurrentToPreviousButton">
            <CurrentToPreviousButton name={this.state.selected.name} listType={this.state.selected.listType} clicked={this.currentToPreviousClick}></CurrentToPreviousButton>
            </div>
            
            <div className="PreviousToCurrentButton">
            <PreviousToCurrentButton name={this.state.selected.name} listType={this.state.selected.listType} clicked={this.previousToCurrentClick}></PreviousToCurrentButton>
            </div>

            <div className="ItemUpButton">
            <ItemUpButton  clicked={this.upClick} ></ItemUpButton>
            </div>

            <div className="ItemDownButton">
            <ItemDownButton  clicked={this.DownClick} ></ItemDownButton>
            </div>
            
            <div className="AddItemButton">
            <AddItemButton   addName={this.addItemClick}></AddItemButton>
            </div>

            <div className="DeleteItemButton">
            <DeleteItemButton  clicked={this.deleteItemClick} ></DeleteItemButton>
            </div>
            <div className="PrioritizeItemButton">
            <PrioritizeItemButton  clicked={this.prioritizeItemClick} ></PrioritizeItemButton>
            </div>
            </div>

           </div>
      );
    
  }
}

export default App;
