
import React, { useState } from "react"  //useState Hook comes in React library
import card_white from './images/card_white.svg'
import card from './images/card.svg'
import mars_symbol from './images/mars_symbol.svg'
import venus_symbol from './images/venus_symbol.svg'
import mars_symbol__white from './images/mars_symbol__white.svg'
import venus_symbol__white from './images/venus_symbol__white.svg'
import CircularBtns from './CircularBtns'
import CircularBtnsVenus from './CircularBtnsVenus'
import Cardbtns from './Cardbtns'

const Form = () => {

    // const inputsOnFocus = () =>{
    // }

    // ---------- normal html inputs --------------

    const [inputNameValue, setinputNameValue] = useState("")
    const [inputDOBValue, setinputDOBValue] = useState("")
    const [inputEmailValue, setinputEmailValue] = useState("")
    const [inputMobileValue, setinputMobileValue] = useState("")
    const [inputCustomerID, setinputCustomerIDValue] = useState("")

    // ----------- div inputs --------------


    // ----------- div inputs --------------

    const handleInputChange = (event) => {
        setinputNameValue(event.target.value)
    }

    const handleInputDobChange = (event) => {
        setinputDOBValue(event.target.value)
    }

    const handleInputEmailChange = (event) =>{
        setinputEmailValue(event.target.value)
    }

    const handleInputMobileChange = (event) =>{
        setinputMobileValue(event.target.value)
    }

    const handleInputIDChange = (event) =>{
        setinputCustomerIDValue(event.target.value)
    }

    const handleClearBtn = () =>{
        setinputNameValue("")
        setinputDOBValue("")
        setinputEmailValue("")
        setinputMobileValue("")
        setinputCustomerIDValue("")
    }

    return (    //return JSX

        <form action="" method="">
				
					<label>Name</label>
					<input type="text" value={inputNameValue} onChange={handleInputChange} name="" /><br/>

					<div class="gender-form-group">
					<label>Gender</label>

                    <CircularBtns />
					<p class="gender">Male</p>

					<CircularBtnsVenus />
					<p class="gender">Female</p>

					</div>
					<br />

					<label>Date of Birth</label>
					<input type="date" value={inputDOBValue} onChange={handleInputDobChange} name="" /><br/>

					<label>Email</label>
					<input type="email" value={inputEmailValue} onChange={handleInputEmailChange} name="" placeholder="example@chaperone.com" /><br/>

					<label>Mobile</label>
					<input type="tel" value={inputMobileValue} onChange={handleInputMobileChange} name="" /><br/>



					<label>Customer ID</label>
					<input type="tel" value={inputCustomerID} onChange={handleInputIDChange} name="" /><br/>


				    <div class="membership-form-group">
					<label>Membership</label>


					<div class="membership member-ship-btn">
						<img src={card} />
					</div>
					<p class="membership">Classic</p>

					<div class="membership member-ship-btn">
						<img src={card} />
					</div>
					<p class="membership">Silver</p>

					<div class="membership member-ship-btn">
						<img src={card} />
					</div>
					<p class="membership">Gold</p>

				</div>

				{/* <!-- buttons --> */}
				<br/><br/>
				<button class="custom-btn cancel-btn" onClick={handleClearBtn}>CANCEL</button>
				<input class="custom-btn submit-btn" type="submit" value="SAVE" name="" />

			</form>

    )

}

export default Form //