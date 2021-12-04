import React, { Component } from 'react'
// import Item from '../Item'
import './index.css'
import PubSub from 'pubsub-js'

//Q:whe is satteObj came from?
export default class List extends Component {
    state={
        users:[], //initial to be array
        isFirst:true, //is it first time opening a page
        isLoading:false,//flag: is loading
        err:'', //store error msg
      }

      //set timer, set pubsub
      //once the page had been render
    componentDidMount(){
        //_ as a placeholder to skip msg param
        this.token=PubSub.subscribe('atguigu',(_,stateObj)=>{
            this.setState(stateObj)
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
        //this上面可以随便挂东西吗？
    }

    render() {
        //console.log("this.props.users",this.props.users);
        const{users,isFirst,isLoading,err}=this.state 
        // change to get from self's state
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
