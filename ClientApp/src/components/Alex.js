import { useState, useEffect } from 'react';
import { useApi } from '../contexts/ApiProvider';

export default function Alex() {
  const [currentState, setCurrentState] = useState({ forecasts: [], loading: true })
  const api = useApi();

  useEffect(() => {
    (async () => {
      const response = await api.get('todoitems');
      if (response.ok) {
        setCurrentState({ forecasts: response.body, loading: false });
      }
      else {
        setCurrentState({ forecasts: null, loading: false });
      }
    })();
  }, [api]);

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

    let contents = currentState.loading ? <p><em>Loading...</em></p> : renderForecastsTable(currentState.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >FETCH</h1>
        <p>This component demonstrates fetching data from the database.</p>
        {contents}
      </div>
    );
}
