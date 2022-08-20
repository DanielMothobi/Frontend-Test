/*
    App is the wrapper container for all JSX elements
*/

import React from 'react'
import CountBtn from './CountBtn'

const App = () => {

    //JSX - JavaScriptXML: to allows us to create HTML elements in React
//npm - node package manager: packages babel - which helps interpret JSX into react code

	return(  //return the JSX

	<div>
        <CountBtn incrementBy={2}/>

        <CountBtn incrementBy={5}/>
    </div>

	)

}

export default App  //for this file to be available for reusability