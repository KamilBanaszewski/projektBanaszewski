const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const Trip = require('./models/Trip');
const Attraction = require('./models/Attraction');

const app = express();
const port = 3000;
let currentFileNumber = 1;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {
    const formData = req.body;
    const message = formData.message;

    const now = new Date();
    const fileName = `pytania/pytanie_${currentFileNumber}.txt`;

    fs.writeFile(fileName, message, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Wystąpił błąd podczas zapisywania danych.');
        } else {
            console.log(`Dane zostały zapisane do pliku ${fileName}`);
            res.render('contact', {
                alertScript: '<script>alert("Dziękujemy za wysłanie wiadomości!"); window.location.href = "/";</script>'
            });
            currentFileNumber++;
        }
    });
});

app.post('/potwierdzenie', (req, res) => {
    const formData = req.body;
    const { country, city, hotel, email, checkInDate, checkOutDate, adults, children, pets, selectedAttractions } = formData;

    const trip = new Trip(country, city, hotel, email, checkInDate, checkOutDate, adults, children, pets, selectedAttractions);

    const tripData = `
    Kraj: ${trip.country}
    Miasto: ${trip.city}
    Hotel: ${trip.hotel}
    Email podróżnika: ${trip.email}
    Data zameldowania: ${trip.checkInDate}
    Data wymeldowania: ${trip.checkOutDate}
    Liczba dorosłych: ${trip.adults}
    Liczba dzieci: ${trip.children}
    Liczba zwierząt: ${trip.pets}
    Wybrane atrakcje: ${trip.selectedAttractions}
    `;

    const tripFileName = `potwierdzenia/potwierdzenie_${currentFileNumber}.txt`;

    fs.writeFile(tripFileName, tripData, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Wystąpił błąd podczas zapisywania danych o podróży.');
        } else {
            console.log(`Dane podróży zostały zapisane do pliku ${tripFileName}`);
            currentFileNumber++;
            res.send('<script>window.location.href = "/";</script>');
        }
    });
});

app.get('/contact', (req, res) => {
    const alertScript = req.query.alertScript || '';
    res.render('contact', { alertScript });
});

app.get('/create_trip', (req, res) => {
    res.render('create_trip/create_trip');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('*', (req, res) => {
    res.redirect('/');
});

const createPytaniaDirectory = () => {
    const pytaniaDirPath = path.join(__dirname, 'pytania');
    if (!fs.existsSync(pytaniaDirPath)) {
        fs.mkdirSync(pytaniaDirPath);
    }
};

createPytaniaDirectory();

app.listen(port, () => {
    console.log(`Aplikacja jest dostępna pod adresem http://localhost:${port}`);
});

module.exports = app;
