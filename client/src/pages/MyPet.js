import React, { Component } from 'react'
import '../styles/Profile.css'
import {__CreatePet, __GetPets} from '../services/PetServices'
import  Card from '../components/Card'
import '../styles/Feed.css'


class MyPet extends Component{
    constructor(){
        super()
        this.state={
            pets:[],
            name:'',
            type:'',
            breed:'',

        }
    }
    componentDidMount(){
        this.getPet()
    }

    getPet = async()=>{
        const id = this.props.currentUser._id
        try {
            const pets = await __GetPets(id)
            this.setState({pets:pets})

        } catch (error) {
            throw error
        }
    } 

    createPet =async(e)=>{
        e.preventDefault()
        try {
            await __CreatePet(this.state, this.props.currentUser._id)          
        } catch (error) {
            throw error
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
      }

    render(){
        return (
            <div>
                <div className='template'>
                    <main className='content'>
                        <p></p>
                    <h4>My Pets</h4>
                    <div className='hello'>
                                                    <div className='btn-group'>
                                                        <button  
                                                            type="button" 
                                                            className="btn btn-primary btn-sm dropdown-toggle hello" 
                                                            data-toggle="dropdown" 
                                                            aria-haspopup="true" 
                                                            aria-expanded="false"
                                                        >
                                                            Add Pet
                                                        </button>
                                                        <div className='dropdown-menu'>
                                                            
                                                            <form className='px-4 py-3' onSubmit={this.createPet} >
                                                                <div className='form-group'>
                                                                    <label htmlFor='update'>Add Pet</label>
                                                                    <input 
                                                                        type="text" 
                                                                        className="form-control" 
                                                                        id='image' 
                                                                        placeholder="Name" 
                                                                        name='name' 
                                                                        value={this.state.name} 
                                                                        onChange={this.handleChange} 
                                                                        style={{width: 200}}
                                                                    />
                                                                </div>
                                                                <div className='form-group'>
                                                                    <input 
                                                                        type="text" 
                                                                        className="form-control" 
                                                                        id='image' 
                                                                        placeholder="Kind" 
                                                                        style={{width: 200}}
                                                                        value={this.state.type}
                                                                        name='type'
                                                                        onChange={this.handleChange}
                                                                    />
                                                                </div>
                                                                <div className='form-group'>
                                                                    <input 
                                                                        type="text" 
                                                                        className="form-control" 
                                                                        id='image' 
                                                                        placeholder="Breed" 
                                                                        style={{width: 200}}
                                                                        value={this.state.breed}
                                                                        name='breed'
                                                                        onChange={this.handleChange}
                                                                    />
                                                                </div>
                                                                <button  className="btn btn-primary">Add!</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                
             
                </main>
                
                </div>
                <br/>
                <div className='feed'>
                    <main>
                {this.state.pets.map((pet, index)=>(
                    <Card key={index}>
                        <div className="card post pet" style={{width: 475}}>
                                            <div className='row user'>
                                                <h6 className='userName'>{pet.name}</h6>
                                            </div>
                                            <img src={pet.pet_pic} className="card-img-top img-thumbnail" alt="ike"/> 
                                            <div className="card-body">
                                                <p className="card-text">{pet.type}</p>
                                                <p className='like'>{pet.breed}</p>
                                            </div>
                                        </div>
                                        <br/>
                    </Card>
                ))}
                </main>
                </div>
            </div>
        )
    }
}

export default MyPet