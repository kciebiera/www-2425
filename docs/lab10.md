# Rysowanie Ścieżek na Planszach

## Opis

Deadline: to zadanie jest na zaliczenie (TAK/NIE), trzeba je oddać na jedynastym lub dwunastymym laboratorium osobie, która prowadzi zajęcia.

To laboratorium stanowi kolejny krok w rozwoju projektu "Interaktywny Edytor Tras/Ścieżek". W poprzednich etapach:

* Lab 8 wprowadziło interaktywny frontend w TypeScript dla edycji punktów na statycznym obrazie tła, z funkcjami dodawania punktów przez kliknięcie i wizualizacji punktów na obrazie.
* Lab 9 zastąpiło statyczne tło dynamicznie definiowaną planszą w formie siatki do gry "Połącz Kropki". Umożliwiło tworzenie i zapisywanie konfiguracji plansz (wymiary, rozmieszczenie kropek) w bazie danych.

Obecnym celem jest wykorzystanie tych plansz z Lab 9 jako baz do rysowania na nich **indywidualnych ścieżek przez różnych użytkowników**. Chcemy, aby każdy zalogowany użytkownik mógł wczytać planszę stworzoną przez *dowolnego* użytkownika, a następnie narysować i zapisać na niej *swoją własną*, unikalną ścieżkę. Ścieżki rysowane przez jednego użytkownika na danej planszy powinny być niewidoczne dla innych użytkowników pracujących na tej samej planszy.

## Cel zadania

Celem tego laboratorium jest zaimplementowanie funkcjonalności pozwalającej użytkownikowi na:
1.  Wczytanie istniejącej planszy zdefiniowanej w Lab 9.
2.  Wyświetlenie tej planszy (siatki z kropkami).
3.  Narysowanie na tej siatce **indywidualnej, sekwencyjnej ścieżki** poprzez klikanie w komórki siatki, wykorzystując mechanizm podobny do dodawania punktów w Lab 8, ale operujący na współrzędnych siatki (wiersz, kolumna).
4.  Zapisanie narysowanej ścieżki **powiązanej z konkretną planszą i konkretnym użytkownikiem**.
5.  Przy ponownym wczytaniu tej samej planszy przez tego samego użytkownika, wczytanie i wyświetlenie jego wcześniej zapisanej ścieżki.
