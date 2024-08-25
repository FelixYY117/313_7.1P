import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCURa_B74bRHNvOt35GTi5IwKxcVL-0F_E",
  authDomain: "dev-deakin-976d4.firebaseapp.com",
  projectId: "dev-deakin-976d4",
  storageBucket: "dev-deakin-976d4.appspot.com",
  messagingSenderId: "1081047137346",
  appId: "1:1081047137346:web:a9c65faecea2d92d4ac1db",
  measurementId: "G-8RT1VSZ4SR"
};

// Initialize Firebase
// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 获取 Auth 实例
export const auth = getAuth(app);

// 获取 Firestore 实例
export const db = getFirestore(app);

export default app;