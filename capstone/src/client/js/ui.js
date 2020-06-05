

const updateUI = (newData) => {

  let cityImage = document.getElementById('city-img');
  cityImage.src = newData.image;

  const weather_data = {
    theLow : newData.weatherForecast.daily.data[0].temperatureLow,
    theHigh: newData.weatherForecast.daily.data[0].temperatureHigh,
    theSummary: newData.weatherForecast.currently.summary
  }

  let high = document.getElementById('high');
  high.textContent = weather_data.theHigh;

  let low = document.getElementById('low');
  low.textContent = weather_data.theLow;

  let summary = document.getElementById('summary');
  summary.textContent = weather_data.theSummary;

  let theDepartingDate = document.getElementById('departingDate');
  theDepartingDate.textContent = newData.start;

  let theLocation = document.getElementById('departingLocation');
  theLocation.textContent = newData.city;

  let theMainLocation = document.getElementById('mainLocation');
  theMainLocation.textContent = newData.city;

  let theTimeSpan = document.getElementById('timeSpan');
  theTimeSpan.textContent = newData.countdown + ' days away';

  let tripLengthDuration = document.getElementById('tripLength');
  tripLengthDuration.textContent = newData.duration + " Days";

}

export { updateUI }
