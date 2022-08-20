

import React, { useState } from "react"  //useState Hook comes in React library
import card_white from './images/card_white.svg'
import card from './images/card.svg'
import mars_symbol from './images/mars_symbol.svg'
import venus_symbol from './images/venus_symbol.svg'
import mars_symbol__white from './images/mars_symbol__white.svg'
import venus_symbol__white from './images/venus_symbol__white.svg'


const CircularBtnsVenus = () =>{

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        // toggle
        setIsActive(current => !current);

      };
   
    return(
 
        <div class="gender gender-btn"
        style={{
                backgroundColor: isActive ? '#373d40' : '',
                color: isActive ? 'white' : '',
            }}

                onClick={handleClick}
                     
        >
                        
				<img src={isActive ? venus_symbol__white : venus_symbol} />

		</div>

    )
}

export default CircularBtnsVenus