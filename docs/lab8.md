# Opis

## Kontekst

To laboratorium jest kontynuacją projektu "Interaktywny Edytor Tras na Obrazie" realizowanego w Django. Zakładamy, że posiadasz działającą aplikację webową z poprzednich laboratoriów, która umożliwia:

* Wyświetlanie obrazu tła.
* Wyświetlanie listy punktów istniejącej trasy (np. w tabeli lub liście obok obrazu).
* Formularz do dodawania nowych punktów do trasy (z polami na współrzędne X i Y).
* Możliwość usuwania punktów.

## Cel zadania

Celem tego laboratorium jest wzbogacenie interfejsu użytkownika aplikacji o dynamiczne funkcjonalności po stronie klienta przy użyciu TypeScript. Chcemy umożliwić użytkownikowi łatwiejsze dodawanie punktów poprzez kliknięcie na obrazie oraz wizualne lokalizowanie punktów na obrazie na podstawie interakcji z listą/formularzem.

## Opis funkcjonalności do zaimplementowania

1.  **Dodawanie Punktu przez Kliknięcie na Obrazie:**
    * Użytkownik powinien móc kliknąć w dowolnym miejscu na wyświetlanym obrazie tła.
    * Po kliknięciu, współrzędne (X, Y) tego punktu *względem obrazu* powinny zostać automatycznie wpisane do pól formularza służącego do dodawania nowego punktu trasy.
    * Należy zapewnić wizualne potwierdzenie kliknięcia, np. przez krótkotrwałe wyświetlenie znacznika w miejscu kliknięcia.

2.  **Wizualizacja Wybranego Punktu z Formularza/Listy:**
    * Gdy użytkownik wejdzie w interakcję z elementem reprezentującym istniejący punkt trasy (np. kliknie na wiersz w tabeli z punktami, najedzie na niego myszką, lub kliknie dedykowany przycisk "Pokaż" obok punktu), ten konkretny punkt powinien zostać wyraźnie zaznaczony lub wyróżniony na obrazie tła.
    * Wizualizacja może przyjąć formę np. tymczasowego okręgu, zmiany koloru istniejącego znacznika punktu (jeśli punkty są już wizualizowane na obrazie za pomocą np. SVG lub Canvas), lub innego wskaźnika.
    * Zaznaczenie powinno być tymczasowe lub znikać przy interakcji z innym punktem/elementem.

## Zadania do realizacji

1.  **Setup Środowiska TypeScript w Projekcie Django:**
    * Zainstaluj Node.js i npm (jeśli nie są jeszcze zainstalowane).
    * W głównym katalogu projektu Django (lub dedykowanym katalogu na frontend) zainicjuj projekt npm (`npm init -y`).
    * Zainstaluj TypeScript jako zależność deweloperską: `npm install typescript --save-dev`.
    * Utwórz plik konfiguracyjny TypeScript `tsconfig.json`. Skonfiguruj go co najmniej do:
        * Określenia wersji docelowej JavaScript (np. `target: "ES6"`).
        * Wybrania systemu modułów (np. `module: "ES6"`).
        * Określenia katalogu wyjściowego dla skompilowanych plików JavaScript (np. `outDir: "./static/js/dist/"` - dostosuj ścieżkę do struktury plików statycznych Django).
        * Włączenia map źródłowych (`sourceMap: true`) dla łatwiejszego debugowania.
    * Zorganizuj pliki źródłowe TypeScript (np. w katalogu `src/` lub `typescript/`).
    * Skonfiguruj proces kompilacji TypeScript do JavaScript (np. poprzez dodanie skryptu do `package.json`: `"build": "tsc"`). Uruchamiaj kompilację za pomocą `npm run build`.
    * Upewnij się, że skompilowany plik JavaScript jest poprawnie dołączany do odpowiednich szablonów Django. Pamiętaj o uruchomieniu `python manage.py collectstatic`, jeśli jest to wymagane w Twojej konfiguracji.

2.  **Przygotowanie Struktury HTML:**
    * Upewnij się, że w szablonie Django (np. `route_detail.html`) elementy kluczowe dla interakcji mają odpowiednie identyfikatory (`id`) lub klasy (`class`), aby łatwo można było je zlokalizować za pomocą JavaScript/TypeScript:
        * Kontener obrazu tła.
        * Sam element obrazu (`<img>`).
        * Pola formularza do wprowadzania współrzędnych X i Y nowego punktu.
        * Elementy listy/tabeli reprezentujące istniejące punkty (każdy element powinien zawierać współrzędne punktu, np. w atrybutach `data-*`).

3.  **Implementacja Logiki Kliknięcia na Obrazie (TypeScript):**
    * Napisz kod TypeScript, który doda event listener (`click`) do elementu obrazu lub jego kontenera.
    * W obsłudze zdarzenia:
        * Pobierz współrzędne kliknięcia (`event.clientX`, `event.clientY` lub lepiej `event.offsetX`, `event.offsetY` jeśli są dostępne i działają poprawnie względem elementu).
        * Przelicz współrzędne kliknięcia względem *lewego górnego rogu samego obrazu*, uwzględniając jego pozycję i ewentualne przesunięcia/marginesy kontenera. Funkcja `element.getBoundingClientRect()` może być pomocna.
        * Zaktualizuj wartości pól (`value`) formularza X i Y nowymi współrzędnymi.
        * (Opcjonalnie) Dodaj wizualny feedback (np. krótko wyświetlany mały element `div` w miejscu kliknięcia).

