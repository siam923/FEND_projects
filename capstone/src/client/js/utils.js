// Get user location and date input on  submit
const getCity = () => {

  let city = document.getElementById('place').value;

  city = city.toLowerCase();
  city = city[0].toUpperCase() + city.slice(1);

  console.log(city);

  return city;
}

const getTripStart = () => {

  const date = document.getElementById('date').value;

  return date;
}

const getTripEnd = () => {
  const date = document.getElementById('endDate').value;

  return date;
}

const countdown = (start, end) => {

  const tripStart = Date.parse(start);
  const tripEnd = Date.parse(end);

  const countdown = tripEnd - tripStart;

  const daysLeft = Math.ceil(countdown / 86400000);

  console.log(daysLeft);

  return daysLeft;
}

export { getCity, getTripStart, getTripEnd, countdown};
