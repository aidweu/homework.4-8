import classes from './header.module.sass'
import {NavLink, useNavigate} from "react-router-dom";

import logo from '../../assets/images/header/logo_type.png'


export const Header = () => {
    const navigate = useNavigate()


    return <>
        <div className={classes.header}>
            <div className={'container'}>
                <div className={classes.header__inner}>
                    <div className={classes.logo}>
                        <img onClick={() => navigate('/')} src={logo} alt="logo"/>
                    </div>
                    <div className={classes.navLinks}>
                        <NavLink to={'/'}>
                            M a i n
                        </NavLink>
                        <NavLink to={'/heroes'}>
                            H e r o e s
                        </NavLink>
                        <NavLink to={'/about'}>
                            A b o u t
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </>
}