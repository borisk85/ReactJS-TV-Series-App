import React, { Component } from 'react'
import Loader from '../../components/Loader'

class SingleSeries extends Component {
  state = {
    show: null
  }

  componentDidMount() {
    const { id } = this.props.match.params
    fetch(`http://api.tvmaze.com/shows/${id}?ended-episodes`).then(res =>
      res.json().then(json => this.setState({ show: json }))
    )
  }

  render() {
    const { show } = this.state
    return (
      <div>
        {show === null && <Loader />}
        {show !== null && (
          <div>
            <p>{show.name}</p>
            <p>Premiered - {show.premiered}</p>
            <p>Rating - {show.rating.average}</p>
            <p>Genre - {show.genres}</p>
            <p>
              <img src={show.image.medium} alt='Show' />
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default SingleSeries
