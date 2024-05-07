exports.submitTrip = (req, res, currentFileNumber) => {
    const formData = req.body;
    const { country, city, hotel, email, checkInDate, checkOutDate, adults, children, pets, selectedAttractions } = formData;

    const tripData = `
    Kraj: ${country}
    Miasto: ${city}
    Hotel: ${hotel}
    Email podróżnika: ${email}
    Data zameldowania: ${checkInDate}
    Data wymeldowania: ${checkOutDate}
    Liczba dorosłych: ${adults}
    Liczba dzieci: ${children}
    Liczba zwierząt: ${pets}
    Wybrane atrakcje: ${selectedAttractions}
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
};
