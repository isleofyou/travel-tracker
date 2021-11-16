/* eslint-disable max-len */
import Travelers from '../src/Travelers';
import Trips from '../src/Trips.js';
import './css/base.scss';
import { getAllTravelers, getAllTrips, getAllDestinations }
  from './apiCalls';
const dayjs = require('dayjs');

let allTravelers;
let allTrips;
let currentUser;
let today = Date.now();

const pageTrips = document.querySelector(".all-trips");
const totalSpent = document.querySelector(".total-spent");
const destinationsList = document.querySelector("#places");
const planTripButton = document.querySelector(".new-trip-button");
const newTripForm = document.querySelector(".new-trip-form");
const newTripDate = document.querySelector("#new-trip-date");
const newTripDestination = document.querySelector("#destinations");
const newTripDuration = document.querySelector("#trip-duration");
const newTripPeopleCount = document.querySelector("#number-of-people");
const pendingTrips = document.querySelector(".pending-trips");
const submitTrip = document.querySelector(".submit-new-trip");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginButton = document.querySelector(".submit-login");
const loginPage = document.querySelector(".login-page");
const userDashboard = document.querySelector('.dashboard');
const loginError = document.querySelector('.login-error');
const homeMessage = document.querySelector('.home-message');
const priceCheck = document.querySelector('.total-cost');
const totalCostButton = document.querySelector('.check-price');
const submitErrorMessage = document.querySelector(".submit-error");
const submittedTripsForm = document.querySelector(".pending-trips");
const submittedTripsMessage = document.querySelector(".submitted-trips")

const updateToday = () => {
  newTripDate.value = Date.now();
  newTripDate.min = Date.now();
}


const userLogin = () => {
  let nameArray = username.value.split('r');
  if (password.value !== 'travel' || nameArray[2] > 50 || nameArray[2] < 1 ) {
    loginError.innerText = `Incorrect username / password`;
  } else {
    loginPage.classList.add('hidden');
    userDashboard.classList.remove('hidden');
    loginToDashboard();
  }
}

const planNewTrip = () => {
  pendingTrips.innerHTML += `
  <div class="traveler-trip">
      <p>Date: ${dayjs(newTripDate.value).format("dddd, MMMM D, YYYY")}</p> 
      <p>Destination: ${newTripDestination.value}</p> 
      <p>Trip length: ${newTripDuration.value} days.</p>
      <p>Total people: ${newTripPeopleCount.value}</p>
      <p>Price: $${calculateNewTripCost().toLocaleString()}
                + $${(calculateNewTripCost() * .1).toLocaleString()} (agent's fee) = Total: $${(Math.round(100 * (calculateNewTripCost() * 1.1)) / 100).toLocaleString()}</p>
      <p>Status: Pending</p>
  </div>  
  `;
}

const locateDestinationID = (newDestination) => {
  let result = allTrips.destinations.find((destination) => {
    return destination.destination === newDestination;
  })
  return result.id
}

const submitNewTrip = () => {
  if (newTripDestination.value && newTripPeopleCount.value && newTripDuration.value && newTripDate.value) {
    let newTrip = {
      id: Math.floor(Math.random() * 10000) + 205,
      userID: currentUser.id, 
      destinationID: locateDestinationID(newTripDestination.value), 
      travelers: newTripPeopleCount.value,
      date: dayjs(newTripDate.value).format('YYYY/MM/DD'),
      duration: newTripDuration.value,
      status: 'pending',
      suggestedActivities: [],
    }
    postTrip(newTrip);
    submitErrorMessage.innerText = ``;
  } else {
    submitErrorMessage.innerText = `Please fill out all fields`;
  }
}

const postTrip = (data) => {
  fetch ('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
    .catch(error => window.alert(error));
}


const calculateNewTripCost = () => {
  let newDestination = newTripDestination.value;
  let destinationCost = allTrips.destinations.find((element) => {
    return element.destination === newDestination;
  });
  let result = 0;
  result += (destinationCost.estimatedLodgingCostPerDay * newTripDuration.value * newTripPeopleCount.value) + (destinationCost.estimatedFlightCostPerPerson * newTripPeopleCount.value );
  return result;
}

const pageLoad = () => {
  getData();
}

const getData = () => {
  Promise.all([getAllTravelers, getAllTrips, getAllDestinations]).then(values => {
    return Promise.all(values.map(result => result.json()));
  }).then(values => {
    createTravelers(values[0].travelers)
    createTrips(values[1].trips, values[2].destinations);
    
  }).catch(error => window.alert(error));
}

const createTravelers = (data) => {
  allTravelers = new Travelers(data)
  allTravelers.createAllTravelers();
}

const createTrips = (data, secondData) => {
  allTrips = new Trips(data, secondData)
  allTrips.createDestinations();
  console.log(allTrips.trips)
}

const loginToDashboard = () => {
  getUserInfo();
  updateTrips();
  updateTotalSpent();
  updateHomeMessage();
  updateToday();
}

const getUserInfo = () => {
  currentUser = allTravelers.findTraveler(`${username.value}`);
}

const updateHomeMessage = () => {
  homeMessage.innerText = `Hi ${currentUser.name}!`;
}

const updateTrips = () => {
  let userTrips = allTrips.findAllTrips(currentUser.id)
  userTrips.forEach((trip) => {
    pageTrips.innerHTML += `
        <div class="traveler-trip">
            <p>Date: ${dayjs(trip.date).format("dddd, MMMM D, YYYY")}</p> 
            <p>Destination: ${allTrips.findDestination(trip.destinationID)}</p> 
            <p>Trip length: ${trip.duration} days.</p>
            <p>Status: ${trip.status} </p>
        </div>  
        `
  })
}

const updateTotalSpent = () => {
  totalSpent.innerText += `
  You have spent $${allTrips.calculateTotalCost(currentUser.id).toLocaleString()} this year.
  `;
}

const addDestinations = () => {
  let list = allTrips.createdDestinations.map((each) => {
    return `<option value="${each.destination}">`
  });
  list.forEach((destination) => {
    destinationsList.innerHTML += destination;
  })
}

const showNewTripForm = () => {
  addDestinations();
  newTripForm.classList.remove('hidden');
}

const submitNewTripForm = () => {
  submitNewTrip();
  planNewTrip();
  newTripDate.value = today;
  newTripDuration.value = ``;
  newTripDestination.value = ``;
  newTripPeopleCount.value = ``;
  pendingTrips.value = ``;
  showNewTripForm();
  showSubmittedTrips();
}

const calculateTotal = () => {
  if (newTripDate.value < today) {
    priceCheck.innerText = "Please select a valid date.";
  } else if (newTripDestination.value && newTripPeopleCount.value && newTripDuration.value && newTripDate.value) {
    priceCheck.innerText = `Trip cost: $${calculateNewTripCost().toLocaleString()}
  + $${(calculateNewTripCost() * .1).toLocaleString()} (agent's fee) 
  = Total: $${(Math.round(100 * (calculateNewTripCost() * 1.1)) / 100).toLocaleString()}`;
    submitErrorMessage.innerText = ``;
  } else {
    priceCheck.innerText = "Please select all options."
  }
}

const showSubmittedTrips = () => {
  submittedTripsForm.classList.remove("hidden");
  submittedTripsMessage.classList.remove("hidden");
}

window.addEventListener('load', pageLoad);
planTripButton.addEventListener('click', showNewTripForm);
submitTrip.addEventListener('click', submitNewTripForm);
loginButton.addEventListener('click', userLogin);
totalCostButton.addEventListener('click', calculateTotal);
password.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    userLogin();
  }
});

