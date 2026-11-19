# WeatherApp

## 1. Opis projektu

WeatherApp to edukacyjna aplikacja internetowa służąca do sprawdzania informacji o pogodzie w wybranej lokalizacji.

Projekt realizowany jest przez pięcioosobowy zespół studentów w ramach przedmiotu „Zarządzanie projektem wdrożeniowym”.

Celem projektu jest stworzenie aplikacji pogodowej umożliwiającej szybkie sprawdzanie aktualnych warunków atmosferycznych oraz podstawowych parametrów pogody.

## 2. Zaimplementowane funkcjonalności

- Automatyczne wyświetlanie danych pogodowych dla miasta Tokyo po uruchomieniu aplikacji.
- Wyszukiwanie pogody według nazwy miasta.
- Wyświetlanie temperatury i odczuwalnej temperatury.
- Prezentowanie wilgotności powietrza.
- Wyświetlanie prędkości i kierunku wiatru.
- Wyświetlanie ciśnienia atmosferycznego.
- Wyświetlanie nazwy miasta i regionu.
- Dynamiczne generowanie listy dostępnych miast.
- Obsługa błędów w przypadku wyszukania miasta, którego nie ma w bazie danych testowych.

**Uwaga:** Aplikacja korzysta obecnie z lokalnych danych testowych (Mock Data), a nie z rzeczywistego zewnętrznego API pogodowego.

## 3. Wykorzystywane technologie

- **HTML5** – struktura aplikacji.
- **CSS3** – stylizacja i wygląd interfejsu.
- **JavaScript** – logika aplikacji oraz obsługa danych pogodowych.

### Narzędzia zarządzania projektem

- **Git** – kontrola wersji.
- **GitHub** – przechowywanie kodu źródłowego i współpraca zespołowa.
- **Trello** – planowanie zadań i monitorowanie postępów.

## 4. Uruchomienie projektu

Do lokalnego uruchomienia aplikacji można wykorzystać Python.

1. Pobierz repozytorium na komputer.
2. Otwórz folder projektu w terminalu.
3. Uruchom polecenie:

```bash
python -m http.server 8000
```

4. Otwórz przeglądarkę internetową i przejdź pod adres:

```text
http://localhost:8000
```

## 5. Struktura zespołu

Projekt realizowany jest przez pięcioosobowy zespół studentów.

Poszczególni członkowie zespołu odpowiadają za przydzielone zadania i moduły aplikacji.

**Moja odpowiedzialność w projekcie:**

- Uczestnik 4 – implementacja modułu `uiUpdater.js`.
- Aktualizacja interfejsu na podstawie danych pogodowych.
- Obsługa wyszukiwania miast.
- Aktualizacja podstawowych parametrów pogodowych.
- Współpraca z modułem `ApiManager`.

## 6. Organizacja pracy

W projekcie wykorzystywane są następujące zasady współpracy:

- Każdy członek zespołu realizuje przydzielone zadania.
- Zmiany w kodzie są zapisywane za pomocą Git.
- Prace nad funkcjonalnościami są prowadzone na osobnych gałęziach.
- Gotowe zmiany są przekazywane do głównego repozytorium za pomocą Pull Request.
- Zadania i postępy są monitorowane w Trello.

## 7. Status projektu

Projekt znajduje się na etapie implementacji i testowania wersji MVP.

Podstawowe funkcjonalności związane z wyświetlaniem danych pogodowych i wyszukiwaniem miast zostały zaimplementowane i sprawdzone lokalnie.

Dalszy rozwój obejmuje rozbudowę aplikacji, implementację modułu prognozy pogody oraz integrację kolejnych funkcjonalności.

## 8. Repozytorium

Główne repozytorium projektu:

https://github.com/Will-be-fine1/WeatherApp

Moje repozytorium (Fork):

https://github.com/BogdanMosok/WeatherApp
