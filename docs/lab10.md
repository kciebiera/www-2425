# Rysowanie Ścieżek na Planszach

## Opis

Deadline: to zadanie jest na zaliczenie (TAK/NIE), trzeba je oddać na **jedenastym** lub **dwunastym** laboratorium prowadzącemu zajęcia.

To laboratorium stanowi kolejny krok w rozwoju projektu "Interaktywny Edytor Tras/Ścieżek". W poprzednich etapach:

*   W ramach **Laboratorium 8** wprowadziliśmy interaktywny frontend w TypeScript. Umożliwiał on edycję punktów na statycznym obrazie tła, z funkcjami dodawania punktów przez kliknięcie oraz wizualizację punktów na obrazie.
*   W **Laboratorium 9** statyczne tło zostało zastąpione dynamicznie definiowaną planszą w formie siatki do gry "Połącz Kropki". Umożliwiło to tworzenie i zapisywanie konfiguracji plansz (wymiary, rozmieszczenie kropek) w bazie danych.

Obecnym celem jest wykorzystanie tych plansz z **Laboratorium 9** jako baz do rysowania na nich **indywidualnych ścieżek przez różnych użytkowników**. Chcemy, aby każdy zalogowany użytkownik mógł wczytać planszę stworzoną przez *dowolnego* użytkownika, a następnie narysować i zapisać na niej *swoją własną*, unikalną ścieżkę. Ścieżki rysowane przez jednego użytkownika na danej planszy powinny być niewidoczne dla innych użytkowników pracujących na tej samej planszy.

## Cel zadania

Celem tego laboratorium jest zaimplementowanie funkcjonalności pozwalającej użytkownikowi na:
1.  Wczytanie istniejącej planszy zdefiniowanej w **Laboratorium 9**.
2.  Wyświetlenie tej planszy (siatki z kropkami).
3.  Narysowanie na tej siatce **indywidualnej, sekwencyjnej ścieżki** poprzez klikanie w komórki siatki, wykorzystując mechanizm podobny do dodawania punktów z **Laboratorium 8**, ale operujący na współrzędnych siatki (wiersz, kolumna).
4.  Zapisanie narysowanej ścieżki **powiązanej z konkretną planszą i konkretnym użytkownikiem**.
5.  Przy ponownym wczytaniu tej samej planszy przez tego samego użytkownika, wczytanie i wyświetlenie jego wcześniej zapisanej ścieżki.
