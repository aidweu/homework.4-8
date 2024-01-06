import classes from './oneHeroPage.module.sass'
import {heroesData} from "../heroesPage/heroesData.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";


export const OneHeroPage = () => {
    const [ hero, setHero ] = useState()
    const navigate = useNavigate()
    const { name } = useParams()

    useEffect(() => {
        const findHero = heroesData.filter(item => item.name === name)
        setHero(findHero && findHero[0])
        console.log(findHero)
    }, [])

    console.log(hero)

    return (
        <div className={classes.oneHeroPage}>
            <div className={'container'}>
                <div className={classes.oneHero}>
                    <button className={classes.backButton} onClick={() => navigate(-1)}>back</button>
                    <div className={classes.HeroBox}>
                        <div className={classes.HeroBox__left}>
                            <h2>{hero?.name}</h2>
                            <img src={hero?.src} alt="heroImage"/>
                        </div>
                        <div className={classes.HeroBox__right}>
                            <p>{hero?.body ? hero?.body : 'hero body is empty!'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}