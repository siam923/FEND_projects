import { getCity, getTripStart, getTripEnd, countdown } from './utils'
import { getGeoLocation, getWeatherForecast, getImageURL, getCountryInfo } from './request';
import { updateUI } from './ui'
const trip = {};


const handleSearch = async (e) => {
  e.preventDefault();
  let submitBtn = document.querySelector('#btn-trip-info')
  submitBtn.value = 'Loading...'

  trip.city = getCity();
  trip.start = getTripStart();
  trip.end = getTripEnd();
  trip.duration = countdown(new Date(trip.start), new Date(trip.end))
  const today = new Date()
  trip.countdown = countdown(today, new Date(trip.start))

  const geoLocation = await getGeoLocation(trip.city);

  trip.latitude = geoLocation.latitude;
  trip.longitude = geoLocation.longitude;
  trip.countryCode = geoLocation.countryCode;

  trip.weatherForecast = await getWeatherForecast(geoLocation.latitude, geoLocation.longitude);
  console.log(trip.weatherForecast)
  const countryInfo = await getCountryInfo(trip.countryCode);

  trip.country = countryInfo.name;
  trip.countryFlag = countryInfo.flag;

  trip.image = await getImageURL(trip.city, trip.country);

  console.log(trip);
  updateUI(trip);
  submitBtn.value = 'Get Trip Info'

  // postData('http://localhost:8080/save', trip);

  return trip;
}

const postData = async ( url='', data={} ) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  try {
    const newData = await response.json();
    //console.log(newData);
    return newData;
  } catch(error) {
    console.log(error);
  };

};


export { handleSearch }
