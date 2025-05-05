import React from 'react'
import "./election-home.style.scss"
import { NavbarMobile } from "../../index"
import { VerifiedIcon, VoterIcon } from '../../../../assets'

const ElectionHomeComponent = () => {
  return (
    <div className='election_home_main_container'>
      <div className='ehmc_first_container'>
        <NavbarMobile page_name="Assam Election" navigation_path={-1} />
        <div className='election_content_container'>
          <div className='ecc_first_container'>
            <div className='efc_hello_container'><span className="efc_hello">Hello 👋,</span></div>
            <div className='efc_name'>Krishnan ranjan chaudhary kumar rai</div>
          </div>
          <div className='ecc_second_container'>
            <div className='esc_dropdown_container'>
              <div className='edc_label'>Outreach Dashboard</div>
              <select className='outreach_select_input'>
                <option>Outreach phase 1</option>
              </select>
            </div>
            <div className='esc_card_container'>
              <div className='esc_card FFEDE2'>
                <div className='ec_number F05F36'>123</div>
                <div className='card_for'>Total voters outreached</div>
              </div>

              <div className='esc_card E7FFEE'>
                <div className='ec_number green'><span>20</span> <img src={VerifiedIcon} alt='verified_icon'/></div>
                <div className='card_for'>OTP verified voters</div>
              </div>

              <div className='esc_card F8F8F8'>
                <div className='ec_number black'>23</div>
                <div className='card_for'>Total request to delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='ehmc_second_container'>
        <div className='esc_button'> <img src={VoterIcon} alt='voter_icon' /> <>View voter lists</></div>
      </div>
    </div>
  )
}

export default ElectionHomeComponent
