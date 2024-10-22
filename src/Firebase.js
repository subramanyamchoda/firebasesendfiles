import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyCyN9JvkHy0lhiZZMcJwsHV_9EH4Gk_-J8",
  authDomain: "resturant-ea598.firebaseapp.com",
  databaseURL: "https://resturant-ea598-default-rtdb.firebaseio.com",
  projectId: "resturant-ea598",
  storageBucket: "resturant-ea598.appspot.com",
  messagingSenderId: "521124506976",
  appId: "1:521124506976:web:8a1944738b11b53ee60205",
  measurementId: "G-2GZQZF9Y3G"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app); 

export { storage }; 
