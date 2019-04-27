import React from 'react'

const Stations = (props) => {
  return (
    <div>
      <table>
        <tr>
          <th>Address</th>
          <th>Distance</th>
          <th>Bikes Available</th>
        </tr>
        {
        props.stations.map(station =>{

          return(
          <tr>
            <td>{station.extra.address}</td>
            <td>Distance Formula Here with long lat</td>
            <td>{station.free_bikes}</td>
          </tr>
            )
          })
          }
      </table>
    </div>
  )
}

export default Stations

