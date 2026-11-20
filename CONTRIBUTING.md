# Zasady współpracy (Contributing) – WeatherApp

Niniejszy dokument określa zasady pracy zespołowej w repozytorium projektu **WeatherApp**, w tym tworzenie gałęzi, zapisywanie commitów oraz zgłaszanie Pull Requestów.

## 1. Schemat pracy (Fork & Pull Request)
Każdy członek zespołu (poza Kierownikiem Projektu) pracuje na własnej kopii repozytorium:
1. Wykonaj **Fork** głównego repozytorium na swoje konto GitHub.
2. Sklonuj swój fork lokalnie:
   ```bash
   git clone <link-do-twojego-forka>
   ```
3. Utwórz nową gałąź roboczą przeznaczoną wyłącznie dla przydzielonego zadania.
4. Wprowadź zmiany w kodzie i wykonaj czytelne commity.
5. Wypchnij gałąź do swojego forka (`git push -u origin <nazwa-gałęzi>`).
6. Utwórz **Pull Request (PR)** ze swojego forka do gałęzi `main` głównego repozytorium.

## 2. Nazewnictwo gałęzi (Branches)
Nie pracujemy bezpośrednio na gałęzi `main`. Każdą nową funkcjonalność lub poprawkę realizujemy na osobnej gałęzi według schematu:
* `feature/<nazwa-modułu>` – nowe funkcjonalności i moduły (np. `feature/styles`, `feature/api-manager`, `feature/ui-updater`, `feature/forecast-widget`).
* `fix/<opis-błędu>` – poprawki błędów (np. `fix/layout-mobile`).
* `docs/<opis>` – zmiany w dokumentacji (np. `docs/readme`).

## 3. Zasady tworzenia commitów
* Commity powinny być krótkie, konkretne i opisywać jedną logiczną zmianę.
* Piszemy w trybie rozkazującym (po angielsku lub polsku, spójnie w ramach gałęzi), np.:
  * `Add styles.css with dashboard layout`
  * `Implement mock weather data in apiManager.js`
  * `Fix temperature display in uiUpdater.js`
* Unikaj ogólnikowych opisów typu `update`, `fix`, `zmiany`, `test123`.

## 4. Wymagania dotyczące Pull Requestów (PR)
Każdy zgłaszany Pull Request musi zawierać:
1. **Tytuł** – jasno określający wprowadzone zmiany (np. `Dodanie stylów CSS dla dashboardu`).
2. **Krótki opis prac** – co dokładnie zostało zrobione i jakie pliki dodano/zmodyfikowano.
3. **Powiązanie z Trello** – bezpośredni link do karty zadania na tablicy Trello.
4. **Problemy i ograniczenia** – informacja o ewentualnych błędach, brakach lub rzeczach wymagających uwagi przy łączeniu modułów.

### Przegląd i scalanie (Code Review & Merge)
* Pull Requesty są weryfikowane i scalane z gałęzią `main` przez **Kierownika Projektu**.
* Każdy członek zespołu pracuje w przypisanym sobie pliku (`index.html`, `styles.css`, `apiManager.js`, `uiUpdater.js`, `forecastWidget.js`), aby zminimalizować ryzyko konfliktów podczas scalania.
* Po scaleniu (Merge) autor PR przenosi swoją kartę zadania w Trello do kolumny **Zrobione**.

## 5. Zarządzanie zadaniami w Trello
* Każde zadanie musi mieć przypisaną osobę, opis, termin wykonania oraz checklistę.
* Przed rozpoczęciem kodowania przenieś kartę z kolumny **Do zrobienia** do **W trakcie**.
