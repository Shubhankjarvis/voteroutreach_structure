import React, { useState } from 'react'
import "./request-to-delete.style.scss"
import { NavbarMobile } from "../../index"

const RequestToDelete = () => {
  const [showSecondStep, setShowSecondStep] = useState(false);
  const [voterId, setVoterId] = useState("");

  const isButtonEnable = voterId.length === 13 || voterId.length === 16;

  const handleInputChange = (e) => {
    setVoterId(e.target.value);
  }

  const handleButtonClick = () => {
    if (showSecondStep) {
      console.log("form submit")
    } else {
      setShowSecondStep(true)
    }
  }

  const deleteReasons = [
    { name: "Dead", value: "dead" },
    { name: "Under Age", value: "under age" },
    { name: "Absent/permanently Shifted", value: "absent" },
    { name: "Already Enrolled", value: "already enrolled" },
    { name: "Not an Indian Citizen", value: "not an indian citizen" }
  ]

  return (
    <div className='request_to_delete_container'>
      <NavbarMobile page_name="Request to Delete" navigation_path="voter-list" />
      <div className='rtdc_body'>
        {
          !showSecondStep ?
            <div className='first_step_container'>
              <div className='fsc_text_one'>Please enter your valid Voter ID number</div>
              <div className='fsc_text_two'>(Example: XYZ9876543 or WB/12/123/987654)</div>
              <input type='text' placeholder='Enter Voter ID No.' className='voter_id_input' value={voterId} onChange={handleInputChange} />
            </div>
            :
            <div className='second_step_container'>
              <div className='ssc_text'>Reason for Objection / Deletion</div>
              <div className='ssc_option_container'>
                {
                  deleteReasons.map((reason, index) => (
                    <label htmlFor={`delete_option-${index}`} className='delete_label'>
                      <div className='spc_option'>
                        <div className='margin_div'></div>
                        <input type='radio' id={`delete_option-${index}`} name="delete_option" />
                        <span className='spc_option_text'>{reason?.name}</span>
                      </div>
                    </label>
                  ))
                }

              </div>
            </div>

        }

        <div className='rtdc_button_container'>
          <button className={!isButtonEnable ? 'rtdc_button_disable' : 'rtdc_button'} disabled={!isButtonEnable} onClick={handleButtonClick}> {showSecondStep ? "Submit" : "Proceed"}</button>
        </div>

      </div>

    </div>
  )
}

export default RequestToDelete
''