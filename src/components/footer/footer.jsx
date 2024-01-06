import classes from './footer.module.sass'
import {footerData} from "./footerData.jsx";


export const Footer = () => {

    console.log(classes)

    return (
        <div className={classes.footer}>
            <div className={'container'}>
                <div className={classes.footer__inner}>
                    <ul>
                        {footerData.map(item =>
                            <li key={item.id}>
                                <a target={"_blank"} href={item.src}>{item.title}</a>
                            </li>
                        )}
                    </ul>
                    <h2>Made by Temirlan</h2>
                </div>
            </div>
        </div>
    );
};

