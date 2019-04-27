import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'


export default class Home extends Component {
  state = { data: []
          }

  componentDidMount() {
    axios.get(`https://api.citybik.es/v2/networks/decobike-miami-beach`)
      .then(res => {
        this.setState({ data: res.data })
        console.log(this.state.data)
      })
    }

  render() {
    return (
      <div>
        <Navbar/>
      </div>
    )
  }
}

