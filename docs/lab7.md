# Opis

Deadline: to zadanie jest na zaliczenie (TAK/NIE), trzeba je oddać wraz z zadaniami z poprzednich dwóch laboratoriów na ósmym lub dziewiątym laboratorium osobie, która prowadzi zajęcia.

# Testowanie Aplikacji Edytora Tras

## Cel zadania

Celem tego laboratorium jest napisanie zestawu testów automatycznych dla aplikacji "Interaktywny Edytor Tras na Obrazie", stworzonej w poprzednich zadaniach. Testy mają na celu weryfikację poprawności działania kluczowych funkcjonalności, zarówno interfejsu webowego, jak i API REST, zapewniając stabilność i niezawodność aplikacji.

## Opis funkcjonalności do przetestowania

**Uwaga:** z każdego obszaru wystarczy wybrać kilka testów!!

Należy przygotować testy jednostkowe oraz integracyjne (z użyciem klienta testowego Django) obejmujące następujące obszary:

1. **Modele Danych:**

      * Poprawność tworzenia instancji modeli (`User`, `BackgroundImage`, `Route`, `RoutePoint`).
      * Sprawdzenie poprawności relacji między modelami (np. `Route` powiązany z `User` i `BackgroundImage`, `RoutePoint` powiązany z `Route`).
      * Walidacja danych na poziomie modeli (jeśli została zaimplementowana).

2. **System Uwierzytelniania i Autoryzacji (Interfejs Webowy):**

      * Dostępność stron wymagających logowania tylko dla zalogowanych użytkowników.
      * Przekierowanie niezalogowanych użytkowników do strony logowania.
      * Możliwość zalogowania i wylogowania użytkownika.
      * Sprawdzenie, czy użytkownik może zarządzać (wyświetlać, dodawać punkty, usuwać punkty/trasy) *tylko* swoimi trasami. Próba dostępu do tras innego użytkownika powinna być niemożliwa lub skutkować błędem (np. 404 Not Found lub 403 Forbidden).

3. **Zarządzanie Trasami i Punktami (Interfejs Webowy):**

      * Poprawność wyświetlania listy tras użytkownika.
      * Proces tworzenia nowej, pustej trasy powiązanej z wybranym obrazem tła.
      * Poprawność dodawania punktów do trasy (np. przez formularz).
      * Poprawność usuwania punktów z trasy.
      * Sprawdzenie, czy zmiany (dodanie/usunięcie punktu) są poprawnie zapisywane w bazie danych i odzwierciedlane w widoku.

4. **API REST (Django REST Framework):**

      * **Autentykacja i Autoryzacja API:**
          * Sprawdzenie, czy dostęp do endpointów API wymaga poprawnej autentykacji (np. tokenem).
          * Weryfikacja, czy użytkownik przez API może modyfikować i pobierać dane dotyczące *tylko* swoich tras i punktów.
      * **Endpointy Zarządzania Trasami (`/api/trasy/`, `/api/trasy/{trasa_id}/`):**
          * Testowanie tworzenia nowej trasy (POST).
          * Testowanie pobierania listy tras (GET) - czy zwraca tylko trasy użytkownika?
          * Testowanie pobierania szczegółów konkretnej trasy (GET).
          * Testowanie usuwania trasy (DELETE).
      * **Endpointy Zarządzania Punktami (`/api/trasy/{trasa_id}/punkty/`, `/api/trasy/{trasa_id}/punkty/{punkt_id}/`):**
          * Testowanie dodawania nowego punktu do trasy (POST).
          * Testowanie pobierania listy punktów dla danej trasy (GET).
          * Testowanie usuwania punktu z trasy (DELETE).
      * **Serializacja i Walidacja:**
          * Sprawdzenie poprawności formatu danych JSON zwracanych przez API.
          * Testowanie reakcji API na niepoprawne dane wejściowe (np. brakujące pola, złe typy danych).

## Zadania do realizacji

