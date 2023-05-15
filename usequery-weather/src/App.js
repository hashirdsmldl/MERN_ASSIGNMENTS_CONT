import React, { useState } from "react";
import { useQuery } from "react-query";




const App = () => {
  const [cityName, setCityName] = useState("");

  
  const fetchWeatherData = async (cityName) => {
  //  const cityName = "London";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=250d4ebd906279665f1ad04f46b48a73&units=metric`;
  
    const res = await fetch(url);
    return res.json();
  };
  const { data,  status } = useQuery(["user", { cityName }], (cityName) =>
  fetchWeatherData(cityName)
);
  
  const handleValue=(e)=>
  {
  const value=e.target.value;

   
     
     setCityName(value) 

    

  }

  
 

  return (
    <div className="App">
<input type="text" onChange={handleValue}></input>
{cityName && (<>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div>
          <p>Temperature: {data.main.temp}</p>
          <p>City: {data.name}</p>
        </div>
      )}
      </>)}
    </div>
  );
};

export default App;
