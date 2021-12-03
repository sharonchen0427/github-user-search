import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    
    handleSearch=()=>{ 
        const {keywordElement:{value: keyword}}=this
        console.log("keyword",keyword)
        axios.get(`/api1/search/users?q=${keyword}`)
        .then(
            response=>
                this.props.saveUsers(response.data.items)
                //console.log('suceed',response.data)
          
        )
    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c=> this.keywordElement=c} type="text" placeholder="Enter the name you search"/>&nbsp;
                        <button onClick={this.handleSearch}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
}
