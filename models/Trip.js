class Trip {
    constructor(country, city, hotel, email, checkInDate, checkOutDate, adults, children, pets, selectedAttractions) {
        this.country = country;
        this.city = city;
        this.hotel = hotel;
        this.email = email;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.adults = adults;
        this.children = children;
        this.pets = pets;
        this.selectedAttractions = selectedAttractions;
    }
}

module.exports = Trip;
