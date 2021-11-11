const getAllTravelers = fetch('http://localhost:3001/api/v1/travelers')
// const getSingleTraveler = fetch(`http://localhost:3001/api/v1/travelers/${id}`)
const getAllTrips = fetch('http://localhost:3001/api/v1/trips')
const getAllDestinations = fetch('http://localhost:3001/api/v1/destinations')

module.exports = { getAllTravelers, getAllTrips, getAllDestinations }

