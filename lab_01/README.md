# Lab 1 – PWA

## Co zostało zrealizowane

Przygotowana została prosta aplikacja PWA z manifestem, ikonami w wymaganych rozmiarach (w tym 192×192 i 512×512 px) oraz service workerem opartym na Workboxie. Service worker zapisuje pliki aplikacji w cache, dzięki czemu działa ona offline, a gdy strony nie da się wczytać, pokazuje własną stronę `offline.html`. Dodany został własny przycisk instalacji, widoczny tylko w przeglądarkach obsługujących `beforeinstallprompt`. Aplikacja jest opublikowana na Firebase Hosting (HTTPS) i zainstalowana na telefonie.

## Uruchomienie

W folderze `public` wpisz `npx serve` i otwórz w Chrome adres z terminala (np. `http://localhost:3000`). Wersja online: https://lab01-ztam.web.app/

## Zainstalowana aplikacja na telefonie

![Zrzut ekranu1](zrzut1.jfif)

![Zrzut ekranu2](zrzut2.jfif)