4.  **Implementacja Logiki Wyróżniania Punktu (TypeScript):**
    * Napisz kod TypeScript, który doda event listenery (np. `click` lub `mouseover`/`mouseout`) do elementów reprezentujących istniejące punkty na liście/w tabeli.
    * W obsłudze zdarzenia:
        * Odczytaj współrzędne X i Y punktu z atrybutów `data-*` klikniętego/wskazanego elementu.
        * Zaimplementuj funkcję, która stworzy i wyświetli wizualny wskaźnik na obrazie w odpowiednich koordynatach (np. absolutnie pozycjonowany `div` z odpowiednim stylem, nałożony na kontener obrazu). Pamiętaj o przeliczeniu współrzędnych punktu na pozycję względem kontenera obrazu.
        * Zadbaj o usuwanie poprzednich wskaźników, aby tylko jeden był widoczny naraz (lub aby znikał po odpowiednim zdarzeniu, np. `mouseout`).

## Narzędzia i Wskazówki

* **TypeScript Handbook:** Oficjalna dokumentacja TypeScript jest doskonałym źródłem wiedzy.
* **DOM Manipulation:** Wykorzystaj standardowe API DOM (`document.getElementById`, `document.querySelector`, `element.addEventListener`, `element.setAttribute`, `element.style`, `element.getBoundingClientRect`, etc.). TypeScript zapewni Ci bezpieczeństwo typów podczas pracy z tymi API.
* **Event Handling:** Zrozumienie obiektu `Event` i jego właściwości (np. `target`, `currentTarget`, `clientX/Y`, `offsetX/Y`) jest kluczowe.
* **Współrzędne:** Największym wyzwaniem może być poprawne obliczenie współrzędnych kliknięcia względem obrazu, a nie okna przeglądarki czy kontenera. Dokładnie przetestuj tę część. `element.offsetX/Y` są często najprostsze, ale mogą nie być wspierane we wszystkich przeglądarkach lub zachowywać się różnie w zależności od struktury HTML/CSS. Alternatywą jest użycie `event.clientX/Y` i `element.getBoundingClientRect()`.
* **Atrybuty `data-*`:** Są wygodnym sposobem przekazywania danych (jak współrzędne punktów) z szablonu Django (backend) do kodu JavaScript/TypeScript (frontend). Dostęp do nich uzyskasz przez `element.dataset`.
* **Debugowanie:** Używaj narzędzi deweloperskich przeglądarki (konsola, debugger, inspektor elementów) oraz map źródłowych (`source maps`) generowanych przez TypeScript do debugowania kodu.

## Pliki statyczne w Django

W Django pliki statyczne to zasoby takie jak CSS, **JavaScript** czy obrazy, które są serwowane bezpośrednio do przeglądarki i nie zmieniają się dynamicznie podczas działania aplikacji.

1. **Ustaw STATIC_URL, STATICFILES_DIRS, STATIC_ROOT w 'settings.py':**

    ```
    # Adres URL, pod którym będą dostępne pliki statyczne w przeglądarce
    STATIC_URL = '/static/'

    # Dodatkowe foldery na pliki statyczne poza katalogami aplikacji
    STATICFILES_DIRS = [
        BASE_DIR / "static",
    ]

    # Katalog, do którego Django zbierze pliki statyczne przy wdrożeniu (collectstatic)
    STATIC_ROOT = BASE_DIR / "staticfiles"
    ```
2. **Organizacja plików statycznych**
    
    Pliki statyczne umieszczamy w katalogu **static** wewnątrz każdej aplikacji, np.:

    ```
    myapp/
    └── static/
        └── myapp/
            └── style.css
    ```
    Można też mieć globalny katalog **static** w głównym folderze projektu, np.:
    ```
    static/
    └── global.css
    └── script.js
    ```

3. **Używanie plików statycznych w szablonach**

    **Na początku** szablonu (HTML) należy załadować tag static:

    ```
    load static
    ```

    Następnie odwołujemy się do plików statycznych tak:
    ```
    <link rel="stylesheet" href=" static 'myapp/style.css' ">
    <script src=" static 'script.js' "></script>
    ```

4. **Uruchamianie projektu w trybie development:**

    Ustaw w 'settings.py':
    ```
    DEBUG = True
    ```
    Teraz Django automatycznie serwuje pliki statyczne i możesz testować bez dodatkowej konfiguracji.

5. **Przygotowanie do produkcji**
    Ustaw w 'settings.py':
    ```
    DEBUG = False
    ```
    Następnie uruchom komendę:
    ```
    python manage.py collectstatic
    ```
    Polecenie to skopiuje wszystkie pliki statyczne z katalogów aplikacji oraz z folderów wymienionych w **STATICFILES_DIRS** do katalogu wskazanego przez **STATIC_ROOT**.

## Uwagi

* Kod TypeScript musi zostać skompilowany do JavaScript, aby mógł być wykonany przez przeglądarkę. Pamiętaj o regularnym uruchamianiu kompilatora (`tsc` lub `npm run build`).
* Zadbaj o separację kodu: logika związana z klikaniem na obrazek i logika związana z wyróżnianiem punktów mogą znaleźć się w osobnych funkcjach lub modułach TypeScript dla lepszej organizacji.
* Na tym etapie interakcje (kliknięcie na obrazek, wyróżnienie punktu) nie muszą jeszcze komunikować się z serwerem (poza początkowym załadowaniem strony i danych). Skupiamy się na logice działającej wyłącznie w przeglądarce.

## Opcjonalne Rozszerzenia

* Dodanie możliwości przesuwania istniejących punktów na obrazie za pomocą przeciągnij-i-upuść (drag-and-drop) i aktualizacji formularza.
* Wizualizacja całej trasy (linii łamanej) na obrazie za pomocą SVG lub Canvas, aktualizowana dynamicznie po dodaniu/usunięciu/przesunięciu punktu po stronie klienta (przed zapisaniem na serwerze).
