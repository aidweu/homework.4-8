import { Route, Routes } from 'react-router-dom'

import { OneHeroPage } from './pages/oneHeroPage/oneHeroPage.jsx'
import { HeroesPage } from './pages/heroesPage/heroesPage.jsx'
import { AboutPage } from './pages/aboutPage/aboutPage.jsx'
import { MainPage } from './pages/mainPage/mainPage.jsx'
import { Header } from './components/header/header.jsx'
import { Footer } from './components/footer/footer.jsx'


export const App = () => {

    return <>
        <Header/>
        <Routes>
            {/*Routes - нужен для обозначения всех страниц*/}
            <Route path={'/'} element={<MainPage/>}/>
            {/*Route - нужен для рендеринга одной страницы ( path: путь, element: компонент )*/}
            <Route path={'/heroes'} element={<HeroesPage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/heroes/:name'} element={<OneHeroPage/>}/>
        </Routes>
        <Footer/>
    </>
}