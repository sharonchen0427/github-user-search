import React, { Component } from 'react'
// import Item from '../Item'
import './index.css'

export default class List extends Component {
    render() {
        //console.log("this.props.users",this.props.users);
        return (
            <div className="row">
            {

                
                this.props.users.map((userObj)=>{
                    return(
                        <div key={userObj.id} className="card">
                            <a rel="noreferrer" href={userObj.html_url} target="_blank">
                            <img src={userObj.avatar_url} alt="avator" style={{width: '100px'}}/>
                            </a>
                            <p className="card-text">{userObj.login}</p>
                        </div>
                    )
                })
            }
          </div>
        )
    }
}
