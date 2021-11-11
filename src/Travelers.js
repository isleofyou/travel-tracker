import Traveler from "./Traveler";

class Travelers {
  constructor (data) {
    this.allTravelers = data;
    this.createdTravelers = [];
  }

  createAllTravelers() {
    this.allTravelers.forEach((user) => {
      let uniqueTraveler = new Traveler(user);
      this.createdTravelers.push(uniqueTraveler);
    })
  }

  findTraveler(data) {
    let result = this.createdTravelers.find((traveler) => {
      return traveler.id === data;
    }) 
    return result;
  }

  getRandomUser() {
    return Math.floor(Math.random() * this.createdTravelers.length);
  }
}
  
export default Travelers;