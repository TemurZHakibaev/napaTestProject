import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai'
import {Logo} from '../../assets/image/index'
import './Footer.scss'
import {facebook, twitter, instagram, linkedin, scape} from '../../assets/image/index'

function Footer() {
    return (
<>
    <footer>
        <div className={'container'}>
            <div className={'footer'}>
                <h1>Subscribe To Our Newsletter <span className={'block'}>Get The Best Offers</span></h1>
                <div className={'footer__btns'}>
                    <p>With One Click</p>
                    <div className={'footer__btn'}><p>Subscribe</p> <span><AiOutlineArrowRight/></span></div>
                </div>
                <div className={'footer__nav'}>
                    <ul>
                        <li><img src={Logo}/><p>business consultancy agency</p></li>
                        <li>
                            <ul>
                                <li>About</li>
                                <li>Terms</li>
                                <li>Blogs</li>
                                <li>Contact</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><a href={'tel:+998 1276 234'}>+998 1276 234</a></li>
                                <li>82/93 Boeind Street. NY</li>
                                <li>info@amid.mail.com</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <div className={'footer__bottom'}>
        <div className={'footer__follow container'}>
            <p>All Rights Reserved @Debzui2020</p>
            <div className={'footer__follow__social-media'}>
                <img src={twitter}/>
                <img src={facebook}/>
                <img src={instagram}/>
                <img src={linkedin}/>
                <img src={scape}/>
            </div>
        </div>
    </div>
</>
    );
}

export default Footer;