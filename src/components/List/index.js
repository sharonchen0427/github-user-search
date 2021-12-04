import React, { Component } from 'react'
// import Item from '../Item'
import './index.css'

export default class List extends Component {
    render() {
        //console.log("this.props.users",this.props.users);
        const{isFirst,isLoading,err,users}=this.props
        return (
            <div className="row">
            {

                isFirst?<h2>Welcome!</h2>:
                isLoading?<h2>Loading...</h2>:
                err?<h2 style={{color:'red'}}>{err}</h2>:
                users.map((userObj)=>{
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
