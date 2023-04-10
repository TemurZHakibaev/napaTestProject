import React from 'react';
import {penguines, itel, krug, forbes, fedex, netflix, audiomack, meeting} from '../../../assets/image'
import './Sponsors.scss'
function SponsorsSection(props) {
    return (
        <section>
            <ul className={'container sponsors'}>
                <li><img src={netflix}/></li>
                <li><img src={forbes}/></li>
                <li><img src={itel}/></li>
                <li><img src={fedex}/></li>
                <li><img src={audiomack}/></li>
                <li><img src={penguines}/></li>
                <li><img src={krug}/></li>
                <li><img src={meeting}/></li>
            </ul>
        </section>
    );
}

export default SponsorsSection;