// Q5: Ride-Sharing - Inheritance + Error Handling

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(from, to, distance) {
    this.fromLocation = from;
    this.toLocation = to;
    this.distance = distance;
  }

  calculateFare() {
    try {
      if (!this.distance || this.distance <= 0) {
        throw new Error("Invalid distance! Must be positive.");
      }
      const fare = this.distance * 12; // ₹12 per km
      console.log(`Trip: ${this.fromLocation} → ${this.toLocation}`);
      console.log(`Distance: ${this.distance} km | Fare: ₹${fare}`);
      return fare;
    } catch (error) {
      console.error("Trip Failed:", error.message);
    }
  }
}

// Test
const driver = new Driver("Rajesh", 4.8, "Swift DZire");
const trip = new Trip("Delhi", "Gurgaon", 30);
trip.calculateFare();

const badTrip = new Trip("Mumbai", "Pune", -50);
badTrip.calculateFare();