import { expect } from 'chai';
import Travelers from '../src/Travelers';

describe('Travelers', () => {
  let travelersRepo;
  let allTravelers;

  beforeEach(() => {
    travelersRepo = [
      {
        "id": 1,
        "name": "Ham Leadbeater",
        "travelerType": "relaxer"
      },
      {
        "id": 2,
        "name": "Rachael Vaughten",
        "travelerType": "thrill-seeker"
      },
      {
        "id": 3,
        "name": "Sibby Dawidowitsch",
        "travelerType": "shopper"
      },
      {
        "id": 4,
        "name": "Leila Thebeaud",
        "travelerType": "photographer"
      },
      {
        "id": 5,
        "name": "Tiffy Grout",
        "travelerType": "thrill-seeker"
      },
      {
        "id": 6,
        "name": "Laverna Flawith",
        "travelerType": "shopper"
      },
      {
        "id": 7,
        "name": "Emmet Sandham",
        "travelerType": "relaxer"
      },
      {
        "id": 8,
        "name": "Carlin O'Reilly",
        "travelerType": "history buff"
      },
      {
        "id": 9,
        "name": "Natalee Deegin",
        "travelerType": "relaxer"
      },
      {
        "id": 10,
        "name": "Rickie Jodlowski",
        "travelerType": "relaxer"
      },
      {
        "id": 11,
        "name": "Joy Dovington",
        "travelerType": "history buff"
      }
    ];

    allTravelers = new Travelers(travelersRepo);
  });

  it('should be a function', () => {
    expect(Travelers).to.be.a('function');
  });

  it('should instantiate a new travelers list', () => {
    expect(allTravelers).to.be.an.instanceOf(Travelers);
  })

  it('should be able to locate a user by the ID number', () => {
    expect(allTravelers.findTraveler(3)).to.deep.equal({
      "id": 3,
      "name": "Sibby Dawidowitsch",
      "travelerType": "shopper"
    }
    );


  })
})