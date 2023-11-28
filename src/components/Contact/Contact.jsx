import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className="c-warpper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left site */}
        <div className="flexColStart c-left">
          <span className='orangeText'>Our Contact</span>
          <span className='primaryText'>Easy to Contact</span>
          <span className='secondayText'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>
        
        <div className="flexColStart contactModes">
          {/*first row*/}
          <div className="flexStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <MdCall size={25}/>
                </div>
                <div className="flexColStart detail">
                  <span className='primaryText'>Call</span>
                  <span className='secondaryText'>(+84) 969 201 978</span>
                </div>
              </div>
              <div className='flexCenter button'>Call now</div>
            </div>

          {/*seconday mode*/} 
          <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <BsFillChatDotsFill size={25}/>
                </div>
                <div className="flexColStart detail">
                  <span className='primaryText'>Zalo</span>
                  <span className='secondaryText'> 021 123 456</span>
                </div>
              </div>
              <div className='flexCenter button'>Chat Now</div>
            </div>
          </div>
          {/*secondary row*/}
          <div className="flexStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <BsFillChatDotsFill size={25}/>
                </div>
                <div className="flexColStart detail">
                  <span className='primaryText'>Video Call</span>
                  <span className='secondaryText'> 021 123 456</span>
                </div>
              </div>
              <div className='flexCenter button'>Video now</div>
            </div>

          {/*seconday mode*/} 
          <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <HiChatBubbleBottomCenter size={25}/>
                </div>
                <div className="flexColStart detail">
                  <span className='primaryText'>FaceBook</span>
                  <span className='secondaryText'> 021 123 456</span>
                </div>
              </div>
              <div className='flexCenter button'>Text Now</div>
            </div>
          </div>
        </div>
        </div>
        <div className="c-right">
          <div className='image-container'>
            <img src='./contact.png' alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact