import React, { Component } from 'react'
import './App.css';
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
 
  // saveUsers=(users)=>{
  //   this.setState({users:users})
  //   // this.setState({users})
  // }
  //updaate app's state
 
  render() {
    // const {users} =this.state
    return (
      <div className="container">
        <Search /> 
        {/* pass method and get users as param-->set state*/}
        <List /> 
        {/* all fields in state */}
        {/* pass data through state */}
    </div>
    );
  }
}
