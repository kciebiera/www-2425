# Opis

Na dzisiejszym laboratorium celem jest przygotowanie prostego serwera w Django.
Django było pokazane na wykładzie a link do dokumentacji znajduje się
[tutaj](https://docs.djangoproject.com/).

To zadanie jest początkiem serii związanej z tworzeniem serwisów internetowych w Django.

**Tytuł zadania:** Interaktywny Edytor Tras na Obrazie

## Cel zadania

Stworzenie aplikacji webowej w Django, która pozwoli użytkownikom na definiowanie, wizualizację i edycję tras na wybranym obrazie tła. Trasa jest rozumiana jako uporządkowana sekwencja punktów 2D, reprezentowanych przez współrzędne (x, y) na płaszczyźnie obrazu.

## Opis funkcjonalności

1. **Wizualizacja:** Aplikacja powinna wyświetlać wybrany obraz tła (np. mapę, plan piętra).
2. **Tworzenie trasy:** Zalogowany użytkownik powinien mieć możliwość zdefiniowania nowej trasy na tym obrazie. Definiowanie może odbywać się poprzez interaktywne klikanie punktów bezpośrednio na obrazie, ale może też być po prostu używany do tego formularz.
3. **Wyświetlanie trasy:** Utworzona lub wybrana trasa powinna być naniesiona na obraz tła, np. jako linia łamana łącząca kolejne punkty sekwencji. Punkty trasy również powinny być widoczne.
4. **Edycja trasy:** Użytkownik powinien mieć możliwość modyfikacji stworzonej przez siebie trasy. Interfejs edycji powinien pozwalać co najmniej na:
   * Dodawanie nowych punktów: np. przez kliknięcie na obrazie lub dodanie współrzędnych w formularzu.
   * Usuwanie istniejących punktów: np. poprzez kliknięcie na punkt lub wybór z listy i potwierdzenie usunięcia.
   * (Opcjonalnie/W kolejnych etapach: zmiana kolejności punktów, przesuwanie punktów).

## Zadania do realizacji na dzisiejszym laboratorium

Na obecnych zajęciach należy zaimplementować następujące podstawowe elementy systemu:

1. **System Uwierzytelniania:**
    * Implementacja mechanizmu logowania i rejestracji użytkowników. Można wykorzystać wbudowany w Django system django.contrib.auth.
    * Każdy użytkownik powinien mieć możliwość zarządzania tylko własnymi trasami.
2. **Zarządzanie Obrazami Tła** (Panel Admina):
    * Stworzenie modelu Django do przechowywania obrazów tła.
    * Umożliwienie dodawania i zarządzania obrazami tła przez administratora aplikacji za pomocą panelu administracyjnego Django (django-admin). Obrazy te będą później dostępne dla użytkowników do wyboru jako tło dla ich tras.
3. **Podstawowa Edycja Tras przez Użytkowników**:
    * Stworzenie modeli Django do przechowywania informacji o trasach i ich punktach (pamiętając o relacji do użytkownika i obrazu tła).
    * Implementacja widoków i szablonów umożliwiających zalogowanemu użytkownikowi:
        * Wybranie obrazu tła spośród dodanych przez admina.
        * Stworzenie nowej, pustej trasy powiązanej z tym obrazem.
        * Dodawanie punktów do tej trasy (na tym etapie wystarczy możliwość dodania punktu np. poprzez formularz podający współrzędne X, Y lub proste kliknięcie, jeśli czas pozwoli).
        * Wyświetlenie listy punktów danej trasy.
        * Usuwanie punktów z trasy.
        * Zapewnienie zapisywania zmian w trasie (dodanych/usuniętych punktów) w bazie danych.

## Uwagi

Serwis należy zaimplementować z użyciem frameworka Django.

Materiał prawie wystarczający do wykonania zadania jest zawarty w trzech pierwszych częściach oficjalnego tutorial'a django:

* [podstawowy setup projektu](https://docs.djangoproject.com/en/5.0/intro/tutorial01/)
* [modele](https://docs.djangoproject.com/en/5.0/intro/tutorial02/)
* [templaty](https://docs.djangoproject.com/en/5.0/intro/tutorial03/)

Nawigacja po serwisie powinna być zaprojektowana w taki sposób, aby użytkownik mógł poruszać się po nim za pomocą linków dostępnych na poszczególnych stronach, bez konieczności korzystania z paska przeglądarki ani przycisku wstecz.

Do logowania i wylogowywania użytkowników można użyć interfejsu zapewnionego przez panel administracyjny django.
W takim wypadku powinni oni mieć ustawioną flagę staff member, ale nie mogą mieć uprawnień do edycji niczego z użyciem admin panelu.

Nie trzeba zabezpieczać się przed atakami w stylu: preparuję jakimś zewnętrznym narzędziem żądanie http, które wysłałby inny użytkownik celem modyfikacji jego obrazka. Wystarczy, że taka niechciana akcja nie będzie jawnie dostępna na stronie. Niemniej warto pomyśleć, w których miejscach strony może to stanowić potencjalne zagrożenie.
