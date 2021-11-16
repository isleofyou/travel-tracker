import { expect } from 'chai';
import Trips from '../src/Trips';
import destinations from '../src/destinationsRepo.js';

describe('Trips', () => {
  let tripsRepo;
  let allTrips;

  beforeEach(() => {
    tripsRepo = [
      {
        "id": 3,
        "userID": 3,
        "destinationID": 22,
        "travelers": 4,
        "date": "2022/05/22",
        "duration": 17,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 41,
        "userID": 3,
        "destinationID": 25,
        "travelers": 3,
        "date": "2020/08/30",
        "duration": 11,
        "status": "approved",
        "suggestedActivities": []
      },
            
      {
        "id": 50,
        "userID": 3,
        "destinationID": 16,
        "travelers": 5,
        "date": "2020/07/02",
        "duration": 17,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 65,
        "userID": 3,
        "destinationID": 35,
        "travelers": 4,
        "date": "2020/03/21",
        "duration": 18,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 102,
        "userID": 3,
        "destinationID": 3,
        "travelers": 3,
        "date": "2020/09/26",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 4,
        "userID": 43,
        "destinationID": 14,
        "travelers": 2,
        "date": "2022/02/25",
        "duration": 10,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 5,
        "userID": 42,
        "destinationID": 29,
        "travelers": 3,
        "date": "2022/04/30",
        "duration": 18,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 6,
        "userID": 29,
        "destinationID": 35,
        "travelers": 3,
        "date": "2022/06/29",
        "duration": 9,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 7,
        "userID": 37,
        "destinationID": 17,
        "travelers": 5,
        "date": "2022/5/28",
        "duration": 20,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 8,
        "userID": 36,
        "destinationID": 39,
        "travelers": 6,
        "date": "2022/02/07",
        "duration": 4,
        "status": "approved",
        "suggestedActivities": []
      }
    ];

    allTrips = new Trips(tripsRepo, destinations);
    allTrips.createDestinations();
  });

  it('should be a function', () => {
    expect(Trips).to.be.a('function');
  });

  it('should instantiate a new travelers list', () => {
    expect(allTrips).to.be.an.instanceOf(Trips);
  });

  it('should locate all trips for a user', () => {
    expect(allTrips.findAllTrips(3)).to.deep.equal(
      [
        {
          "id": 3,
          "userID": 3,
          "destinationID": 22,
          "travelers": 4,
          "date": "2022/05/22",
          "duration": 17,
          "status": "approved",
          "suggestedActivities": []
        },
        {
          "id": 41,
          "userID": 3,
          "destinationID": 25,
          "travelers": 3,
          "date": "2020/08/30",
          "duration": 11,
          "status": "approved",
          "suggestedActivities": []
        },
                
        {
          "id": 50,
          "userID": 3,
          "destinationID": 16,
          "travelers": 5,
          "date": "2020/07/02",
          "duration": 17,
          "status": "approved",
          "suggestedActivities": []
        },
        {
          "id": 65,
          "userID": 3,
          "destinationID": 35,
          "travelers": 4,
          "date": "2020/03/21",
          "duration": 18,
          "status": "approved",
          "suggestedActivities": []
        },
        {
          "id": 102,
          "userID": 3,
          "destinationID": 3,
          "travelers": 3,
          "date": "2020/09/26",
          "duration": 8,
          "status": "approved",
          "suggestedActivities": []
        }
      ]
    );
  });

  it('should calculate the total costs of all trips for a user', () => {
    expect(allTrips.calculateTotalCost(3)).to.equal(0)
  });
  
  it('should return the name of a destination', () => {
    expect(allTrips.findDestination(3)).to.equal('Sydney, Austrailia')
  });
});
