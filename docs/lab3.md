# Opis

Na dzisiejszym laboratorium naszym celem będzie wykorzystanie `flex` oraz `scss` do stworzenia prostego layoutu
strony z poprzednich zajęć.

## Wymagania

Zademonstruj:

1. Ukrywanie jednego z elementów strony w sytuacji, gdy szerokość okna przeglądarki jest mniejsza niż `800px`.
2. Zmianę koloru tła elementu strony w momencie, gdy kursor znajduje się nad tym elementem.
3. Zmianę koloru tła elementu strony w momencie, gdy kursor znajduje się nad tym elementem, ale tylko wtedy, gdy szerokość okna przeglądarki jest większa niż `800px`.
4. Zmianę kolejności elementów strony w momencie, gdy szerokość okna przeglądarki jest mniejsza niż `800px` (elementy mają być ułożone jeden pod drugim).
5. Wykorzystanie atrybutu [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) do wyśrodkowania elementów w kontenerze:
   - po lewej stronie,
   - po prawej stronie,
   - na środku,
   - równomiernie rozłożone.
6. Przygotuj `SCSS`, który będzie zawierał:
   - zmienną z kolorami tła,
   - zmienną z kolorami tekstu,
   - zmienną z kolorami linków.
7. Wykorzystanie zmiennych w pliku `SCSS`.
8. Wykorzystanie mixinów w pliku `SCSS`.
9. Wykorzystanie zagnieżdżania w pliku `SCSS`.
10. Wykorzystanie funkcji w pliku `SCSS` (np. [`color.scale()`](https://sass-lang.com/documentation/breaking-changes/color-functions/#single-channel-adjustment-functions)).

<!-- Krótki tutorial na temat użycia scss (czym jest saas, instalacja go globalnie lub lokalnie) -->
## Elegancki CSS

**SCSS** to rozszerzenie składni CSS, które umożliwia między innymi używanie zmiennych, zagnieżdżania, mixinów. **Sass** to preprocesor CSS, który kompiluje kod SCSS do standardowego CSS.

### Instalacja i uruchamianie

> **Uwaga:** Przed instalacją upewnij się, że masz zainstalowany npm.

#### Używanie Live Sass Compiler w VSCode
Najprostszym sposobem na używanie SCSS jest pobranie rozszerzenia Live Sass Compiler w VSCode. Po zainstalowaniu wtyczki, wystarczy wcisnąć przycisk `Watch Sass` w prawym rogu dolnego paska, aby automatycznie kompilować pliki SCSS do CSS przy każdej zmianie (zapisie). Jeśli jednak nie lubisz pisać w VSCode i wolisz np. VIM 😎, to możesz zastosować się do poniższych instrukcji:

#### Globalna instalacja za pomocą npm
> **Uwaga:** Globalna instalacja nie działa na komputerach labowych z powodu braku uprawnień.

Aby zainstalować Sass globalnie, użyj poniższego polecenia:
```bash
npm install -g sass
```
Po zainstalowaniu Sass globalnie, możesz użyć polecenia `sass` w dowolnym miejscu w systemie do kompilacji plików SCSS do CSS:
```bash
sass [plik.scss] [plik.css]
```

#### Lokalna instalacja za pomocą npm
Aby zainstalować Sass lokalnie, na początku utwórz projekt komendą:
```bash
npm init -y
```
Następnie w tym samym katalogu zainstaluj Sass:
```bash
npm install sass
```
Teraz do kompilacji SCSS do CSS wystarczy komenda:
```bash
npx sass [plik.scss] [plik.css]
```

### Automatyczna kompilacja po zapisie
Aby automatycznie kompilować pliki SCSS do CSS przy każdej zmianie, możesz użyć flagi `--watch`:
```bash
sass --watch [plik.scss]:[plik.css]
```
Lub w przypadku lokalnej instalacji:
```bash
npx sass --watch [plik.scss]:[plik.css]
```

## Przydatne informacje

- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [SCSS](https://sass-lang.com/guide)
- [Zmienne w SCSS](https://sass-lang.com/documentation/variables)
- [Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [Pseudo-klasy](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [Pseudo-elementy](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
- [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
