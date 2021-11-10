class Travelers {
  constructor (data) {
    this.allTravelers = data;
  }
  findTraveler(data) {
    let result = this.allTravelers.find((traveler) => {
      return traveler.id === data;
    }) 
    return result
  }
}
  
export default Travelers;