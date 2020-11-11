import React from 'react'
import Nav from './Nav'

export default ({ children, authenticated, currentUser }) => (
  <div>
    <Nav
      authenticated={authenticated}
      currentUser={currentUser}
      className="header-elevated"
    />
    {children}
  </div>
)
