import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDH2m3L4JXQrXUdG89e4pbc_IvWO5wA9m8",
    authDomain: "back-rutas.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };