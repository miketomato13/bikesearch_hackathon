import React from 'react'



const Locations = (props) => {

  let locations = props.locations
  let userLat = props.user_location.lat
  let userLong = props.user_location.long


  locations = locations.sort((a,b) => {
    let distA = props.distance(a.latitude, a.longitude, userLat, userLong)
    let distB = props.distance(b.latitude, b.longitude, userLat, userLong)
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
  locations = locations.slice(0,20)
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Address</th>
            <th scope="col">Distance</th>
            <th scope="col">Bikes Available</th>
          </tr>
        </thead>
        <tbody>
          {
            locations.map(location => {
            return(
            <tr
              onClick={e=> props.switchLocation(e, location)}
              style={{cursor: 'pointer'}}
              key={location.id}
            >
              <td>{location.extra.address}</td>
              <td>{props.distance(location.latitude, location.longitude, userLat,  userLong, 'M').toFixed(2)} miles</td>
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
