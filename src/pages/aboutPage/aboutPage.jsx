import React from 'react';
import classes from './aboutPage.module.sass'
import {heroesData} from "../heroesPage/heroesData.jsx";

export const AboutPage = () => {
    return (
        <div>
            <div className={classes.aboutPage}>
                <div className={'container'}>
                    <div className={classes.aboutPage__inner}>
                        <div className={classes.aboutInfo}>
                            <h1>Contacts</h1>
                            <ul>
                                <li><a href="#">ID MLBB: 15177991043 </a></li>
                                <li><a href="#">Phone Number: +996 555 22 11 05</a></li>
                                <li><a href="https://web.telegram.org/k/#@kulsariev">Telegram: AIDWEU</a></li>
                            </ul>
                            <h2>Location</h2>
                            <span>Kyrgyzstan, Bishkek</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

