import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark , faHeart ,faComment } from '@fortawesome/free-solid-svg-icons';
import './CardA.scss';
import Arrow from '../Components/assets/svg/arrow.svg';

const CardA = () => {
    return (
        <div className='card-container'>
            <div className='card-page'>
              <div className='card-title'>
                <span>12 Aug 2016</span>
                <div className='card-icons'>
                        <FontAwesomeIcon icon={faBookmark} color="transparent" stroke='#fff'  stroke-width= "50" className='icon'/> 
                     
                        <FontAwesomeIcon icon={faHeart} color="transparent" stroke='#fff'  stroke-width= "50" className='icon'/>
                 
                        <FontAwesomeIcon icon={faComment} color="transparent" stroke='#fff'  stroke-width= "50" className='icon'/>
                </div>
              </div>
                <div  className='cardA-image'></div>
                <div className='cardA-content'>
                       <div className='content'>
                       <p>Jande Doe</p>
                        <h2>Stranger Things: The sound of the Upside Down</h2>
                       </div>
                    <div className='arrow'>
                        <h4>The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</h4>
                        <a href='' className='card'>Read more</a>
                        <img src={Arrow} className='cardA-arrow'  alt="Arrow"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardA;