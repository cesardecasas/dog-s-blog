import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import Login from '../pages/Login'
import Singup from '../pages/Signup'
import Landing from '../pages/Landing'
import AboutUs from '../pages/AboutUs'
import {__CheckSession} from '../services/UserServices'
import ProtectedRoute from './ProtectedRoute'
import Layout from './Layout'
import Profile from '../pages/Profile'


class Router extends Component{
    constructor(){
        super()
        this.state={
            currentUser:null,
            authenticated:false,
        }
    }

    componentDidMount(){
        this.verifyTokenValid()
    }


    verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        if (token) {
          try {
            const session = await __CheckSession()
            console.log('session', session)
            this.setState(
              {
                currentUser: session.user,
                authenticated: true
              },
              () => this.props.history.push('/profile')
            )
          } catch (error) {
            this.setState({ currentUser: null, authenticated: false })
            localStorage.clear()
          }
        }
      }

      toggleAuthenticated = (value, user, done) => {
        this.setState({ authenticated: value, currentUser: user }, () => done())
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
                            <Login 
                                toggleAuthenticated={this.toggleAuthenticated}
                                {...props}
                                />
                        </Landing>
                    )}/>
                    <Route extact path='/singup' component={(props)=>(
                        <Landing>
                            <Singup {...props}/>
                        </Landing>
                    )}/>
                    <ProtectedRoute
                        authenticated={this.state.authenticated}
                        path='/profile'
                        component={(props)=>(
                            <Layout authenticated={this.state.authenticated}
                                    currentUser={this.state.currentUser}
                            >
                                <Profile/>
                            </Layout>
                        )}
                    />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Router)