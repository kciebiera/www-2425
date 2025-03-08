# Organizacyjne

- Tego zadania nie trzeba pokazywać osobie prowadzącej.
- Zadanie dotyczy **wyłącznie HTML**, bez użycia CSS.

# Cel

- Celem zadania jest przeprzygotowanie strony internetowej w formacie HTML. Dobrze by było, gdyby strona dotyczyła tematyki związanej z tematyką wybraną na laboratorium pierwszym.
- Ważnym fragmentem zadania jest instalacja `npm` i [https://www.npmjs.com/package/html-validate](https://www.npmjs.com/package/html-validate)

# Wymagania

1. Struktura strony:
   - Należy dodać do strony nagłówek, artykuł i stopkę (elementy [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header), [`<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) i [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)).
   - Użyć tagów [`<h1>` i `<h2>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) do wyróżnienia nagłówków.
2. Tabela:
   - Stworzyć tabelkę [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) z danymi (mogą być wymyślone).
   - Tabela powinna zawierać nagłówek [`<thead>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead), wiersze [`<tr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr) i kolumny wiersze [`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) z danymi.
   - Należy nadać tabeli tytuł [`<caption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption).
3. Lista:
   - Stworzyć listę [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) numerowaną cyframi rzymskimi.
4. Wyróżnienia:
   - Użyć tagów do wyróżnienia tekstu (np. [`<strong>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong), [`<em>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)).
5. Obrazek:
   - Dodać do strony obrazek (element [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)).
6. Formularz:
   - Stworzyć formularz (element [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)) zawierający między innnymi:
       - Pole tekstowe (element [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)).
       - Pole wyboru (element [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)) z [optgroup](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#select_with_grouping_options).
       - Przycisk (element [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)).
7. Rozwijany opis:
   - Użyć tagów [`<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) i [`<summary>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary) do stworzenia rozwijanego opisu.
8. Pasek postępu:
    - Użyć elementu [`<progress>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) do stworzenia paska postępu (np. dla postępu zrobienia zadania).
9. Mapa:
    - Stworzyć sensowną mapę za pomocą elementów [`<map>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map) i [`<area>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area). Mapa powinna zawierać co najmniej 3 obszary (`<area>`).

# Udostępnianie

Stronę należy udostępnić tak, [jak w zadaniu z laboratorium pierwszego](https://kciebiera.github.io/www-2425/lab1.html#wystawianie).

# Weryfikacja poprawności strony

Strona powinna być zwerifikowana za pomocą narzędzia `html-validate`. W tym celu należy zainstalować narzędzie za pomocą `npm` na jeden z dwóch sposobów:

- globalnie: `npm install -g html-validate`. Dzięki temu można weryfikować pliki .html wpisując `html-validate [plik]` lub `html-validate [folder]` (rekurencyjnie weryfikuje wszystkie pliki .html w folderze).
- lokalnie: Tworząc projekt komendą `npm init -y`, następnie w tym samym katalogu instalując narzędzie komendą `npm install html-validate`. Teraz do weryfikacji wystarczy komenda `npx html-validate [plik/folder]`. Alternatywnie można dodać pole `scripts` do pliku `package.json`:
   ```json
   "scripts": {
      "validate": "html-validate ."
   }
   ```
   i wtedy weryfikacja całego projektu odbywa się komendą `npm run validate`.

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
