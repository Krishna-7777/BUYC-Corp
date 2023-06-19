import React, { useEffect, useState } from 'react'

function MarketPLace() {
    const [data,setData]=useState()
    useEffect(() => {
      (async()=>{
        let carsdata= await fetch("https://buyc-corp-g63s.onrender.com/cars")
        carsdata= await carsdata.json()
        setData(carsdata)
    })()
    }, [])
       
    
    return (
        <div>
            <h1>MarketPLace</h1>
            <table>
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Category</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {data&&data.map((car, index) => (
          <tr key={index}>
            <td>{car.Car.Make}</td>
            <td>{car.Car.Model}</td>
            <td>{car.Car.Year}</td>
            <td>{car.Car.Category}</td>
            <td>
              <img src={car.Data.ImgUrl} alt="Car" style={{ width: '100px' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
    )
}

export default MarketPLace