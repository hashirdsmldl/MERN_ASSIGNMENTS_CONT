import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query"




const App = () => {
  const [cityName, setCityName] = useState("");



  const [fetch, setFetch] = useState(false)


  const {
    data: posts,
    isFetching,
    isInitialLoading,
    isError,
    error,
    refetch,
  } = useQuery(
    ["posts"],
    async () => {
      if (cityName) {
        const { data } = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            cityName +
            "&appid=250d4ebd906279665f1ad04f46b48a73&units=metric"
        );
        return data;
      }
      return null;
    },
    { enabled: fetch }
  );
  const handleFetchPosts = () => {

    setFetch(true)

    refetch()

  }


  const handleValue = (e) => {
    const value = e.target.value;
    setCityName(value);



  }





  return (
    <div className="App">
      <input value={cityName} type="text" onChange={handleValue}></input>
      <button onClick={handleFetchPosts}>Click</button>
      <h1 className="mb-6 text-blue-400 text-center">
        {isFetching && "Fetching weather..."}
      </h1>
      {posts ? (
        <div>
          <h1 className="w-1/2 m-auto">{posts.main.temp}</h1>
          <h1 className="w-1/2 m-auto">{posts.name}</h1>
        </div>
      ) : isInitialLoading ? (
        <h1 className="text-blue-400 text-center">Loading...</h1>
      ) : isError ? (
        <h1>{error.message}</h1>
      ) : (
        ""
      )}
    </div>
  );


};

export default App;
