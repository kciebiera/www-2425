# Organizacyjne

- Tego zadania nie trzeba pokazywać osobie prowadzącej.
- Zadanie dotyczy **wyłącznie HTML**, bez użycia CSS.

# Cel

- Celem zadania jest przeprzygotowanie strony internetowej w formacie HTML. Dobrze by było, gdyby strona dotyczyła tematyki związanej z tematyką wybraną na laboratorium pierwszym.
- Ważnym fragmentem zadania jest instalacja `npm` i [https://www.npmjs.com/package/html-validate](https://www.npmjs.com/package/html-validate)

# Wymagania

1. Struktura strony:
   - Należy dodać do strony nagłówek, artykuł i stopkę (elementy [`<header>`](https://www.w3schools.com/tags/tag_header.asp), [`<article>`](https://www.w3schools.com/tags/tag_article.asp) i [`<footer>`](https://www.w3schools.com/tags/tag_footer.asp)).
   - Użyć tagów [`<h1>`](https://www.w3schools.com/tags/tag_hn.asp) i [`<h2>`](https://www.w3schools.com/tags/tag_hn.asp) do wyróżnienia nagłówków.
2. Tabela:
   - Stworzyć tabelkę z danymi (mogą być wymyślone).
   - Tabela powinna zawierać nagłówek, wiersze i kolumny z danymi.
   - Należy nadać tabeli tytuł.
3. Lista:
   - Stworzyć listę numerowaną cyframi rzymskimi.
4. Wyróżnienia:
   - Użyć tagów do wyróżnienia tekstu (np. [`<strong>`](https://www.w3schools.com/tags/tag_strong.asp), [`<em>`](https://www.w3schools.com/tags/tag_em.asp)).
5. Obrazek:
   - Dodać do strony obrazek (element [`<img>`](https://www.w3schools.com/tags/tag_img.asp)).
6. Formularz:
   - Stworzyć formularz (element [`<form>`](https://www.w3schools.com/tags/tag_form.asp)) zawierający między innnymi:
       - Pole tekstowe (element [`<input>`](https://www.w3schools.com/tags/tag_input.asp)).
       - Pole wyboru (element [`<select>`](https://www.w3schools.com/tags/tag_select.asp)) z [`optgroup`](http://www.w3schools.com/TAgs/tag_optgroup.asp).
       - Przycisk (element [`<button>`](http://www.w3schools.com/TAgs/tag_button.asp)).
7. Rozwijany opis:
   - Użyć tagów [`<details>`](http://www.w3schools.com/TAgs/tag_details.asp) i [`<summary>`](http://www.w3schools.com/TAgs/tag_summary.asp) do stworzenia rozwijanego opisu.
8. Pasek postępu:
    - Użyć elementu [`<progress>`](http://www.w3schools.com/TAgs/tag_progress.asp) do stworzenia paska postępu (np. dla postępu zrobienia zadania).
9. Mapa:
    - Stworzyć sensowną mapę za pomocą elementów [`<map>`](http://www.w3schools.com/TAgs/tag_map.asp) i [`<area>`](http://www.w3schools.com/TAgs/tag_area.asp). Mapa powinna zawierać co najmniej 3 obszary.

# Udostępnianie

Stronę należy udostępnić tak, jak w zadaniu z laboratorium pierwszego.

# Weryfikacja poprawności strony

Strona powinna być zwerifikowana za pomocą narzędzia `html-validate`. W tym celu należy zainstalować narzędzie za pomocą `npm`, a następnie uruchomić je w katalogu z plikiem HTML.

Jako bonus można dodać konfigurację `html-validate` do pliku `package.json` i uruchamiać walidację za pomocą `npm run validate`, albo pokazać jak użyć Vite, albo czegoś innego.

# Materiały pomocnicze

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [HTML - tabele](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

# Uwagi

1. Skup się na poprawnym użyciu tagów HTML, a nie na estetyce strony.
2. Zadbaj o czytelność i poprawność kodu.
3. W razie problemów skorzystaj z materiałów pomocniczych lub skontaktuj się z prowadzącym.

# Dodatkowe informacje

Możesz rozszerzyć zadanie o dodatkowe elementy, np.:

- Dodanie linków do innych stron.
- Umieszczenie filmu na stronie.
- Użycie stylów inline do formatowania tekstu.

GLHF! 🚀
