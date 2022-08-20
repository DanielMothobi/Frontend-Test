

import React, { useState } from "react"  //useState Hook comes in React library
import card_white from './images/card_white.svg'
import card from './images/card.svg'

const Cardbtns = () =>{

    const [isActive, setIsActive] = useState(false);

    const handleClickCardbtn = () => {
        // toggle
        setIsActive(current => !current);

      };
   
    return(
 
        <div class="membership member-ship-btn">

            style={{
                backgroundColor: isActive ? '#373d40' : '',
                color: isActive ? 'white' : '',
            }}

                onClick={handleClickCardbtn}

                <img src={isActive ? card_white : card} />
		</div>

    )
}

export default Cardbtns