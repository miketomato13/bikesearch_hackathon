import React from 'react'

const Stations = (props) => {
  let stations = props.stations
  let currentLat = 25.7760782;
  let currentLong = -80.194204;
  stations = stations.sort((a,b) => {
    let distA = props.distance(a.latitude, a.longitude, currentLat, currentLong)
    let distB = props.distance(b.latitude, b.longitude, currentLat, currentLong)
    if(distA < distB)
    {
      return -1
    }
    else if(distA > distB)
    {
      return 1;
    }
    return 0;

  })
  stations.splice(-1,1) //removes the last element, which is a demo station
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
            stations.map(station => {

            return(
            <tr>
              <td>{station.extra.address}</td>
              <td>{props.distance(station.latitude, station.longitude, currentLat,  currentLong, 'M').toFixed(2)} miles</td>
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
