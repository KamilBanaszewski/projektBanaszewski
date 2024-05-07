# TravelPlanner

# Spis treści:
1.Opis projektu
2.Lista funckjonalności
3.Wyjaśnienie działania zapisu formularzy
3.Instrukcja obsługi

# Opis projektu
Projekt MVC "TravelPlanner" to aplikacja internetowa umożliwiająca użytkownikom/podróżnikowi planowanie swoich podróży. Użytkownicy mogą dodawać nowe plany podróży, wybierać miejsca docelowe, hotele oraz atrakcje turystyczne. Aplikacja umożliwia również rezerwację hoteli oraz generowanie potwierdzeń podróży.

# Lista funkcjonalności:
1.Dodawanie nowych planów podróży.
2.Wybór kraju, miasta, hotelu oraz atrakcji turystycznych.
3.Rezerwacja hoteli.
4.Wyświetlanie opisów krajów oraz atrakcji turystycznych.
5.Generowanie potwierdzeń podróży.
6.Wyświetlanie listy dostępnych atrakcji dla wybranego miasta.
7.Walidacja formularzy i obsługa błędów podczas wprowadzania danych.
8.Przekierowanie na stronę główną w przypadku nieistniejących adresów URL.
9.Obsługa formularza kontaktowego.

# Wyjaśnienie działania zapisu formularzy
1.Wypełniony anonimowy formularz kontaktowy zostaje zapisany jako pytanieX.txt do katalogu pytania, gdzie X to numer potwierdzenia
2.Wypełniony formularz podróży zostaje zapisany jako potwierdzenieX.txt do katalogu potwierdzenia,, gdzie X to numer potwierdzenia

# Instrukcje obsługi:
Aby uruchomić stronę, należy zainstalować:
npm install ejs
npm install body-parser
npm install express

Aby uruchomić stronę należy wpisać polecenie:
node server.js
Będzie nasłuchiwać pod adresem http://localhost:3000
