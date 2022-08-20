

import React, { useState } from "react"  //useState Hook comes in React library
import Form from './Form'
import Slider from'./Slider'
import './styles/Slider.css'

const InnerRightWrapper = (props) => {

    const [currentCount, setCurrentCount] = useState(0) 

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    //components return JSX
    return (

        <div className="inner-right-container">
        
        <Form />

        </div>

    )

}

export default InnerRightWrapper // for reusability in other components