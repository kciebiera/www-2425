# Opis

## Kontekst

To laboratorium jest kontynuacją projektu "Interaktywny Edytor Tras na Obrazie". W poprzednich etapach stworzyliśmy aplikację Django z interfejsem webowym i API do zarządzania trasami (sekwencjami punktów) na statycznym obrazie tła. Wykorzystaliśmy również TypeScript do dodania interaktywności po stronie klienta (np. dodawanie punktów przez kliknięcie).

W tym zadaniu odchodzimy od statycznych obrazów rastrowych na rzecz dynamicznie generowanego "tła" w postaci planszy do gry logicznej typu "Połącz Kropki" (Connect The Dots / Flow Free). Użytkownik będzie mógł zdefiniować rozmiar planszy oraz rozmieścić na niej pary kolorowych kropek. Ta zdefiniowana plansza stanie się nowym rodzajem "tła", na którym w *kolejnych* etapach będzie można rysować ścieżki łączące kropki.

![Przykład planszy do gry](lab9_board.png)

## Cel zadania

Celem tego laboratorium jest zaimplementowanie interfejsu użytkownika (frontend w TypeScript, backend w Django) umożliwiającego użytkownikowi:

1.  Zdefiniowanie wymiarów prostokątnej siatki (planszy).
2.  Interaktywne rozmieszczenie na tej siatce par kolorowych kropek (punktów startowych/końcowych dla przyszłych ścieżek).
3.  Zapisanie konfiguracji tak stworzonej planszy w bazie danych Django.

## Opis Funkcjonalności do Zaimplementowania

1.  **Definicja Planszy:**
    * Użytkownik powinien mieć możliwość podania wymiarów planszy (liczba wierszy i kolumn).
    * Na podstawie podanych wymiarów, interfejs powinien dynamicznie wygenerować i wyświetlić pustą siatkę (np. za pomocą HTML table, divów z CSS Grid/Flexbox).

2.  **Rozmieszczanie Par Kropek:**
    * Użytkownik potrzebuje mechanizmu do wybierania koloru dla kolejnej pary kropek (np. z predefiniowanej palety lub prostego selektora kolorów).
    * Po wybraniu koloru, użytkownik powinien móc kliknąć na dwie *różne*, *puste* komórki siatki, aby umieścić w nich kropki tego koloru.
    * System powinien pilnować, aby:
        * Każdy kolor był użyty dokładnie dla dwóch kropek.
        * Nie można było umieścić kropki na już zajętej komórce (przez inną kropkę).
    * Należy zapewnić wizualne odzwierciedlenie umieszczonych kropek na siatce (odpowiedni kolor tła komórki, kółko w środku itp.).

3.  **Zarządzanie Planszą:**
    * Użytkownik powinien móc edytować utworzoną przez siebie wcześniej planszę (zmieniać jej wymiary, dodawać nowe kropki, usuwać istniejące).
    * Użytkownik powinien móc nadać nazwę/tytuł tworzonej planszy.
    * Powinien istnieć przycisk "Zapisz", który prześle konfigurację planszy (wymiary, nazwa, lista umieszczonych kropek z ich pozycjami i kolorami) do backendu Django w celu zapisania w bazie danych.
    * Użytkownik powinien móc skasować planszę (np. przycisk "Usuń"), co spowoduje usunięcie planszy z bazy danych.
    * Użytkownik powinien móc przeglądać listę swoich plansz (np. w formie tabeli) i wybierać jedną z nich do edycji.

## Zadania do Realizacji

1.  **Modyfikacja Modeli Django:**
    * Rozważ zastąpienie lub uzupełnienie modelu `BackgroundImage`. Można stworzyć nowy model, np. `GameBoard` lub `DotGridDefinition`.
    * Model ten powinien przechowywać:
        * Referencję do użytkownika (`ForeignKey` do `User`).
        * Nazwę/tytuł planszy (`CharField`).
        * Wymiary: `rows` (liczba wierszy - `IntegerField`), `cols` (liczba kolumn - `IntegerField`).
        * Informacje o rozmieszczeniu kropek. Dobrym rozwiązaniem może być użycie `JSONField` do przechowania listy obiektów, gdzie każdy obiekt reprezentuje kropkę, np. `[{'row': r1, 'col': c1, 'color': '#FF0000'}, {'row': r2, 'col': c2, 'color': '#FF0000'}, ...]`. Alternatywnie, można stworzyć osobny model `Dot` z `ForeignKey` do `GameBoard` i polami `row`, `col`, `color`.
    * Zaktualizuj panel admina Django, aby można było zarządzać nowymi modelami (opcjonalnie, bardziej do podglądu).

2.  **Widoki i Szablony Django:**
    * Stwórz widok i szablon HTML dla strony tworzenia/edycji nowej planszy `GameBoard`.
    * Szablon powinien zawierać:
        * Formularz do wprowadzenia nazwy planszy i jej wymiarów (wiersze, kolumny).
        * Pusty kontener (`div`), w którym TypeScript wygeneruje siatkę.
        * Elementy interfejsu do wyboru koloru (paleta, przyciski itp.).
        * Przycisk "Zapisz".

3.  **Implementacja Interfejsu w TypeScript:**
    * **Generowanie Siatki:** Napisz kod TS, który po zmianie wartości w polach wymiarów (lub po kliknięciu przycisku "Generuj") dynamicznie stworzy strukturę HTML reprezentującą siatkę w przeznaczonym do tego kontenerze. Użyj odpowiednich atrybutów `data-*` (np. `data-row`, `data-col`), aby łatwo identyfikować komórki.
    * **Wybór Koloru:** Zaimplementuj logikę wyboru aktywnego koloru do umieszczenia.
    * **Obsługa Kliknięć na Komórki:** Dodaj event listener (`click`) do komórek siatki.
    * **Logika Umieszczania Kropek:**
        * Śledź stan planszy w TS (które komórki są zajęte, jakie kropki zostały umieszczone, ile kropek danego koloru już jest).
        * Po kliknięciu na pustą komórkę, jeśli jest wybrany kolor i nie ma jeszcze dwóch kropek tego koloru:
            * Umieść pierwszą kropkę (zapisz jej pozycję i kolor w stanie TS, wizualizuj na siatce).
            * Po kliknięciu na drugą *różną* i *pustą* komórkę, umieść drugą kropkę tego samego koloru.
        * Zablokuj możliwość umieszczania więcej niż dwóch kropek danego koloru.
        * Zablokuj możliwość umieszczania kropki na zajętej komórce.
        * Zaktualizuj wizualizację siatki (pokaż umieszczone kropki).
    * **Zbieranie Danych do Zapisu:** Przygotuj funkcję, która na żądanie (np. przed zapisem) zbierze aktualną konfigurację planszy (wymiary, nazwa, lista kropek z ich `row`, `col` i `color`) ze stanu utrzymywanego w TypeScript.

4.  **Komunikacja Frontend-Backend (Zapis Planszy):**
    * **Endpoint w Django:** Stwórz widok w Django (może to być ten sam widok co do wyświetlania formularza, obsługujący POST, lub dedykowany widok API), który będzie przyjmował dane o konfiguracji planszy (np. w formacie JSON) wysłane z przeglądarki.
    * **Wysyłanie Danych (TypeScript):** Dodaj event listener do przycisku "Zapisz". W jego obsłudze:
        * Pobierz nazwę planszy z formularza.
        * Pobierz konfigurację kropek ze stanu TS.
        * Użyj API, aby wysłać żądanie POST do endpointu Django, przesyłając zebrane dane (np. jako JSON w ciele żądania). Pamiętaj o dodaniu tokenu CSRF, jeśli jest wymagany.
    * **Logika Zapisu w Widoku Django:** Widok Django powinien:
        * Odebrać dane.
        * Zwalidować je (czy wymiary się zgadzają, czy dane kropek są poprawne, czy użytkownik jest zalogowany itp.).
        * Zapisać nową instancję `GameBoard` w bazie danych lub zaktualizować istniejącą.
        * Zwrócić odpowiedź do frontendu (np. potwierdzenie sukcesu lub informacje o błędach).

## Narzędzia i Wskazówki

* **Modele Django:** `JSONField` jest bardzo elastyczny do przechowywania strukturalnych danych, takich jak konfiguracja kropek.
* **CSS:** CSS Grid Layout lub Flexbox są idealne do tworzenia dynamicznych siatek.
* **TypeScript:** Wykorzystaj silne typowanie do modelowania stanu planszy (np. interfejsy dla `Dot`, `BoardState`). Zarządzaj stanem umieszczonych kropek (np. w tablicy lub obiekcie).
* **DOM:** Nadal będziesz intensywnie manipulować DOM, aby tworzyć siatkę i wizualizować kropki.
* **Fetch API:** Standardowy sposób na wysyłanie asynchronicznych żądań HTTP z JavaScript/TypeScript do backendu. Pamiętaj o obsłudze odpowiedzi i błędów.
* **CSRF Token:** Jeśli używasz standardowych formularzy Django lub potrzebujesz ochrony CSRF dla żądań `Workspace` typu POST/PUT/DELETE, upewnij się, że token CSRF jest dołączany do żądania (zazwyczaj jako nagłówek `X-CSRFToken`).
* **Walidacja:** Implementuj walidację zarówno po stronie klienta (TypeScript - np. nie pozwalaj na kliknięcie zajętej komórki), jak i po stronie serwera (Django - upewnij się, że otrzymane dane są spójne i poprawne przed zapisem do bazy).

## Uwagi

* To zadanie skupia się na *definiowaniu* planszy "Connect The Dots". Logika samego rysowania ścieżek łączących kropki i walidacji tych ścieżek (brak przecięć, przejście przez środki pól) jest materiałem na *kolejne* laboratoria.
* Pomyśl o interfejsie użytkownika: jak najwygodniej umożliwić wybór koloru i umieszczanie *par* kropek?
* Możesz zacząć od prostego zestawu predefiniowanych kolorów.
