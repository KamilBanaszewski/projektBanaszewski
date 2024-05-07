const fs = require('fs');
const path = require('path');

exports.submitMessage = (req, res, currentFileNumber) => {
    const formData = req.body;
    const message = formData.message;

    const fileName = path.join(__dirname, '..', 'pytania', `pytanie_${currentFileNumber}.txt`);

    fs.writeFile(fileName, message, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Wystąpił błąd podczas zapisywania danych.');
        } else {
            console.log(`Dane zostały zapisane do pliku ${fileName}`);
            res.sendFile(path.join(__dirname, '..', 'views', 'contact'), {
                alertScript: '<script>alert("Dziękujemy za wysłanie wiadomości!"); window.location.href = "/";</script>'
            });
            currentFileNumber++;
        }
    });
};
