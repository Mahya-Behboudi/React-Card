import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import './CardB.scss';

const CardB = () => {
    return (
        <div className='cardB-container'>
            <div className='CardB-page'>
                <div className='Card-date'>
                    <h1>12</h1>
                    <h6>Aug</h6>
                    <h5>2016</h5>
                </div>
             
                <div className='CardB-content'>
                    <div className='CardB-content-title'>
                        <p>Jane Doe</p>
                        <FontAwesomeIcon icon={faEllipsis} className='icon' />
                    </div>
                    <h2>
                    Boxing icon has the will for a couple more fights
                    </h2>
                    <div className='CardB-content-hide'>
                        <h4>
                        The highly anticipated world championship fight will take place at 10am and is the second
                        </h4>
                    </div>
                </div>
                <div className='CardB-image'></div>
            </div>
            
        </div>
    );
};

export default CardB;