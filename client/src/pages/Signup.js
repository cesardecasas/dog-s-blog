import {Component} from 'react'
import TextInput from '../components/TextInput'
import '../styles/Forms.css'
import {__RegisterUser} from '../services/UserServices'

export default class Login extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            name:''
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await __RegisterUser(this.state)
          this.props.history.push('/login')
        } catch (error) {
          console.log(error)
        }
      }

    render(){
        const {email, password, name} = this.state 
        return (
            <div className="signup flex-col">
                <form className="flex-col box" onSubmit={this.handleSubmit}>
                    <h3>Sing Up</h3>
                    <TextInput 
                        placeholder='Your Name'
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                    />

                    <TextInput 
                        placeholder='Your Email'
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                    />

                    <TextInput 
                        placeholder='Your Password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                    />

                    <button>SingUp</button>
                </form>
            </div>
        )
    }

}