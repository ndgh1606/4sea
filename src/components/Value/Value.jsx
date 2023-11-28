import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'
const Value = () => {
  
  return (
    <section className="v-warpper">
      <div className="paddings innerWidth flexCenter v-container">

        {/*left site */}

        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/*right site */}
        <div className="flexColStart v-right">
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Value We Give To You</span>
          <span className='secondaryText'>
            We always ready to help by providding the  best services for you.
            <br/>
            We beleive a good place to live can make your life better
          </span>

          <Accordion
          className='accodion'
          allowMultipleExpanded={false}
          preExpanded={[0]}>

            {data.map((item, i)=>
            {
              const [className, setClassName] = useState(null)
              return (
                <AccordionItem className={'accordionItem $ {className}'} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionbutton'>

                      <AccordionItemState>
                        {({ expanded }) => (expanded ? setClassName('expanded') : setClassName('collapsed'))}
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">
                        {item.heading}
                      </span>
                      <div className='flexCenter icon'>
                        <MdOutlineArrowDropDown size={20}/>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className='secondaryText'>{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              )       
            }
            )}

          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value