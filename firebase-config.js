// ════════════════════════════════════════════════════════════════
//  FIREBASE CONFIG — постав сюди свої значення з Firebase Console
// ════════════════════════════════════════════════════════════════
//
//  ЯК ОТРИМАТИ ЗНАЧЕННЯ:
//  1. Заходь на https://console.firebase.google.com
//  2. Створи проект (або відкрий існуючий)
//  3. Build → Realtime Database → Create Database → Start in test mode
//  4. Project settings (шестерня зверху) → Your apps → </> Web
//  5. Зареєструй застосунок (будь-яка назва), скопіюй значення з firebaseConfig
//  6. Вставити сюди → зберегти файл → готово
//
//  ВАЖЛИВО: цей файл містить публічні API ключі — їх можна сміливо
//  комітити в публічний репозиторій. Безпека Firebase налаштовується
//  через Database Rules, а не через приховування цих ключів.
//
//  Правила бази даних (Realtime Database → Rules):
//  {
//    "rules": {
//      "rooms": {
//        "$roomId": {
//          ".read": true,
//          ".write": true
//        }
//      }
//    }
//  }
//
// ════════════════════════════════════════════════════════════════

export const firebaseConfig = {
  apiKey: "AIzaSyD-TRRVhYCryEG1ZsfBBXeHU0DfKsSyTLI",
  authDomain: "bunker-cdfb4.firebaseapp.com",
  databaseURL: "https://bunker-cdfb4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bunker-cdfb4",
  storageBucket: "bunker-cdfb4.firebasestorage.app",
  messagingSenderId: "426085143669",
  appId: "1:426085143669:web:22753cb7d196a915ed943c",
  measurementId: "G-EM5J7XZTDT"
};
