import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBatSoWlyttQo9ES6BaqWz6jbN2wiqAq0A",
  authDomain: "whatsapp-fb189.firebaseapp.com",
  projectId: "whatsapp-fb189",
  storageBucket: "whatsapp-fb189.appspot.com",
  messagingSenderId: "392085973310",
  appId: "1:392085973310:web:a20081304a4d10d3be246f",
  measurementId: "G-XW4N7H4F79",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
