import { useEffect, useState } from 'react';
import React from "react";

import { Country,City } from 'country-state-city';
const getAllCountries = Country.getAllCountries();

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTemp, setSelectedTemp] = useState("");
 

  const handleSelect = (event) => {
    setSelectedCountry(event.target.value);
  };

  const cityHandler=(event) => {
    setSelectedCity(event.target.value);
    
   }
   
   useEffect(() => {
    const api_key = '250d4ebd906279665f1ad04f46b48a73';
    const [lat, lon] = selectedCity.split(':');
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const tempKelvin = data.main.temp;
        console.log(typeof tempKelvin)
        const tempCelsius = tempKelvin - 273.15;
        setSelectedTemp(tempCelsius);
      })
      .catch(error => {
        console.error(error);
      });
  }, [selectedCity]);
  
  
  
  
    
   
 
  
  return (
    <div className="App Container">
      <h1 class="text-center">Weather map Api</h1>
      <div class="row h-100">
      <select class="col-md-4 mx-auto  form-control" onChange={handleSelect} name="countries">
        {getAllCountries.map((country, index) => (
          
          <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
        ))}
      </select>
      </div> 
      <div class="row h-100 mt-3">
      {selectedCountry && City.getCitiesOfCountry(selectedCountry).length > 0 && (
  <select class="col-md-4 mx-auto form-control" onChange={cityHandler} name="cities">
    {City.getCitiesOfCountry(selectedCountry).map((city, index) => (
      <option key={`${city.latitude}:${city.longitude}`} value={`${city.latitude}:${city.longitude}`}>{city.name}</option>
    ))}
  </select>
)}
</div>

<h2 className="text-center">
  {selectedCity && selectedTemp && `Temperature  is ${selectedTemp}`}
</h2>

   
    </div>
  );
}

export default App;
