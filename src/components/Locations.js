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

  locations = locations.filter( item => {
    return item.name !== "5 - Demo CycloShare Lab";
  })

  locations = locations.slice(0,19)

  return (
    <div>
      <table className="table">
        <thead className="thead-light">
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
              <td>{props.distance(location.latitude, location.longitude, userLat,  userLong, 'M').toFixed(2)} mi</td>
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
