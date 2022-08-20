

import React, { useState } from "react"  //useState Hook comes in React library
import arrow from './images/arrow.svg'
import card_white from './images/card_white.svg'
import card from './images/card.svg'
import mars_symbol from './images/mars_symbol.svg'
import venus_symbol from './images/venus_symbol.svg'
import mars_symbol__white from './images/mars_symbol__white.svg'
import venus_symbol__white from './images/venus_symbol__white.svg'
import CircularBtnsVenus from './CircularBtnsVenus'
import Slider from "./Slider"


const Arrowbtn = () =>{

    const [isActive, setIsActive] = useState(false)

    const [show, setShow] = useState(false)

    const handleClick = () => {
        // toggle
        setIsActive(current => !current)
        
      };

    const sliderOnClick = () =>{
        setShow(prev => !prev)
    }
   
    return(
 
        <div className="arrow-btn" onClick={handleClick && sliderOnClick} style={
            {
                transform: isActive ? 'scaleX(-1)' : '',
                transition: '.4s',
            }}>
               
				<img src={arrow} alt="arrow svg icon here" />
                {show && <Slider />}
		</div>

    )
}

export default Arrowbtn