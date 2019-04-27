import React from 'react'

const Locations = (props) => {
  let locations = props.locations
  let currentLat = 25.7760782;
  let currentLong = -80.194204;
  locations = locations.sort((a,b) => {
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
  locations.splice(-1,1) //removes the last element, which is a demo station
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
            locations.map(location => {
            return(
            <tr
              onClick={e=> props.switchLocation(e, location)}
              style={{cursor: 'pointer'}}
            >
              <td>{location.extra.address}</td>
              <td>{props.distance(location.latitude, location.longitude, currentLat,  currentLong, 'M').toFixed(2)} miles</td>
              <td>{location.free_bikes}</td>
            </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Locations
