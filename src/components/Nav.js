import React from 'react'
import PropTypes from 'prop-types'
import './Nav.css';
import sortIcon from '../sort-icon.png'


const Nav = (props) => {
  return (
    <div className='Nav'>
      <div className='Search'>
        <p>SEARCH BY:</p>
        <select onChange={props.updateFilterSelection} name="" id="">
          <option value="title">TITLE</option>
          <option value="artist">ARTIST</option>
          <option value="museum">MUSEUM</option>
        </select>
        <input onChange={props.updateFilterText} type="text"/>
      </div>
      <div className='Sort'>
        <div className='Sort-title'>
          <img className='Sort-icon' onClick={props.toggleTitleSort} src={sortIcon} alt="^"/>
          <p onClick={props.toggleTitleSort}>TITLE</p>
        </div>
        <div className='Sort-year'>
          <img className='Sort-icon' onClick={props.toggleYearSort} src={sortIcon} alt="^"/>
          <p onClick={props.toggleYearSort}>YEAR</p>
        </div>
      </div>
    </div>
  )
}

export default Nav
