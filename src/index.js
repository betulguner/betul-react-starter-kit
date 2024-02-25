import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './style.css'

import {AuthProvider} from "./context/AuthContext2";

import {Provider} from "react-redux";
import store from "./stores";

const root = ReactDOM.createRoot(document.getElementById('root')); 
//ReactDOM.createRoot(document.getElementById('root'));
/*root.render (
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>
);*/


//REDUX
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)

