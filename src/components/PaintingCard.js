import React from 'react'
import PropTypes from 'prop-types'
import './PaintingCard.css';

const PaintingCard = (props) => {
  let museumData = props.museum.name.split(', ')
  return (
    <div className='Painting-card'>
      <div className='Painting-image-container'>
        <img className='Painting-image' src={props.image} alt=""/>
      </div>
      <div className='Text-container'>
        <p className='Painting-title'>{props.title}</p>
        <p className='Painting-artist'>{props.artist.name}</p>
        <p className='Painting-date'>{props.date}</p>
        <p className='Painting-museum-name'>{museumData[0]}</p>
        <p className='Painting-museum-location'>{museumData[1]}</p>
      </div>
    </div>
  )
}

export default PaintingCard
