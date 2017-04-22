import React from 'react'
import './Header.scss'
import {NavLink} from 'react-router-dom'

export default props =>

  <header className="header">
    <div className="container">
      <div className="title">N</div>
      <nav className="navigation" role="navigation">
        <NavLink exact to={`/`} className="nav--item ripple" activeClassName="active">Calculator</NavLink>
        <NavLink to={`/about`} className="nav--item ripple" activeClassName="active">About</NavLink>
      </nav>
    </div>
  </header>
