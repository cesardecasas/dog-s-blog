import {Component} from 'react'
import TextInput from '../components/TextInput'
import '../styles/Forms.css'

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

    render(){
        const {email, password, name} = this.state 
        return (
            <div className="signup flex-col">
                <form className="flex-col">
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