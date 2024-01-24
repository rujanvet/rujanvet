import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './rujan.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CookieConsent} from "react-cookie-consent";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <CookieConsent
          location="bottom"
          buttonText="OK"
          cookieName="cookieConsent"
          style={{ background: "#4926bd",justifyContent:'center',textAlign:'center' }}
          buttonStyle={{ background: "#4a9be0",color:"white", fontSize: "13px",padding:"5px 20px" }}
          expires={150}
      >Acest site foloseste cookies pentru a imbunatati experienta vizitatorilor.</CookieConsent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
