// Q8: Movie Ticket → OnlineTicket Inheritance + Prototype

class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

// Add method to prototype
MovieTicket.prototype.printTicket = function() {
  console.log("=== TICKET ===");
  console.log(`Movie: ${this.movieName}`);
  console.log(`Seat: ${this.seatNo}`);
  console.log(`Price: ₹${this.price}`);
  if (this.convenienceFee) {
    console.log(`Total: ₹${this.getTotalAmount()}`);
  }
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

// Test prototype chain
const ticket1 = new OnlineTicket("Avengers", "A12", 350, 50);
ticket1.printTicket(); // Inherited method works!