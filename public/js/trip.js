const citiesAndAttractions = {
    Hiszpania: {
        Madryt: "Muzeum Prado, Pałac Królewski, Park Retiro, Plac Puerta del Sol, Stadion Santiago Bernabeu",
        Barcelona: "Bazylika Sagrada Familia, Park Güell, Plac Katalonii, Muzeum Picassa, Fontanna Magiczna Montjuïc",
        Walencja: "Miasto Sztuki i Nauki, Plaża Malvarrosa, Katedra w Walencji, Stadion Mestalla, Park Gulliver",
        Sewilla: "Alkazar w Sewilli, Katedra w Sewilli, Plaza de España, Złota Wieża, Park Maria Luisa",
        Bilbao: "Muzeum Guggenheima, Katedra w Bilbao, Most La Salve, Plaża Ereaga, Góra Artxanda"
    },
    Francja: {
        Paryż: "Wieża Eiffla, Luwr, Notre-Dame, Łuk Triumfalny, Montmartre",
        Marsylia: "Bazylika Notre-Dame de la Garde, Muzeum Mucem, Port w Marsylii, Stare Miasto, Park Narodowy Calanques",
        Lyon: "Bazylika Notre-Dame de Fourvière, Plac Bellecour, Muzeum Miniatur i Filmów Animowanych, Wzgórze La Croix-Rousse, Park Tête d'Or",
        Nicea: "Promenade des Anglais, Stare Miasto, Plac Masséna, Cytadela na Górze Boron, Muzeum Matisse",
        Tuluza: "Katedra w Tuluzy, Plac Kapitolu, Wzgórze Perygord, Bazylika Saint-Sernin, Ogród Japoński"
    },
    Włochy: {
        Rzym: "Koloseum, Fontanna di Trevi, Watykan, Schody Hiszpańskie",
        Mediolan: "Opera La Scala, Katedra w Mediolanie, Galeria Sztuki Współczesnej, Stadion San Siro",
        Wenecja: "Kanały Weneckie, Plac św. Marka, Bazylika św. Marka, Most Westchnień",
        Florencja: "David Michała Anioła, Katedra Santa Maria del Fiore, Galeria Uffizi, Most Ponte Vecchio",
        Neapol: "Pompeje, Wulkan Wezuwiusz, Zamek Castel dell'Ovo, Muzeum Archeologiczne"
    },
    Niemcy: {
        Berlin: "Mur Berliński, Brama Brandenburska, Reichstag, Wyspa Muzeów, Alexanderplatz",
        Monachium: "Oktoberfest, Marienplatz, Bazylika Najświętszego Serca Pana Jezusa, Park Olimpijski",
        Hamburg: "Reeperbahn, Port Hamburg, Ratusz Hamburger Rathaus, Park Planten un Blomen",
        Kolonia: "Katedra w Kolonii, Stare Miasto, Muzeum Ludwiga, Most Hohenzollernów",
        Frankfurt: "Stare Miasto, Dom Goethego, Most Eiserner Steg, Park Palmengarten"
    },
    Anglia: {
        Londyn: "Big Ben, London Eye, Wieża Tower, Muzeum Brytyjskie, Pałac Buckingham",
        Manchester: "Old Trafford, Muzeum Piłki Nożnej, John Rylands Library",
        Liverpool: "Cavern Club, Albert Dock, Muzeum The Beatles Story, Katedra w Liverpoolu",
        Birmingham: "Kanał Birminghamski, Birmingham Museum and Art Gallery, Bullring Shopping Centre, Katedra św. Filipa",
        Newcastle: "Most Tyne Bridge, Newcastle Castle, The Sage Gateshead, Baltic Centre for Contemporary Art"
    }
};

const countryDescriptions = {
    Hiszpania: "Hiszpania to kraina barw, smaków i bogatej historii, która zapiera dech w piersiach swoim pięknem i różnorodnością. Od pasjonującego flamenco w Sewilli po wspaniałe dzieła Gaudiego w Barcelonie, Hiszpania kusi podróżników swoim urozmaiconym krajobrazem i kulturowym dziedzictwem.",
    Francja: "Francja to kraj, w którym elegancja spotyka się z romantyzmem, a tradycja miesza się z nowoczesnością. Od majestatycznych widoków Paryża po spokojne plaże nad Morzem Śródziemnym, Francja zaprasza do odkrywania swojego bogatego dziedzictwa kulturowego i przyrodniczego.",
    Włochy: "Włochy to kraina smaków, sztuki i niezwykłych krajobrazów, która kusi podróżników swoim pięknem i kulinarnymi doznaniami. Od wiecznego miasta Rzymu po romantyczną Wenecję, Włochy zachwycają swoją różnorodnością i unikalnym urokiem.",
    Niemcy: "Niemcy to kraj, który łączy w sobie nowoczesność z tradycją, oferując podróżnikom niezliczone możliwości odkrywania fascynującej historii i kultury. Od pulsującego życiem Berlina po urokliwe miasteczka nad Renem, Niemcy zapraszają do podróży przez ich różnorodne krajobrazy i zabytki.",
    Anglia: "Anglia to kraina, gdzie historia spotyka się z nowoczesnością, a tradycja miesza się z innowacją. Od ikonicznych zabytków Londynu po malownicze krajobrazy angielskiej prowincji, Anglia zachwyca swoim bogactwem kulturowym i różnorodnością krajobrazów."
};

