import {Component} from 'react'
import TextInput from '../components/TextInput'
import '../styles/Forms.css'

export default class Login extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value, formError: false })
    }

    render(){
        const {email, password} = this.state 
        return (
            <div className="signin flex-col">
                <form className="flex-col">
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