import React, { useEffect, useState } from "react";

const Weather = () => {
  const [userInput, setUserInput] = useState("");
  const [weatherData, seWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchingData = async (city) => {
    try {
      setLoading(true);
      setError(null);
      seWeatherData(null)
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`,
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "city not found");
      }
      if (data) {
        console.log(data);
        seWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      // seWeatherData(null)
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingData("skardu");
  }, []);

  function handleClick() {
    if (!userInput.trim()) {
      return;
    }
    fetchingData(userInput);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-green-500  text-center p-5 rounded flex flex-col gap-3 font-bold">
        <div className="flex justify-around items-center gap-5">
          <input
            type="text"
            placeholder="Enter city name"
            className="bg-white p-1 px-2 rounded-xl"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            className="bg-black text-white px-3 py-1 rounded-2xl "
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        {error ? (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md text-sm">
            ⚠️ {error}
          </div>
        ) : loading ? (
          <div>Loading.....</div>
        ) : (
          <div>
            <h3>
              {weatherData?.name} <span>{weatherData?.sys.country}</span>
            </h3>
            <p>{getCurrentDate()}</p>
            <h1 className="text-2xl font-bold">
              Temp {Math.round(weatherData?.main?.temp - 273.15)}°C
            </h1>
            <p>
              {weatherData && weatherData.weather && weatherData.weather[0]
                ? weatherData.weather[0].description
                : ""}
            </p>

            <div className="flex justify-around items-center">
              <div>
                <p>{weatherData?.wind?.speed}</p>
                <p>wind speed</p>
              </div>
              <div>
                <p>{weatherData?.main?.humidity}</p>
                <p>humidity </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