let selectedAttractions = [];

document.addEventListener("DOMContentLoaded", function() {
    populateCities();
    displayAvailableAttractions();
    displayCountryDescription();
});

function populateCities() {
    const countrySelect = document.getElementById("country");
    const citySelect = document.getElementById("city");
    const country = countrySelect.value;
    citySelect.innerHTML = "";

    for (const city in citiesAndAttractions[country]) {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    }

    displayAttractionDescription();
}

function displayAttractionDescription() {
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const attractions = citiesAndAttractions[country][city].split(', ');

}

function displayCountryDescription() {
    const country = document.getElementById("country").value;
    const countryDescription = countryDescriptions[country];
    document.getElementById("countryDescription").textContent = countryDescription;
}

function displayAvailableAttractions() {
    const availableAttractionsContainer = document.getElementById("availableAttractionsContainer");
    availableAttractionsContainer.innerHTML = "";

    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;

    const attractions = citiesAndAttractions[country][city].split(', ');

    attractions.forEach(attraction => {
        const attractionElement = document.createElement("div");
        attractionElement.textContent = attraction;
        attractionElement.classList.add("attractionItem");
        availableAttractionsContainer.appendChild(attractionElement);
    });
}

function populateHotels() {
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const hotelSelect = document.getElementById("hotel");
    hotelSelect.innerHTML = "";

    const hotels = {
        [city + "Hotel1"]: "Hotel 1 " + city,
        [city + "Hotel2"]: "Hotel 2 " + city,
        [city + "Hotel3"]: "Hotel 3 " + city
    };

    for (const key in hotels) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = hotels[key];
        hotelSelect.appendChild(option);
    }
}

document.getElementById("country").addEventListener("change", function() {
    if(selectedAttractions.length > 0) {
        selectedAttractions = [];
        displaySelectedAttractions();
    }
    populateCities();
    populateHotels();
    displayAvailableAttractions();
    displayCountryDescription();
});

document.getElementById("city").addEventListener("change", function() {
    if(selectedAttractions.length > 0) {
        selectedAttractions = [];
        displaySelectedAttractions();
    }
    displayAttractionDescription();
    populateHotels();
    displayAvailableAttractions();
});

document.getElementById("reserveHotelButton").addEventListener("click", function() {
    const checkInDate = document.getElementById("checkInDate").value;
    const checkOutDate = document.getElementById("checkOutDate").value;
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;
    const pets = document.getElementById("pets").value;
    const email = document.getElementById("email").value;

    const selectedAttractionsInput = document.getElementById("selectedAttractionsInput");
    selectedAttractionsInput.value = selectedAttractions.join(", ");

    console.log("Data zameldowania:", checkInDate);
    console.log("Data wymeldowania:", checkOutDate);
    console.log("Liczba dorosłych:", adults);
    console.log("Liczba dzieci:", children);
    console.log("Liczba zwierząt:", pets);
    console.log("Email podróżnika:", email);
    console.log("Wybrane atrakcje:", selectedAttractions);


});

document.getElementById("availableAttractionsContainer").addEventListener("click", function(event) {
    if (event.target.classList.contains("attractionItem")) {
        const attractionName = event.target.textContent;
        if (!selectedAttractions.includes(attractionName)) {
            selectedAttractions.push(attractionName);
            displaySelectedAttractions();
        }
    }
});

document.getElementById("selectedAttractions").addEventListener("click", function(event) {
    const clickedElement = event.target;
    const isDiv = clickedElement.tagName === "DIV";
    const hasContent = clickedElement.textContent.trim().length > 0;

    if (isDiv && hasContent) {
        const index = selectedAttractions.indexOf(clickedElement.textContent);
        if (index !== -1) {
            selectedAttractions.splice(index, 1);
            displaySelectedAttractions();
        }
    }
});

function displaySelectedAttractions() {
    const selectedAttractionsContainer = document.getElementById("selectedAttractions");
    selectedAttractionsContainer.innerHTML = "";

    selectedAttractions.forEach(attraction => {
        const attractionElement = document.createElement("div");
        attractionElement.textContent = attraction;
        attractionElement.classList.add("attractionItem");
        selectedAttractionsContainer.appendChild(attractionElement);
    });
}

function validateForm() {
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const hotel = document.getElementById("hotel").value;
    const email = document.getElementById("email").value;
    const checkInDate = document.getElementById("checkInDate").value;
    const checkOutDate = document.getElementById("checkOutDate").value;
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;
    const pets = document.getElementById("pets").value;

    if (country === "" || city === "" || hotel === "" || email === "" || checkInDate === "" || checkOutDate === "") {
        document.getElementById("validationNote").style.display = "block";
        return false;
    } else {
        alert(`Dziękujemy za dodanie planu podróży!`);
        window.location.href = "/";
        return true;
    }
}