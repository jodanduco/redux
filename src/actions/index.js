import axios from 'axios';
const API_KEY = '294abe85c7d46fee00896b8bd9dbe4a6';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const countryCode = 'us';
  const query = `q=${city},${countryCode}`;
  const url = `${ROOT_URL}&${query}`;
  const request = axios.get(url);
  console.log('request', request);
  
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}