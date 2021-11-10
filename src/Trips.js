class Trips {
  constructor(tripsData, destinationData) {
    this.trips = tripsData;
    this.destinations = destinationData;
  }
  findAllTrips(data) {
    let result = this.trips.filter((trip) => {
      return trip.userID === data;
    })
    return result;
  }
  calculateTotalCost(id) {
    let total = 0;
    let trips = this.findAllTrips(id);
    trips.forEach((trip) => {
      let specificTrip = this.destinations.find((destination) => {
        return destination.id === trip.destinationID;
      })
      total += specificTrip.estimatedFlightCostPerPerson;
      total += trip.duration * specificTrip.estimatedLodgingCostPerDay;  
    })
    return Math.round(100 * (total * 1.1)) / 100;
  }
}

export default Trips;