1. **Konfiguracja Środowiska Testowego:**
      * Zapoznanie się ze sposobem uruchamiania testów w Django (`python manage.py test`).
      * Ewentualna konfiguracja bazy danych na potrzeby testów (Django domyślnie tworzy osobną, tymczasową bazę danych).
2. **Implementacja Testów Modeli:**
      * Stworzenie pliku `tests.py` (lub dedykowanego modułu `tests/`) w odpowiedniej aplikacji Django.
      * Napisanie klas testowych dziedziczących po `django.test.TestCase`.
      * Zaimplementowanie metod testujących tworzenie i zapisywanie obiektów modeli oraz sprawdzających relacje między nimi.
3. **Implementacja Testów Widoków i Logiki Biznesowej (Interfejs Webowy):**
      * Wykorzystanie wbudowanego klienta testowego Django (`self.client`) do symulowania żądań HTTP (GET, POST).
      * Testowanie logiki uwierzytelniania i autoryzacji (dostęp do widoków, przekierowania).
      * Testowanie operacji CRUD na trasach i punktach poprzez interakcje z odpowiednimi widokami (np. wysłanie danych formularza przez POST).
      * Użycie asercji do sprawdzania kodów odpowiedzi HTTP (np. `assertRedirects`, `assertEqual(response.status_code, 200)`), zawartości odpowiedzi (`assertContains`) oraz stanu bazy danych po operacji.
      * Stworzenie użytkowników testowych i danych (np. obrazów tła, tras) w metodach `setUp` lub `setUpTestData` klas testowych.
4. **Implementacja Testów API REST:**
      * Wykorzystanie klienta testowego Django (`self.client`) lub dedykowanego klienta DRF (`rest_framework.test.APIClient`) do wysyłania żądań do endpointów API.
      * Przygotowanie mechanizmu autentykacji dla klienta testowego (np. ustawienie nagłówka `Authorization` z tokenem testowego użytkownika).
      * Testowanie wszystkich zdefiniowanych endpointów API (GET, POST, DELETE) pod kątem poprawności działania, kodów odpowiedzi i zwracanych danych JSON (`assertJSONEqual`).
      * Testowanie logiki autoryzacji – próby dostępu do zasobów innego użytkownika powinny zwrócić odpowiedni błąd (np. 403 Forbidden lub 404 Not Found).
      * Testowanie walidacji danych wejściowych w API.

## Narzędzia i Wskazówki

* **Django Testing Framework:** Podstawowe narzędzie do pisania testów.
  * Dokumentacja: [Writing and running tests](https://docs.djangoproject.com/en/stable/topics/testing/overview/)
  * Klasa `django.test.TestCase`: Automatycznie zarządza bazą danych dla testów.
  * Klient testowy: `django.test.Client` do symulowania żądań HTTP.
* **Django REST Framework Testing:** Narzędzia ułatwiające testowanie API.
  * Dokumentacja: [Testing](https://www.django-rest-framework.org/api-guide/testing/)
  * `rest_framework.test.APITestCase`: Podobne do `TestCase`, ale z dodatkami dla API.
  * `rest_framework.test.APIClient`: Klient testowy z udogodnieniami do pracy z API (np. łatwiejsze ustawianie formatu danych, autentykacji).
* **Fixtures / setUpData:** Rozważ użycie metody `setUpTestData` (dla danych tworzonych raz na klasę testową) lub `setUp` (dla danych tworzonych przed każdym testem) do przygotowania niezbędnych obiektów (użytkowników, obrazów, tras).
* **Asercje:** Korzystaj z bogatego zestawu metod asercji dostarczanych przez `unittest` i Django (np. `assertEqual`, `assertTrue`, `assertContains`, `assertRedirects`, `assertFormError`, `assertJSONEqual`).

## Uwagi

* Pamiętaj o testowaniu zarówno "ścieżek szczęśliwych" (gdy wszystko działa zgodnie z oczekiwaniami), jak i przypadków błędnych lub brzegowych (np. próba usunięcia nieistniejącego punktu, dostęp bez logowania, próba modyfikacji cudzych danych).
* Staraj się, aby testy były niezależne od siebie – wynik jednego testu nie powinien wpływać na inny.
