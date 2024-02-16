class FlightBookingSystem {

    constructor(agencyName) {
        this.agencyName = agencyName,
            this.flights = [],
            this.bookings = [],
            this.bookingCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        let obj = {
            "flightNumber": flightNumber,
            "destination": destination,
            "departureTime": departureTime,
            "price": price
        }
        const index = this.flights.findIndex((obj) => obj["flightNumber"] == flightNumber)

        if (index == -1) {
            this.flights.push(obj)
            return `Flight ${flightNumber} to ${destination} has been added to the system.`
        }
        return `Flight ${flightNumber} to ${destination} is already available.`
    }

    bookFlight(passengerName, flightNumber) {

        let passenger = {
            "passengerName": passengerName,
            "flightNumber": flightNumber
        }
        const index = this.flights.findIndex((obj) => obj["flightNumber"] == flightNumber);

        if (index == -1) {
            return `Flight ${flightNumber} is not available for booking.`
        }
        this.bookings.push(passenger);
        this.bookingCount++;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
    }

    cancelBooking(passengerName, flightNumber) {

        const index = this.bookings.findIndex((obj) => obj["flightNumber"] == flightNumber && obj["passengerName"] == passengerName);

        if (index == -1) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        }
        let removed = this.bookings.splice(index, 1);
        this.bookingCount--
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
    }

    showBookings(criteria) {
        let entries = Object.entries(this.bookings);

        if (this.bookings.length == 0) {
            throw new Error(`No bookings have been made yet.`);
        }
        if (criteria == 'all') {
            let result = [];
            result.push(`All bookings(${this.bookingCount}):`);

            for (let booking of entries) {
                let current = `${booking[1].passengerName} booked for flight ${booking[1].flightNumber}.`
                result.push(current)
            }
            return result.join("\n");
        }
        if (criteria == 'cheap') {
            let cheapTickets = this.flights.filter(a => a.price <= 100);

            if (cheapTickets.length == 0) {
                return "No cheap bookings found."
            }

            let result = [];
            result.push("Cheap bookings:")
            let flights = [];
            for (let ticket in cheapTickets) {
                flights.push(cheapTickets[ticket]["flightNumber"])
            }
            for (let property in this.bookings) {
                if (flights.includes(this.bookings[property]['flightNumber'])) {
                    result.push(`${this.bookings[property].passengerName} booked for flight ${this.bookings[property].flightNumber}.`);
                }
            }
            return result.join("\n")
        }
        if (criteria == 'expensive') {

            let expensiveTickets = this.flights.filter(a => a.price > 100);

            if (expensiveTickets.length == 0) {
                return "No expensive bookings found."
            }
            let result = [];
            result.push("Expensive bookings:");
            let flights = [];
            for (let ticket in expensiveTickets) {
                flights.push(expensiveTickets[ticket]["flightNumber"])
            }
            for (let property in this.bookings) {
                if (flights.includes(this.bookings[property]['flightNumber'])) {
                    result.push(`${this.bookings[property].passengerName} booked for flight ${this.bookings[property].flightNumber}.`);
                }
            }
            return result.join("\n")
        }
    }
}


// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));


// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));


// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));


// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("all"));


const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 50)); //250
console.log(system.addFlight("BB202", "New York", "10:30 AM", 80));    //180
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));