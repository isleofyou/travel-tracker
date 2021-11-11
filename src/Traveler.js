class Traveler {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
    this.login = 'traveler' + data.id;
  }
}

export default Traveler;