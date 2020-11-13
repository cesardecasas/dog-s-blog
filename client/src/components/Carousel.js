import React from 'react'
import '../styles/Landing.css'
import Cat from '../Imgs/cat.jpg'
import Hamster from '../Imgs/hamster.jpg'

const Carousel = () =>{
 return(
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='https://housemydog.com/blog/wp-content/uploads/2017/01/1-2.jpg' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Cat} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Hamster} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
 )
}

export default Carousel