import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import webpush from 'web-push';

if (!existsSync('vapid-keys.json')) {
  writeFileSync('vapid-keys.json', JSON.stringify(webpush.generateVAPIDKeys(), null, 2));
}
const keys = JSON.parse(readFileSync('vapid-keys.json', 'utf8'));
console.log('Publiczny klucz VAPID (ustaw window.VAPID_PUBLIC_KEY w public/notification.js):');
console.log(keys.publicKey);
