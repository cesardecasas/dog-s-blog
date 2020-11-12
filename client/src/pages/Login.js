import {Component} from 'react'
import TextInput from '../components/TextInput'
import {__LoginUser} from '../services/UserServices'
import '../styles/Forms.css'

export default class Login extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            formError:false
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value, formError: false })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const loginData = await __LoginUser(this.state)
          this.props.toggleAuthenticated(true, loginData.user, () =>
            this.props.history.push('/feed')
          )
        } catch (error) {
          this.setState({ formError: true })
        }
      }

    render(){
        const {email, password} = this.state 
        return (
            <div className="signin flex-col">
                <form className="flex-col box" onSubmit={this.handleSubmit}>
                    <h3>Log In</h3>
                    {this.state.formError ? <p className='alert alert-danger'>Invalid credentials</p> : <p></p>}
                    <TextInput 
                        placeholder='Your Email'
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        className='Lemail'
                    />

                    <TextInput 
                        placeholder='Your Password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        className='Lpassword'
                    />

                    <button className='Blogin'>Login</button>
                </form>
            </div>
        )
    }

}