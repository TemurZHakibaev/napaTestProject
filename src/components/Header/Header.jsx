import React from 'react';
import Nav from "./Nav";
import {play, circle, person, shop, money, statistic, trade} from '../../assets/image/index'

function Header(props) {
    return (
        <header>
            <Nav/>
            <div className="header-container">
                <div className={'header-container__left'}>
                    <span className={'container__left__text'}>it works!</span>
                    <div>
                        <h1 className={'container__left__title'}>Try Our Business <span className={'block'}>Ideas to grow</span> Rapidly</h1>
                        <p className={'container__left__subTitle'}>We understand how desperatly you want to grow in <span className={'block'}>the business world & our motto is to help you with</span> practicale idea and plan </p>
                    </div>
                    <div className={'container__left__btns'}>
                        <button className={'btn'}>Get Started</button>
                        <div className={'container__left__btns__inside'}>
                            <img src={play}/>
                            <p>DEMO VIDEO</p>
                        </div>
                    </div>
                </div>
                <div className={'header-container__right'}>
                    <div className={'container__right__circle-img'}><img src={circle}/></div>
                    <div className={'container__right__person-img'}><img src={person}/></div>
                    <din className={'container__right__person__vidjets'}>
                        <div><img src={shop}/><img src={trade}/></div>
                        <div><img src={money}/><img src={statistic}/></div>
                    </din>
                </div>
            </div>
        </header>
    );
}

export default Header;