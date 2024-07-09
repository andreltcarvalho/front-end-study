import reportWebVitals from './reportWebVitals.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ThemeContextProvider, getMovistarSkin } from '@telefonica/mistica';
import '@telefonica/mistica/css/mistica.css';

const misticaTheme = {
    skin: getMovistarSkin(),
    i18n: { locale: 'pt-BR', phoneNumberFormattingRegionCode: 'BR' },
};

ReactDOM.render(
    <ThemeContextProvider theme={misticaTheme}>
        <App />
    </ThemeContextProvider>,
    document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
