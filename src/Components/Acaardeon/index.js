import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faComment, faHeart ,faEllipsis } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './index.scss';

const Accardeon = () => {
  const  [show , setShow] = useState(false);
    const   showHandler = () =>{
    
    }   
     return (
        <div className='container'>
            <FontAwesomeIcon icon={faEllipsis} className='icon'/>
            <div className='active'>
                <FontAwesomeIcon icon={faBookmark}/>
                <FontAwesomeIcon icon={faHeart}/>
                <FontAwesomeIcon icon={faComment}/>
            </div>
        </div>
    );
};

export default Accardeon;
