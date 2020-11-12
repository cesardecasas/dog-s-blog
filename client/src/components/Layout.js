import React from 'react'
import Nav from './Nav'

// eslint-disable-next-line import/no-anonymous-default-export
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
