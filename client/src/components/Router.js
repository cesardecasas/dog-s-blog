import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import Login from '../pages/Login'
import Singup from '../pages/Signup'
import Landing from '../pages/Landing'
import AboutUs from '../pages/AboutUs'


class Router extends Component{
    constructor(){
        super()
        this.state={
            currentUser:null,
            authenticated:false,
        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={(props)=>(
                        <Landing>
                            <AboutUs/>
                        </Landing>
                    )}/>
                    <Route  path='/login' component={(props)=>(
                        <Landing>
                            <Login/>
                        </Landing>
                    )}/>
                    <Route extact path='/singup' component={(props)=>(
                        <Landing>
                            <Singup/>
                        </Landing>
                    )}/>
                </Switch>
            </div>
        )
    }
}

export default Router