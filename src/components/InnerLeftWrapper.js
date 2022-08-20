
import React, { useState } from "react"  //useState Hook comes in React library
import face from './images/face.svg'
import arrow from './images/arrow.svg'
import Arrowbtn from "./Arrowbtn"

const InnerLeftWrapper = (props) => {

    const [currentCount, setCurrentCount] = useState(0) 

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    //components return JSX
    return (

        <div className='inner-left-container'>
            <div className="face-image">
				<center><img src={face} alt="face here" /></center>
			</div>

			<div className="profile-content">
				<h3>Front-end challenge!</h3>
				<p>This is a front-end design built in reactjs by tseliso mothobi. <a href="mailto:tselisomothobi@gmail.com">tselisomothobi@gmail.com</a></p>
			</div>

			<center>
			<div className="arrow-btn">
                <Arrowbtn />
				{/* <img src={arrow} alt="arrow svg icon here"/> */}
			</div>
			</center>
        </div>

    )

}

export default InnerLeftWrapper // for reusability in other components