/* Global Variables */
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "6e12c16e77380c141fa2c74d03fd56f6";

/* API request example:
  api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid=key
  Here I have used country code us
*/
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


//DOM input selectors
const zipSelector = document.getElementById("zip");
const feelingSelector = document.getElementById("feelings");
const generateBtn = document.getElementById("generate");

//DOM output selectors
const dateSelector = document.getElementById("date");
const tempSelector = document.getElementById("temp");
const contentSelector = document.getElementById("content");


// handling post on cliking the button -----------------------------------------
generateBtn.addEventListener("click", performAction);

/* without chaining with then
async function performAction_alt(e){
  // select the actual value of an HTML input to include in POST
  const zip = zipSelector.value;
  const feeling = feelingSelector.value;

  // //api call
  // generateBtn.textContent = "Loading......";
  const res = await getApiOutput(zip);
  // generateBtn.textContent = "Generate";
  await console.log(res);
  try {
    const {
      main: { temp: temperature }
    } = await res.json();
} catch(err) {
  console.error(err);
}
};
*/

// Alternative way
async function performAction() {
  const zip = zipSelector.value;
  const feeling = feelingSelector.value;

  // fetch output from api
  getApiOutput(zip)
    .then( (response) => {
      return response.json();
    }).then( (data) => {
      //console.log(data);
      postData('/add', {temperature: `${data.main.temp}°C `,
                        date: newDate,
                        user_response: feeling});

      // Update UI
      updateUI();
    })
};


// Requesting openweathermap API -----------------------------------------------
const getApiOutput = async (zip_code) => {
  const res = await fetch(baseUrl+'?zip='+zip_code+',us&units=metric&appid='+apiKey);
  //console.log(res.body.json().main);
  return res;
}

// Posting user data to /all url -----------------------------------------------
const postData = async ( url='/add', data={} ) => {
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

// Manual demo post:
//postData('/add', {temperature: 'sdfa', date:'sdfa',user_response:'fads'})

// Update UI -------------------------------------------------------------------
const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const weatherData = await request.json();
    console.log(weatherData);

    //update
    dateSelector.innerHTML = weatherData.date;
    tempSelector.innerHTML = weatherData.temperature;
    contentSelector.innerHTML = weatherData['User Response'];
  } catch(error) {
    console.log("error", error);
  }
};
