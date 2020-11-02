import React from 'react';
import footerStyles from "./Footer.module.scss"

const Footer = () => (
    <footer className={footerStyles.footer}>
        <div className="container-fluid global-footer-container">
            <hr/>
            <div className={footerStyles.footerInner}>
                <div className={footerStyles.logo}><a href="http://drewstal.pl">DREWSTAL.</a></div>
                <ul>
                    <li><a target="_blank" rel="noreferrer" href="https://lumina.studio">lumina.studio</a></li>
                    <li><a href="#">Polityka prywatności</a></li>
                </ul>
                <ul>
                    <li >
                        <div className={footerStyles.icon}><i className='fa fa-facebook'></i></div>
                    </li>
                    <li>
                        <div className={footerStyles.icon}><i className='fa fa-pinterest p-2'></i></div>
                    </li>
                    <li>
                        <div className={footerStyles.icon}><i className='fa fa-instagram p-2'></i></div>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;


