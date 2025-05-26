# Część 2: Powiadomienia w Czasie Rzeczywistym z Wykorzystaniem SSE - Frontend

Deadline: to zadanie jest na zaliczenie (TAK/NIE), trzeba je oddać na laboratorium osobie, która prowadzi zajęcia.

## Kontekst

W pierwszej części tego laboratorium przygotowaliśmy backend aplikacji Django do wysyłania powiadomień o nowych planszach i zapisanych ścieżkach za pomocą Server-Sent Events (SSE). Teraz czas na zintegrowanie tej funkcjonalności po stronie klienta.

## Cel zadania (Część 2)

Celem tej części laboratorium jest **zaimplementowanie po stronie klienta (TypeScript) mechanizmu odbierania i wyświetlania powiadomień SSE** wysyłanych przez serwer. Użytkownik powinien otrzymywać dyskretne powiadomienia w czasie rzeczywistym o utworzeniu nowych plansz lub zapisaniu nowych ścieżek przez innych (lub siebie samego).

### Opis funkcjonalności do zaimplementowania (Frontend - TypeScript)

    **Nawiązanie połączenia SSE:**
    * W kodzie TypeScript, użyj wbudowanego interfejsu `EventSource` do nawiązania połączenia z endpointem SSE przygotowanym w Części 1 (np. `/sse/notifications/`).
    * Połączenie powinno być inicjowane po załadowaniu odpowiedniej strony/komponentu aplikacji (np. głównego widoku plansz lub globalnie, jeśli powiadomienia mają być dostępne w całej aplikacji).

1. **Obsługa przychodzących zdarzeń:**
    * Zarejestruj listenery dla specyficznych typów zdarzeń zdefiniowanych w Części 1 (np. `newBoard` i `newPath`).
    * Dla każdego odebranego zdarzenia:
        * Sparsuj dane JSON zawarte w polu `data` wiadomości SSE.
        * Wyświetl powiadomienie użytkownikowi.

    **Wyświetlanie powiadomień:**
    * Zaprojektuj i zaimplementuj sposób prezentacji powiadomień. Mogą to być:
        * **Toast notifications:** Małe, tymczasowe komunikaty pojawiające się np. w rogu ekranu.
        * **Dedykowana sekcja/lista powiadomień:** Miejsce w interfejsie, gdzie gromadzone są ostatnie powiadomienia.
    * Powiadomienie powinno być czytelne i zawierać kluczowe informacje, np.:
        * Dla `newBoard`: "Użytkownik [creator_username] utworzył nową planszę: [board_name]."
        * Dla `newPath`: "Użytkownik [user_username] zapisał ścieżkę na planszy: [board_name]."
    * Rozważ dodanie możliwości interakcji z powiadomieniem, np. kliknięcie na powiadomienie o nowej planszy mogłoby przekierować użytkownika do tej planszy (to może być element opcjonalny/dodatkowy).
2. **Obsługa błędów i stanu połączenia (Opcjonalnie, ale zalecane):**
    * Dodaj obsługę błędów połączenia `EventSource` (zdarzenie `onerror`).
    * Możesz informować użytkownika o stanie połączenia SSE (np. próba ponownego połączenia).

**Wskazówki technologiczne:**

* Obiekt `EventSource` w JavaScript/TypeScript.
* Metody `addEventListener('eventName', callback)` oraz `onmessage`, `onerror`, `onopen` obiektu `EventSource`.
* Dobre praktyki UX dotyczące wyświetlania powiadomień (nie powinny być zbyt inwazyjne).
* Możesz wykorzystać istniejące biblioteki JS/TS do "toastów" lub zaimplementować prosty mechanizm samodzielnie.