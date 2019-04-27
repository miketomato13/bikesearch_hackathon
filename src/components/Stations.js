import React from 'react'

const Stations = (props) => {
  return (
    <div>
        {
          props.stations.map(station =>{
            return(
              <p>{station.extra.address}</p>
              )
            })
          }
        </div>
  )
}

export default Stations