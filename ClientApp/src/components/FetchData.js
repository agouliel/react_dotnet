import { useState, useEffect } from 'react';

async function populateWeatherData() {
  const response = await fetch('weatherforecast');
  const data = await response.json();
  return { forecasts: data, loading: false };
}

export default function FetchData() {

  const [currentState, setCurrentState] = useState({ forecasts: [], loading: true })

  //componentDidMount() {this.populateWeatherData();}
  useEffect(
    function () {
      populateWeatherData().then(
        (weatherData) => setCurrentState(weatherData)
      )
    },
    []
  )

  function renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th><th>Temp. (C)</th>
            <th>Temp. (F)</th><th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td><td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td><td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

    let contents = currentState.loading
      ? <p><em>Loading...</em></p>
      : renderForecastsTable(currentState.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
}
