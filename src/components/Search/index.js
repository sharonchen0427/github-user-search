import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    //0.initial: {isFirst:true, isLoading:false}
    handleSearch=()=>{ 
        const {keywordElement:{value: keyword}}=this
        console.log("keyword",keyword)
//1.before req
        this.props.updateAppState({isFirst:false, isLoading:true})
        axios.get(`/api1/search/users?q=${keyword}`)
        .then(
            response=>
            {
                //2.after get response, it is not loading,
                this.props.updateAppState({isLoading: false,users:response.data.items})
            },
                // {this.props.saveUsers(response.data.items)
                //console.log('suceed',response.data)
           // }
           //3.when get err, is not loading, report err msg
          err=>{
            this.props.updateAppState({isLoading: false,err:err.message})
          }
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
