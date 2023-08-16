import { useReducer, useCallback, useEffect } from 'react';
import Forecasts from './Forecasts';

const initialHttpState = {
    data: null,
    isLoading: false,
    error: null,
  };
  function httpReducer(state, action) {
    if (action.type === 'FETCH_START') {
      return {
        ...state, // copying the existing state
        isLoading: state.data ? false : true,
        error: null,
  }; }
    if (action.type === 'FETCH_ERROR') {
      return {
        data: null,
        isLoading: false,
        error: action.payload,
    }; }
    if (action.type === 'FETCH_SUCCESS') {
      return {
        data: action.payload,
        isLoading: false,
        error: null,
  }; }
    return initialHttpState; // default value for unknown actions
  }
  
  export default function Reducer() {
    const [httpState, dispatch] = useReducer(httpReducer, initialHttpState);
    // Using useCallback() to prevent an infinite loop in useEffect() below
    const fetchPosts = useCallback(async function fetchPosts() {
      dispatch({ type: 'FETCH_START' });
      try {
        const response = await fetch(
          //'https://jsonplaceholder.typicode.com/posts'
          'https://localhost:44464/weatherforecast'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch posts. Check the API URL.');
        }
        const posts = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: posts });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
  }, []);
    useEffect(
      function () {   
        fetchPosts();
      },
      [fetchPosts]
    );

  return (
    <>
        <header>
          <h1>Complex State Blog</h1>
          <button onClick={fetchPosts}>Load Posts</button>
        </header>
        {httpState.isLoading && <p>Loading...</p>}
        {httpState.error && <p>{httpState.error}</p>}
        {httpState.data && <Forecasts forecasts={httpState.data} />}
    </> );
  };