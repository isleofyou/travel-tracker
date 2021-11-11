/* eslint-disable max-len */
// import Traveler from '../src/Traveler.js';
import Travelers from '../src/Travelers';
import Trips from '../src/Trips.js';
import './css/base.scss';
import { getAllTravelers, getAllTrips, getAllDestinations }
  from './apiCalls';
const dayjs = require('dayjs');

let allTravelers;
let allTrips;
let currentUser;

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

const planNewTrip = () => {
  pendingTrips.innerHTML += `
  <div class="traveler-trip">
      <p>Date: ${dayjs(newTripDate.value).format("dddd, MMMM D, YYYY")}</p> 
      <p>Destination: ${newTripDestination.value}</p> 
      <p>Trip length: ${newTripDuration.value} days.</p>
      <p>Total people: ${newTripPeopleCount.value}</p>
      <p>Price: ${calculateNewTripCost()}
                + ${calculateNewTripCost() * .1} (agent's fee) = Total: $${Math.round(100 * (calculateNewTripCost() * 1.1)) / 100}</p>
      <p>Status: Pending</p>

  </div>  
  `;
}
const calculateNewTripCost = () => {
  let newDestination = newTripDestination.value;
  let destinationCost = allTrips.destinations.find((element) => {
    return element.destination === newDestination;
  });
  let result = 0;
  result += (destinationCost.estimatedLodgingCostPerDay * newTripDuration.value * newTripPeopleCount.value) + (destinationCost.estimatedFlightCostPerPerson * newTripPeopleCount.value);
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
  })
  
  
}

const createTravelers = (data) => {
  allTravelers = new Travelers(data)
  allTravelers.createAllTravelers();
  getRandomUser();
}

const createTrips = (data, secondData) => {
  allTrips = new Trips(data, secondData)
  allTrips.createDestinations();
  updateTotalSpent();
  updateTrips();
}

const updateTrips = () => {
  let userTrips = allTrips.findAllTrips(currentUser.id).sort((a,b) => b.date - a.date)
  userTrips.forEach((trip) => {
    pageTrips.innerHTML += `
        <div class="traveler-trip">
            <p>Date: ${dayjs(trip.date).format("dddd, MMMM D, YYYY")}</p> 
            <p>Destination: ${allTrips.findDestination(trip.destinationID)}</p> 
            <p>Trip length: ${trip.duration} days.</p>
        </div>  
        `
  })
}

const getRandomUser = () => {
  currentUser = allTravelers.findTraveler(allTravelers.getRandomUser());
}

const updateTotalSpent = () => {
  totalSpent.innerText += `
  You have spent $${allTrips.calculateTotalCost(currentUser.id)} this year.
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
  newTripForm.classList.toggle('hidden');
}

const submitNewTripForm = () => {
  planNewTrip();
  newTripDate.value = `2021-11-11`;
  newTripDuration.value = ``;
  newTripDestination.value = ``;
  newTripPeopleCount.value = ``;
  pendingTrips.value = ``;
  showNewTripForm();
}



window.addEventListener('load', pageLoad);
planTripButton.addEventListener('click', showNewTripForm);
submitTrip.addEventListener('click', submitNewTripForm);
