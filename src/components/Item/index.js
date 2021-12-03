import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className="card">
            <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" alt="avator" style={{width: '100px'}}/>
            </a>
            <p className="card-text">react.js</p>
          </div>
        )
    }
}
