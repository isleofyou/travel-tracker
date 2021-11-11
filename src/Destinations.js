class Destinations {
  constructor(obj) {
    this.id = obj.id;
    this.destination = obj.destination;
    this.estimatedLodgingCostPerDay = obj.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = obj.estimatedFlightCostPerPerson;
    this.image = obj.img;
  }
}

export default Destinations;