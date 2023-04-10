import React from 'react';
import './BlogSection.scss'
import {block1, block2} from '../../../assets/image'
import {AiOutlineArrowRight} from 'react-icons/ai'

function BlogSetion(props) {
    return (
        <section>
            <div className={'container'}>
                <div className={'blog'}>
                    <span className={'blog__text1'}>blog</span>
                    <div className={'blog__text'}>
                        <h1 className={'blog__text__title'}>We Publish Blogs Every Week</h1>
                        <p className={'blog__text__subTitle'}>We understand how desperatly you want to grow in the business world & our motto <span className={'block'}>is to help you with practicale idea and plan</span> </p>
                    </div>
                    <div className={'blog__img'}>
                        <div className={'blog__img__left'}>
                        <p className={'blog__img__left__price'}>22<span className={'block'}>Dec</span></p>
                            <img src={block1}/>
                            <div className={'blog__img__left__text'}>
                                <h3>Upgrowing Economy Needs More  Startups</h3>
                                <p>We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan </p>
                            </div>
                            <div className={'blog__img__left__btn'}><span>Learn More</span><AiOutlineArrowRight/></div>
                        </div>
                        <div className={'blog__img__left'}>
                            <p className={'blog__img__left__price'}>22<span className={'block'}>Dec</span></p>
                            <img src={block2}/>
                            <div className={'blog__img__left__text'}>
                                <h3>Upgrowing Economy Needs More  Startups</h3>
                                <p>We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan </p>
                            </div>
                            <div className={'blog__img__left__btn'}><span>Learn More</span><AiOutlineArrowRight/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSetion;