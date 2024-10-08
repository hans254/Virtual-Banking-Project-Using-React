import React, { useState } from 'react';
import Video from '../../videos/Video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer,
         HeroBg, 
         VideoBg, 
         HeroContent, 
         HeroH1, 
         HeroBtnWrapper, 
         ArrowForward, 
         HeroP, 
         ArrowRight 
        } from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const onHover =() =>{
    setHover(!hover)
  }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='Video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up a new account today and recieve $250 in credit towards your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup' 
                      onMouseEnter = {onHover} 
                      onMouseLeave = {onHover}
                      primary = 'true'
                      dark = 'true'
                      >
            Get Started {hover ? <ArrowForward /> : <ArrowRight /> }
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
