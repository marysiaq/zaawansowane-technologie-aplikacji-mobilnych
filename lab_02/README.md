# Lab 02 — Powiadomienia i Web Push

PWA realizuje prośbę o zgodę po kliknięciu, pokazuje aktualny stan uprawnienia, pozwala zbudować powiadomienie z tytułem, treścią i wyborem ikony, a service worker obsługuje kliknięcie oraz wiadomości Push.

## Uruchomienie lokalne

Wymagany jest Node.js w wersji LTS. W terminalu, w folderze `lab_02`, uruchom:

```sh
npm install
cd public
npx serve
```

Otwórz adres pokazany przez serwer (zwykle `http://localhost:3000`). Nie uruchamiaj `index.html` bezpośrednio z dysku.

## Web Push

1. W folderze `lab_02` uruchom `node generate-keys.mjs` i skopiuj publiczny klucz z terminala.
2. W `public/notification.js` wstaw publiczny klucz do stałej `VAPID_PUBLIC_KEY`.
3. Odśwież stronę, włącz zgodę i kliknij **Subskrybuj**. Zapisz pokazany JSON w `lab_02/subscription.json`.
4. W `send-push.mjs` zastąp `twoj.adres@example.com` swoim adresem e-mail.
5. Wyślij powiadomienie z folderu `lab_02`: `node send-push.mjs "Nowa wiadomość" "Pozdrowienia z serwera"`.

`vapid-keys.json` zawiera prywatny klucz. Nie umieszczaj go w `public/` ani w repozytorium. `.gitignore` wyklucza również subskrypcję.

## Publikacja i telefon

Opublikuj wyłącznie folder `public/` przez HTTPS (Firebase Hosting albo GitHub Pages). Web Push na telefonie wymaga subskrypcji utworzonej na opublikowanym adresie HTTPS. Na iPhonie/iPadzie iOS 16.4+ dodaj witrynę do ekranu początkowego i uruchom ją z ikony. Do ukończenia tej części zadania dopisz poniżej adres wdrożenia i dodaj zrzut ekranu powiadomienia odebranego na telefonie.

Adres aplikacji: (https://lab01-ztam-mb.web.app)

![Zrzut ekranu1](zdj1.jfif)

![Zrzut ekranu2](zdj2.jfif)
