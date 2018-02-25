import React from 'react'
import PropTypes from 'prop-types'
import './PaintingContainer.css';
import Nav from './Nav'
import PaintingCard from './PaintingCard'

class PaintingContainer extends React.Component {
  state = ({
    filterText: '',
    filterSelection: 'title',
    sort: 'year inverted',
    paintings: []
  })

  componentDidMount () {
    fetch('http://localhost:3000/api/v1/paintings')
    .then(res => res.json())
    .then(json => {
      this.setState({
        paintings: json
      })
    })
  }

  renderPaintings = () => {
    let sortedPaintings = this.sortPaintings(this.state.paintings, this.state.sort)
    let filteredSortedPaintings = sortedPaintings
    if (this.state.filterText !== '') {
      filteredSortedPaintings = this.filterPaintings(sortedPaintings, this.state.filterSelection)
    }
    return filteredSortedPaintings.map((painting,id) => {
      return <PaintingCard {...painting} key={id} />
    })
  }

  sortPaintings = (paintings, sortBy) => {
    switch(sortBy) {
      case 'title':
        return paintings.sort((a,b) => (a.title).localeCompare(b.title))
        break;
      case 'title inverted':
        return paintings.sort((a,b) => (b.title).localeCompare(a.title))
        break;
      case 'year':
        return paintings.sort((a,b) => {
          return this.fixDate(a.date) - this.fixDate(b.date)
        })
        break;
      case 'year inverted':
        return paintings.sort((a,b) => {
          return this.fixDate(b.date) - this.fixDate(a.date)
        })
        break;
    }
  }

  filterPaintings = (paintings, filterBy) => {
    switch(filterBy) {
      case 'title':
        return paintings.filter(painting => painting.title.toLowerCase().includes(this.state.filterText.toLowerCase()))
        break;
      case 'artist':
        return paintings.filter(painting => painting.artist.name.toLowerCase().includes(this.state.filterText.toLowerCase()))
        break;
      case 'museum':
        return paintings.filter(painting => painting.museum.name.toLowerCase().includes(this.state.filterText.toLowerCase()))
        break;
    }
  }

  fixDate = (date) => {
    if (date === null) {
      date = '2018'
    }
    date = date.split(' ').join('')
    let numsArray = []
    let charsArray = date.split('')
    charsArray.forEach(char => {
      if (!(isNaN(char))) {
        numsArray.push(char)
      }
    })
    let rejoinedDate = numsArray.slice(0,4).join('')
    return parseInt(rejoinedDate)
  }

  toggleTitleSort = () => {
    if (this.state.sort === 'title') {
      this.setState({
        sort: 'title inverted'
      })
    } else if (this.state.sort === 'title inverted') {
      this.setState({
        sort: 'title'
      })
    } else {
      this.setState({
        sort: 'title'
      })
    }
  }

  toggleYearSort = () => {
    if (this.state.sort === 'year') {
      this.setState({
        sort: 'year inverted'
      })
    } else if (this.state.sort === 'year inverted') {
      this.setState({
        sort: 'year'
      })
    } else {
      this.setState({
        sort: 'year'
      })
    }
  }

  updateFilterSelection = (event) => {
    this.setState({
      filterSelection: event.target.value
    })

  }

  updateFilterText = (event) => {
    this.setState({
      filterText: event.target.value
    })

  }

  render () {
    return (
      <div className='Painting-container'>
        <Nav toggleTitleSort={this.toggleTitleSort} toggleYearSort={this.toggleYearSort} updateFilterSelection={this.updateFilterSelection} updateFilterText={this.updateFilterText} />
        <div className='Painting-flex'>
          {this.renderPaintings()}
        </div>
      </div>
    )
  }
}

export default PaintingContainer;
