import React, { Component } from 'react'
import Card from '../components/Card'

export default class Profile extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="container">
            <div className="row">
              <div className="col-sm">
                One of three columns
              </div>
              <div className="col-sm">
                <h3>Welcome</h3>
                <Card/>
              </div>
              <div className="col-sm">
                One of three columns
              </div>
            </div>
          </div>
        )
    }
}