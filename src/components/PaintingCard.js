import React from 'react'
import PropTypes from 'prop-types'
import './PaintingCard.css';

const PaintingCard = (props) => {
  return (
    <div className='Painting-card'>
      <div className='Painting-image-container'>
        <img className='Painting-image' src={props.image} alt=""/>
      </div>
      <p>{props.title}</p>
      <p>{props.artist.name}</p>
    </div>
  )
}

export default PaintingCard
