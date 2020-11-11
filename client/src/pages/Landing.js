import React from 'react'
import Dog from '../Imgs/maxresdefault.jpg'
import Nav from '../components/Nav'
import '../styles/Landing.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
    return (
      <div className="landing-page flex-row">
        <section className="left flex-sm flex-col">
          <div className="mask flex-col">
            <div className="content-wrapper flex-col">
              <h3 className="logo">Logo</h3>
              <div className="hero-wrapper flex-row">
                <div className="cl-left flex-col">
                  
                </div>
                <div className="cl-right flex-col">
                  <div className="path-wrapper">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="img-wrapper">
            <img src={Dog} alt="Doggies" />
          </div>
        </section>
        <section className="right flex-sm">
          <Nav />
          {children}
        </section>
      </div>
    )
  }