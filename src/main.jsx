import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'

import { App } from './App.jsx'
import './assets/styles/core.sass'

const root = document.getElementById('root')

createRoot(root).render(
    <BrowserRouter> {/*Оберток для приложения которое позволяет делать навигации*/}
        <App />
    </BrowserRouter>
)
