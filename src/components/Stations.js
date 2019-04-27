import React from 'react'

const Stations = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Distance</th>
            <th>Bikes Available</th>
          </tr>
        </thead>
        <tbody>
          {
          props.stations.map(station =>{

            return(
            <tr>
              <td>{station.extra.address}</td>
              <td>{props.distance(station.latitude, station.longitude, 25.7760782,  -80.194204, 'M').toFixed(2)} miles</td>
              <td>{station.free_bikes}</td>
            </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Stations
