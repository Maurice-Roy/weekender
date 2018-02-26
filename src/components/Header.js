import React from 'react'
import PropTypes from 'prop-types'
import logo from '../scull.png'

const Header = (props) => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">♱ ART BY DEAD PEOPLE ♱</h1>
      {/* <header className="App-header">
        <img src='' className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header> */}
      {/* <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p> */}
    </div>
  )
}

export default Header
