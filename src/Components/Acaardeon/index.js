import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faComment, faHeart ,faEllipsis } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './index.scss';

const Accardeon = () => {
  const  [show , setShow] = useState(false);
    const   showHandler = () =>{
    setShow(show => !show)

    }   
     return (
        <div className='container'>
            <FontAwesomeIcon icon={faEllipsis} className='icon' onClick={showHandler}/>
            <div className={ show ? 'active':'dsplayN' }> 
                <FontAwesomeIcon icon={faBookmark}
            stroke-width= '50px' stroke='#fff'
                 className="active-icons"/>
                <FontAwesomeIcon icon={faHeart}
            stroke-width='50px' stroke='#fff'
                 className="active-icons"/>
                <FontAwesomeIcon icon={faComment}
            stroke-width='50px' stroke='#fff'
                 className="active-icons"/>
            </div>
        </div>
    );
};

export default Accardeon;
