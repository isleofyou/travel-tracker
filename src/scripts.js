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
  console.log(userTrips);
  userTrips.forEach((trip) => {
    pageTrips.innerHTML += `
        <div class="traveler-trip">
            <p>Date: ${dayjs(trip.date).format("dddd, MMMM D YYYY")}</p> 
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
  In total, you've spent ${allTrips.calculateTotalCost(currentUser.id)} dollars this year.
  `;
}

window.addEventListener('load', pageLoad);

