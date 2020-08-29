import {render} from 'react-dom'
import React from 'react'
import App from './app'
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/style.scss'
import { BrowserRouter } from 'react-router-dom';

render(
    <BrowserRouter>
       <App/>
    </BrowserRouter>
,document.querySelector('#app'))