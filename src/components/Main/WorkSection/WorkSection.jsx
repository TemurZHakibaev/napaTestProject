import React from 'react';
import './WorkSection.scss'
import {workImg1, workImg2} from "../../../assets/image";
import {AiOutlineArrowRight} from 'react-icons/ai'

function WorkSection(props) {
    return (
        <section className={'container'}>
            <span className={'bisnes__text'}>achievements</span>
            <div className={'work'}>
                <div className={'work__left'}>
                    <h2>We Worked With <span style={{color: '#FF823B'}}>100+</span> <span className={'block'}>Company Over <span style={{color: '#FF823B'}}>10</span> Years</span></h2>
                    <div className={'work__left__img'}>
                        <img className={'work__left__img__first'} src={workImg1}/>
                    </div>
                    <div className={'work__left__title'}>
                        <h2>JobHub Job Finding Website</h2>
                        <p>This website has become one of the best ux interface  for users <span className={'block'}>with an beautiful ui and also lucrative fot upcoming startups in</span> the sectors</p>
                        <button>View More Work <AiOutlineArrowRight/></button>
                    </div>
                </div>
                <div className={'work__right'}>
                    <div className={'work__right__cards'}>
                        <div className={'work__right__card'}>
                            <span>9k+</span>
                            <h4>Completed Full<span className={'block'}>Projects</span></h4>
                            <p>From 789+ Companies</p>
                        </div>
                        <div className={'work__right__card'}>
                            <span>924k+</span>
                            <h4>Satisfiingly Happy<span className={'block'}>Clients</span></h4>
                            <p>From 100+ Countries</p>
                        </div>
                        <div className={'work__right__card'}>
                            <span>416</span>
                            <h4>Expertised  Unit <span className={'block'}>Employees</span></h4>
                            <p>From 20+ Countries</p>
                        </div>
                        <div className={'work__right__card'}>
                            <span>3024</span>
                            <h4>Startups Case<span className={'block'}>Studies</span></h4>
                            <p>From 100+ Countries</p>
                        </div>
                    </div>
                    <img src={workImg2}/>
                    <div className={'work__right__text'}>
                        <h2>CENT - Payment App Landing Website</h2>
                        <p>This website has become one of the best ux interface
                            <span className={'block'}>for users with an beautiful ui and also lucrative fot</span>
                            upcoming startups in the sectors</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkSection;