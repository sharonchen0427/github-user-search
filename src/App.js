import React, { Component } from 'react'
import './App.css';
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state={
    users:[]
  }
  saveUsers=(users)=>{
    this.setState({users:users})
    // this.setState({users})
  }
  render() {
    const {users} =this.state
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers}/> 
        {/* pass method and get users as param-->set state*/}
        <List users={users}/>
        {/* pass data through state */}
    </div>
    );
  }
}
