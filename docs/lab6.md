# Rozszerzenie API dla Interaktywnego Edytora Tras

## Cel zadania

Rozszerzenie funkcjonalności aplikacji webowej z poprzedniego laboratorium poprzez dodanie API REST, które umożliwi zarządzanie trasami i ich punktami za pomocą zewnętrznych aplikacji lub skryptów. Celem jest zapewnienie większej elastyczności i integracji z innymi systemami.

## Opis funkcjonalności

1. Instalacja i konfiguracja Django REST framework:
    - Dodanie Django REST framework do projektu.
    - Konfiguracja serializatorów i widoków API.
2. API dla zarządzania trasami:
    - Endpoint umożliwiający tworzenie nowych tras.
    - Endpoint do pobierania szczegółów trasy (lista punktów, obraz tła).
    - Endpoint do usuwania tras.
3. API dla zarządzania punktami trasy:
    - Endpoint do dodawania nowych punktów do istniejącej trasy.
    - Endpoint do usuwania istniejących punktów z trasy.
    - Endpoint do pobierania listy punktów trasy.
4. Autoryzacja:
    - Zabezpieczenie endpointów API za pomocą tokenów autoryzacyjnych, aby tylko zalogowani użytkownicy mogli modyfikować swoje trasy.

## Zadania do realizacji

1. Instalacja i konfiguracja Django REST framework:
    - Zainstaluj Django REST framework za pomocą pip (pip install djangorestframework).
    - Dodaj rest_framework do INSTALLED_APPS w pliku settings.py.
    - Skonfiguruj serializatory dla modeli Trasa i PunktTrasy.
2. Implementacja API dla tras:
    - Stwórz widoki API (ViewSet lub APIView) dla operacji tworzenia, pobierania i usuwania tras.
    - Użyj serializatorów do konwersji danych z modeli na JSON i odwrotnie.
    - Zaimplementuj odpowiednie endpointy (np. `/api/trasy/`, `/api/trasy/{trasa_id}/`).
3. Implementacja API dla punktów tras:
    - Stwórz widoki API dla operacji dodawania, usuwania i pobierania punktów trasy.
    - Upewnij się, że operacje te są powiązane z konkretną trasą.
    - Zaimplementuj odpowiednie endpointy (np. `/api/trasy/{trasa_id}/punkty/`, `/api/trasy/{trasa_id}/punkty/{punkt_id}/`).
4. Autoryzacja:
    - Skonfiguruj autoryzację opartą na tokenach (TokenAuthentication lub OAuth2).
    - Zabezpiecz endpointy API, aby wymagały uwierzytelnienia.
5. Dokumentacja:
    - Dodaj dokumentację do API, np. za pomocą Swagger lub ReDoc.

Uwagi

- Należy zwrócić szczególną uwagę na bezpieczeństwo API, aby zapobiec nieautoryzowanemu dostępowi do danych.
- Warto zaimplementować testy jednostkowe dla widoków API, aby zapewnić ich poprawność.
- Dokumentacja API powinna być czytelna i zawierać przykłady użycia endpointów.
