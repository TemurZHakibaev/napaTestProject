import React from 'react';
import './BisnessSection.scss'
import {bisnesCcr, bisnesShop, bisnesKrug} from '../../../assets/image/index'
import {AiOutlineArrowRight} from 'react-icons/ai'

function BisnessSection(props) {
    return (
        <section>
            <div className={'container bisnes'}>
                <span className={'bisnes__text'}>services</span>
                <div className={'bisnes__titles d-flex'}>
                    <h1>Exactly Everything You <span className={'block'}>Need For Business</span></h1>
                    <p>We understand how desperatly you want to grow in <span className={'block'}>the business world & our motto is to help you with</span> practicale idea and plan </p>
                </div>
                <div className={'bisnes__cards d-flex'}>
                    <div className={'bisnes__card'}>
                        <div className={'bisnes__card-1'}>
                            <img src={bisnesShop}/>
                        </div>
                        <div className={'bisnes__card__text'}>
                            <h2>Business Growing Support</h2>
                            <p>Get every necessary support to grow as <span className={"block"}>business startup</span></p>
                        </div>
                        <div className={'bisnes__card--btns'}>
                            <button className={'bisnes__card--btn'}><p>Learn More</p> <span><AiOutlineArrowRight size={'16'}/></span></button>
                        </div>
                    </div>

                    <div className={'bisnes__card'}>
                        <div className={'bisnes__card-1'}>
                            <img  src={bisnesCcr}/>
                        </div>
                        <div className={'bisnes__card__text'}>
                            <h2>Business Growing Support</h2>
                            <p>Get every necessary support to grow as <span className={"block"}>business startup</span></p>
                        </div>
                        <div className={'bisnes__card--btns'}>
                            <button className={'bisnes__card--btn'}><p>Learn More</p> <span><AiOutlineArrowRight size={'16'}/></span></button>
                        </div>
                    </div>

                    <div className={'bisnes__card'}>
                        <div className={'bisnes__card-1'}>
                        <img src={bisnesKrug}/>
                        </div>
                        <div className={'bisnes__card__text'}>
                            <h2>Business Growing Support</h2>
                            <p>Get every necessary support to grow as <span className={"block"}>business startup</span></p>
                        </div>
                        <div className={'bisnes__card--btns'}>
                            <button className={'bisnes__card--btn'}><p>Learn More</p> <span><AiOutlineArrowRight size={'16'}/></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BisnessSection;