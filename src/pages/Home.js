import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Stations from '../components/Stations'


export default class Home extends Component {
  state = { stations: [],
          }

  componentDidMount() {
    axios.get(`https://api.citybik.es/v2/networks/decobike-miami-beach`)
      .then(res => {
        this.setState({ stations: res.data.network.stations })
        console.log(this.state.stations)
      })
    }

  render() {
    const { stations } = this.state
    return (
      <div>
        <Navbar/>
        <Stations stations={stations} />
      </div>
    )
  }
}

