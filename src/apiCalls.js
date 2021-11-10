// const fetchData = (data) => {
//   return fetch(`http://localhost:3001/api/v1/${data}`)
//     .then(response => response.json())
// }

const getAllTravelers = () => {
  return fetch('http://localhost:3001/api/v1/travelers')
    .then(response => response.json())
}

const getSingleTraveler = (id) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => response.json())
}

const getAllTrips = () => {
  return fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json())
}

const getAllDestinations = () => {
	return fetch('http://localhost:3001/api/v1/destinations')
	  .then(response => response.json())
}

const getAllDestinations = () => {
	return fetch('http://localhost:3001/api/v1/destinations')
	  .then(response => response.json())
}


