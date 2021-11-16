import Destinations from "./Destinations";

class Trips {
  constructor(tripsData, destinationData) {
    this.trips = tripsData;
    this.destinations = destinationData;
    this.createdDestinations = [];
  }
  createDestinations() {
    this.destinations.forEach((destination) => {
      let uniqueDestination = new Destinations(destination);
      this.createdDestinations.push(uniqueDestination);
    })
  }
  findAllTrips(data) {
    let result = this.trips.filter((trip) => {
      return trip.userID === data;
    })
    return result;
  }
  calculateTotalCost(id) {
    let total = 0;
    let trips = this.findAllTrips(id).filter((data) => {
      return (data.date <= "2021/12/31" && data.date >= "2021/01/01" && data.status === 'approved');
    });
    trips.forEach((trip) => {
      let specificTrip = this.createdDestinations.find((destination) => {
        return destination.id === trip.destinationID;
      })
      total += specificTrip.estimatedFlightCostPerPerson;
      total += trip.duration * specificTrip.estimatedLodgingCostPerDay;  
    })
    return Math.round(100 * (total * 1.1)) / 100;
  }
  findDestination(data) {
    let result = this.createdDestinations.find((destination) => {
      return destination.id === data;
    })
    return result.destination;
  }
}

export default Trips;