import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8ItWInW00QzqPAihEi_ky20t9qkybXIc",
  authDomain: "massive-company.firebaseapp.com",
  databaseURL: "https://massive-company-default-rtdb.firebaseio.com",
  projectId: "massive-company",
  storageBucket: "massive-company.appspot.com",
  messagingSenderId: "482505742597",
  appId: "1:482505742597:web:6f9f5964649885c7c1ff6c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();
const storage = getStorage();

export { auth, db, storage};
export {ref as storageRef};