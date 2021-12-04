import React, { Component } from 'react'
import './App.css';
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state={
    users:[], //initial to be array
    isFirst:true, //is it first time opening a page
    isLoading:false,//flag: is loading
    err:'', //store error msg
  }
  // saveUsers=(users)=>{
  //   this.setState({users:users})
  //   // this.setState({users})
  // }
  //updaate app's state
  updateAppState=(stateObj)=>{
    this.setState(stateObj)
  }
  render() {
    // const {users} =this.state
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/> 
        {/* pass method and get users as param-->set state*/}
        <List {...this.state}/> 
        {/* all fields in state */}
        {/* pass data through state */}
    </div>
    );
  }
}
