/*
    Parent is the wrapper container for all JSX elements
*/

import React from 'react'
import InnerLeftWrapper from './InnerLeftWrapper'
import InnerRightWrapper from './InnerRightWrapper'
import './styles/Style.css'

const Parent = () => {

    //JSX - JavaScriptXML: to allows us to create HTML elements in React
//npm - node package manager: packages babel - which helps interpret JSX into react code

	return(  //return the JSX

	<div className='parent-div'>

    <InnerLeftWrapper />
    <InnerRightWrapper />

    </div>

	)

}

export default Parent  //for this file to be available for reusability