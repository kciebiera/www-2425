# Egzamin Testowy z Aplikacji WWW

Poniżej znajdują się zadania egzaminacyjne. Każdy blok jest oceniany osobno. Bazą do zadań jest dostarczona prosta aplikacja Django, która wyświetla stronę `index.html` zawierającą kilka list z linkami.

Oddanie zadania polega na wysłaniu jednego pliku ZIP na moodle. Plik ten oprócz rozwiązania, powinien zawierać również plik `README.md` z instrukcją uruchomienia aplikacji oraz opisem wykonanych zadań.

Dostarczona aplikacja Django jest w katalogu [egzapp](https://github.com/kciebiera/www-2425/tree/master/docs/egzapp).

---

## Blok 1: Scrapowanie Stron WWW (Django)

**Zadanie:**

1. Uruchom dostarczoną aplikację Django.
2. Rozszerz istniejącą aplikację Django, tworząc **nowy widok i odpowiadający mu URL**, który wykona następujące czynności:
    * Zescrapuje stronę `index.html` dostępną w uruchomionej aplikacji (serwowaną przez tę samą aplikację).
    * Policzy i wyświetli całkowitą liczbę linków (`<a>`) na tej stronie w formie komunikatu (np. "Liczba linków na stronie: 10").

## Blok 2: Stylizacja z SCSS

**Zadanie:**

Zmodyfikuj istniejącą stronę `index.html` oraz jej system stylizacji:

1. Utwórz plik `main.scss`. Zdefiniuj w nim:
    * Zmienne SCSS dla **przynajmniej dwóch** podstawowych kolorów (np. `$primary-color`, `$secondary-color`) i **jednej** rodziny czcionek (np. `$font-family-sans-serif`).
    * Zastosuj zagnieżdżanie selektorów dla **co najmniej trzech różnych** elementów HTML na stronie `index.html`.
2. Przygotuj **`npm scripts`** w pliku `package.json` do zarządzania procesem budowania stylów:
    * skrypt powinien kompilować plik `main.scss` do wynikowego pliku `style.css`.

## Blok 3: Modyfikacja Aplikacji Django - Logowanie Użytkowników

**Zadanie:**

Rozszerz dostarczoną aplikację Django, implementując system uwierzytelniania użytkowników, **wykorzystując wbudowany w Django system `django.contrib.auth`**:

1. Zaimplementuj funkcjonalność **logowania** dla zarejestrowanych użytkowników (z wykorzystaniem np. `AuthenticationForm`).
2. Zabezpiecz dostęp do oryginalnej strony z listami linków (`index.html`) tak, aby była ona dostępna **tylko dla zalogowanych użytkowników**. Niezalogowani użytkownicy próbujący uzyskać do niej dostęp powinni być automatycznie przekierowywani na stronę logowania (użyj dekoratora `@login_required` lub `LoginRequiredMixin`).
3. Dodaj funkcjonalność **wylogowania** użytkownika.

## Blok 4: Interaktywność z TypeScriptem  interactivity

**Zadanie:**

Do strony `index.html` dodaj interaktywność za pomocą TypeScript:

1. Napisz skrypt w **TypeScript** (`script.ts`).
2. Skrypt ten, po skompilowaniu do JavaScript i dołączeniu do strony HTML, powinien implementować następującą funkcjonalność: gdy użytkownik najedzie kursorem myszy na dowolny link (`<a>`) na stronie, **w konsoli przeglądarki** powinna wyświetlić się informacja o długości (liczbie znaków) tekstu zawartego w tym linku.
3. Skonfiguruj proces kompilacji pliku `script.ts` do `script.js` (np. za pomocą `tsc` CLI, dodając odpowiedni skrypt do `package.json`). Wygenerowany plik `script.js` powinien być dołączony do strony HTML.

## Blok 5: Wyświetlanie Informacji z Użyciem Server-Sent Events (SSE)

**Zadanie:**

Zmodyfikuj aplikację Django, aby implementowała dynamiczne powiadomienia za pomocą Server-Sent Events (SSE):

1. Stwórz w Django nowy **endpoint URL** (np. `/sse-random-info/`), który będzie odpowiedzialny za wysyłanie zdarzeń SSE.
2. Po stronie klienta, w pliku JavaScript (lub TypeScript skompilowanym do JavaScript) dołączonym do `index.html`:
    * Nawiąż połączenie SSE z endpointem `/sse-random-info/`.
    * Nasłuchuj na zdarzenia wysyłane przez serwer.
3. Serwer (widok Django) powinien co 3-5 sekund wysyłać do klienta **nowe zdarzenie SSE** zawierające losowy komunikat. Komunikaty mogą być wybierane z predefiniowanej listy na serwerze (np. ["Wiadomość A", "Info B", "Alert C"]).
4. Odebrane komunikaty powinny być **wyświetlane w dedykowanym elemencie `<div>`** umieszczonym w prawym górnym rogu strony `index.html`. Każdy nowy komunikat powinien zastępować poprzedni w tym elemencie.

