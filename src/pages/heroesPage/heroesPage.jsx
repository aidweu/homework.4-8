import classes from './heroesPage.module.sass'
import React from 'react';
import { heroesData } from "./heroesData.jsx";
import { useNavigate } from "react-router-dom";

export const HeroesPage = () => {
    const navigate = useNavigate()

    return (
        <div className={classes.heroesPage}>
            <div className={'container'}>
                <div className={classes.heroesPage__inner}>
                    {heroesData.map(item =>
                        <div key={item.id} className={classes.heroBox}>
                            <div className={classes.heroCard}>
                                <img
                                    src={item.src}
                                    alt={'hero'}
                                    onClick={() => navigate(`/heroes/${item.name}`)}
                                />
                            </div>
                            <p>{item.name}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

