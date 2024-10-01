import React from 'react'
import Icon1 from '../../images/pic1.png';
import Icon2 from '../../images/pic2.png';
import Icon3 from '../../images/pic3.jpg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    Servicescard,
    ServicesIcon,
    ServicesP,
    ServicesWrapper
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <Servicescard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
        </Servicescard>
        <Servicescard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
        </Servicescard>
        <Servicescard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>Unlock our special membership card that return 5% cash back.</ServicesP>
        </Servicescard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
