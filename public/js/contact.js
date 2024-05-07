const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Dziękujemy,Twoja odpowiedź została wysłana!☺️');
    form.submit();
});