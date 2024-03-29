import React from 'react';
import footerStyles from "./Footer.module.scss"
import {Link} from "gatsby";

const Footer = () => (
    <footer className={footerStyles.footer}>
        <div className="global-footer-container">
            <hr/>
            <div className={footerStyles.footerInner}>
                <div className={footerStyles.logo}><a href="http://drewstal.pl">DREWSTAL.</a></div>
                <ul>
                    <li>by: <a target="_blank" rel="noopener nofollow" href="https://lumina.studio">lumina.studio</a></li>
                    <li>
                        <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div className={footerStyles.icon}><a href="https://www.facebook.com/Drewstal-Nowoczesne-Domki-Letniskowe-100851138731748"><i className='fa fa-facebook'></i></a></div>
                    </li>
                    <li>
                        <div className={footerStyles.icon}><a href="#"><i className='fa fa-pinterest p-2'></i></a></div>
                    </li>
                    <li>
                        <div className={footerStyles.icon}><a href="#"><i className='fa fa-instagram p-2'></i></a></div>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;


