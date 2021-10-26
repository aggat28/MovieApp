import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";
import UserContextProvider from './contexts/userContext.jsx';
import LoaderContextProvider from './contexts/loaderContext';


const firebaseConfig = {
  apiKey: "AIzaSyCzlt_djBB29XlbNI8ZZZ7nD1FRH4rJ1H0",
  authDomain: "movieapplogin-1b636.firebaseapp.com",
  projectId: "movieapplogin-1b636",
  storageBucket: "movieapplogin-1b636.appspot.com",
  messagingSenderId: "500691862074",
  appId: "1:500691862074:web:fbd0e0756c647aeb11eb03"
};

const app = initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <LoaderContextProvider>
        <App />
      </LoaderContextProvider>
    </UserContextProvider>

  </React.StrictMode >,
  document.getElementById('root')
);