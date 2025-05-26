# Część 1: Powiadomienia w Czasie Rzeczywistym z Wykorzystaniem SSE - Backend

## Kontekst

Dotychczas nasz "Interaktywny Edytor Tras/Ścieżek" ewoluował od prostego edytora na statycznym obrazie do narzędzia pozwalającego definiować dynamiczne plansze do gry "Połącz Kropki" oraz rysować na nich indywidualne ścieżki przez użytkowników. Zaimplementowaliśmy interaktywny frontend w TypeScript oraz backend w Django do zarządzania danymi.

W tym laboratorium wprowadzimy nowy element: powiadomienia w czasie rzeczywistym. Chcemy, aby użytkownicy byli informowani o pewnych zdarzeniach w systemie bez konieczności odświeżania strony. Idealnym narzędziem do tego celu, ze względu na jednokierunkową komunikację serwer-klient, jest technologia Server-Sent Events (SSE).

### Cel zadania

Celem tej części laboratorium jest **zaimplementowanie po stronie serwera (Django) mechanizmu wysyłania zdarzeń (SSE)** informujących aktywnych klientów o dwóch typach zdarzeń:

1. Utworzeniu nowej planszy do gry przez dowolnego użytkownika.
2. Zapisaniu nowej ścieżki na istniejącej planszy przez dowolnego użytkownika.

### Opis funkcjonalności do zaimplementowania (Backend - Django)

1. **Utworzenie dedykowanego widoku SSE:**
    * Stwórz nowy widok w Django (np. pod adresem `/sse/notifications/`), który będzie odpowiedzialny za strumieniowanie zdarzeń do klienta.
    * Widok ten powinien zwracać odpowiedź typu `StreamingHttpResponse` z Content-Type ustawionym na `text/event-stream`.
    * Połączenie powinno być utrzymywane, a serwer powinien okresowo wysyłać komentarze keep-alive, aby zapobiec zamknięciu połączenia przez proxy.
    * **HACK:** Możesz zacząć od prostego widoku, który wysyła komentarze keep-alive co kilka sekund, zanim zaimplementujesz logikę wysyłania zdarzeń, możesz też aktywnie sprawdzać raz na jakiś czas, czy są jakieś zdarzenia do wysłania, to nie jest zadanie z programowania współbieżnego, więc nie musisz się martwić o natychmiastowe wysyłanie zdarzeń.
2. **Implementacja logiki wysyłania zdarzeń:**
    * **Wykorzystanie sygnałów Django (Signals):** To preferowany sposób na reagowanie na zdarzenia w modelach.
        * Zdefiniuj sygnał (lub użyj wbudowanego `post_save`) dla modelu `Board` (planszy z Lab 9). Po pomyślnym utworzeniu nowego obiektu `Board`, serwer powinien wysłać zdarzenie SSE.
        * Zdefiniuj sygnał (lub użyj wbudowanego `post_save`) dla modelu `Path` (ścieżki z Lab 10). Po pomyślnym utworzeniu nowego obiektu `Path`, serwer powinien wysłać zdarzenie SSE.
    * **Format danych zdarzenia:**
        * Dla zdarzenia o **nowej planszy**, wyślij co najmniej:
            * Typ zdarzenia (np. `event: newBoard`)
            * Dane w formacie JSON (np. `data: {"board_id": 123, "board_name": "Plansza testowa", "creator_username": "autorX"}`)
        * Dla zdarzenia o **nowej ścieżce**, wyślij co najmniej:
            * Typ zdarzenia (np. `event: newPath`)
            * Dane w formacie JSON (np. `data: {"path_id": 456, "board_id": 789, "board_name": "Plansza zagadka", "user_username": "graczY"}`)
    * **Obsługa wielu klientów:** Mechanizm SSE musi być w stanie wysyłać powiadomienia do wszystkich aktualnie podłączonych klientów nasłuchujących na strumieniu `/sse/notifications/`. Rozważ, jak będziesz zarządzać listą aktywnych połączeń lub kolejką zdarzeń do wysłania. (Uwaga: dla celów laboratoryjnych można zacząć od prostszych rozwiązań, ale warto mieć świadomość wyzwań związanych ze skalowalnością).

**Testowanie implementacji backendu:**
Zanim przejdziesz do części frontendowej, kluczowe jest przetestowanie, czy Twój endpoint SSE działa poprawnie. Możesz to zrobić za pomocą narzędzia `curl` w terminalu:

* Upewnij się, że Twój serwer deweloperski Django jest uruchomiony.
* Otwórz okno terminala i wykonaj polecenie, aby nasłuchiwać na strumieniu zdarzeń (zakładając, że endpoint to `/sse/notifications/` a serwer działa na `localhost:8000`):

    ```bash
    curl -N http://localhost:8000/sse/notifications/
    ```

    Flaga `-N` (lub `--no-buffer`) jest ważna, aby `curl` wyświetlał dane natychmiast po ich otrzymaniu, bez buforowania.

* Aby zobaczyć również nagłówki HTTP odpowiedzi (w tym kluczowy `Content-Type: text/event-stream`), użyj:

    ```bash
    curl -i -N http://localhost:8000/sse/notifications/
    ```

* Mając uruchomiony `curl` nasłuchujący w jednym terminalu, w innym oknie przeglądarki (lub przez panel administracyjny Django) wykonaj akcję, która powinna wygenerować zdarzenie (np. utwórz nową planszę).
* Obserwuj wyjście w terminalu z `curl`. Powinieneś zobaczyć dane wysyłane przez serwer w formacie SSE, np.:

    ```text
    event: newBoard
    data: {"board_id": 1, "board_name": "Nowa Plansza z Admina", "creator_username": "admin"}

    ```

    Jeśli zaimplementowałeś komentarze keep-alive, one również powinny się pojawiać.

**Wskazówki technologiczne:**

* `django.http.StreamingHttpResponse`
* Sygnały Django (`django.db.models.signals.post_save`, `django.dispatch.Signal`)
* Format wiadomości SSE (linie `event:`, `data:`, `id:`, `retry:`)
* Obsługa potencjalnych problemów z buforowaniem (np. przez serwery proxy) poprzez wysyłanie komentarzy keep-alive (np. linia zaczynająca się od `:` co kilkanaście sekund).
