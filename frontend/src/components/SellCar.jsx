import React, { useState, useEffect } from 'react';

function SellCar() {
  const [years, setYears] = useState([]);
  const [selectedYear, selectYear] = useState(1992);
  const [OEM, setOem] = useState("");
  const [Model, setModel] = useState("");
  const [response, setResponse]=useState([])
  const [carId, setCarId]=useState("")

  useEffect(() => {
    const fetchYears = async () => {
      try {
        let years = await fetch("https://buyc-corp-g63s.onrender.com/years");
        years = await years.json();
        setYears(years);
      } catch (error) {
        console.error("Error fetching years:", error);
      }
    };

    fetchYears();
  }, []);

  const handleSelect = (event) => {
    selectYear(event.target.value);
  };
  const handleOEM = (event) => {
    setOem(event.target.value);
  };
  const handleModel = (event) => {
    setModel(event.target.value);
  };
  const handleCarId= (event)=> {
    setCarId(event.target.id);
  };

  const handleSearch = async (e) => {
    e.preventDefault()
    let carData = await fetch("https://buyc-corp-g63s.onrender.com/search", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([OEM,Model,selectedYear]),
    })
    carData=await carData.json()
    setResponse(carData)
  };

  return (
    <div>
      <h1>List Your Car</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="Year">Select Year</label>
        <select name="Year" id="Year" onChange={handleSelect}>
          {years.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <input type="text" placeholder='Search  OEM' onChange={handleOEM} />
        <input type="text" placeholder='Search  Car Model' onChange={handleModel} />
        <input type="submit" value="Search" required/>
      </form>
    {!!response.length&&<table>
    <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Category</th>
            <th>Select Deatails</th>
          </tr>
        </thead>
        <tbody>
          {response.map((car, index) => (
            <tr key={index}>
              <td>{car.Make}</td>
              <td>{car.Model}</td>
              <td>{car.Year}</td>
              <td>{car.Category}</td>
              <td><input type="radio" name="select" id={car._id} required onClick={handleCarId} ></input></td>
            </tr>
          ))}
        </tbody>
    </table>}
    <hr />
    
    <input type="submit" value="List My Car"/>
    </div>

  );
}

export default SellCar;
