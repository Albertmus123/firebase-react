import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4dCHoGo3D-OWg2H8xKw5vKOqfkUUFFio",
  authDomain: "fir-course-fc181.firebaseapp.com",
  projectId: "fir-course-fc181",
  storageBucket: "fir-course-fc181.appspot.com",
  messagingSenderId: "955514433111",
  appId: "1:955514433111:web:fd855e2e62e35978c9fd12",
  measurementId: "G-J99N9FEL77",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
