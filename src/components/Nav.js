import React from 'react'
import PropTypes from 'prop-types'
import './Nav.css';
import sortIcon from '../sort-icon.png'


const Nav = (props) => {
  return (
    <div className='Nav'>
      <div className='Search'>
        <p className='Search-by-text'>SEARCH BY:</p>
        <select className='Search-selection' onChange={props.updateFilterSelection} name="" id="">
          <option value="title">•TITLE•</option>
          <option value="artist">•ARTIST•</option>
          <option value="museum">•MUSEUM•</option>
        </select>
        <input className='Search-input' onChange={props.updateFilterText} type="text"/>
      </div>
      <div className='Sort'>
        <div className='Sort-title'>
          <img className='Sort-icon' onClick={props.toggleTitleSort} src={sortIcon} alt="^"/>
          <a href='#' onClick={props.toggleTitleSort}>TITLE</a>
        </div>
        <div className='Sort-year'>
          <img className='Sort-icon' onClick={props.toggleYearSort} src={sortIcon} alt="^"/>
          <a href='#' onClick={props.toggleYearSort}>YEAR</a>
        </div>
      </div>
    </div>
  )
}

export default Nav
