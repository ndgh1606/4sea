import React from 'react'
import './Footer.css'
import {HiLocationMarker} from 'react-icons/hi'
const Footer = () => {
  return (
    <section className="f-warpper">
      <div className="paddings innerWidth flexCenter f-container">
        {/*left Side*/}
        <div className="flexColStart f-left">
          <img src='./logo.png' alt='' width={190}/>
          <span className='secondaryText'>
          Our vision is to make all people <br/>
          the best place to live for them.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className='primaryText'>Information</span>
          <span className='secondaryText'>Head Office : 732/14 Huynh Tan Phat Str., Phu Xuan Ward., Nha Be Dist., HCM City, VietNam</span>
          <span className='secondaryText'><HiLocationMarker color="var(--white)" size={20}/>Rep. Office : 272 Tran Hung Dao Str., Phu My Town, Ba Ria – Vung Tau, Vietnam</span>
          <span className='secondaryText'><HiLocationMarker color="var(--white)" size={20}/>Rep. Office : 2129/34 Huynh Tan Phat Str., Nha Be Town, Nha Be Dist., HCM City, Vietnam</span>
          <span className='secondaryText'><HiLocationMarker color="var(--white)" size={20}/>Hai Phong Branch: 317C Da Nang, Van My Ward, Ngo Quyen District, Hai Phong City, Vietnam</span>
          <div className="flexCenter f-menu">
            <span>Ship Repair</span>
            <span>Diving Services</span>
            <span>Cargo Lashing</span>
            <span>Marine Services</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer