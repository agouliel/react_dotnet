import { useState, useEffect } from 'react';

async function populateData() {
  const response = await fetch('todoitems');
  const data = await response.json();
  return { forecasts: data, loading: false };
}

export default function Alex() {

  const [currentState, setCurrentState] = useState({ forecasts: [], loading: true })

  //componentDidMount() {this.populateWeatherData();}
  useEffect(
    function () {
      populateData().then(
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
            <th>ID</th><th>NAME</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.id}>
              <td>{forecast.id}</td><td>{forecast.descr}</td>
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
        <h1 id="tabelLabel" >FETCH</h1>
        <p>This component demonstrates fetching data from the database.</p>
        {contents}
      </div>
    );
}
