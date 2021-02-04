import React from 'react'
import Img from 'gatsby-image'
import theme from '../styles/theme'

import Card from './Card'

import {
    CenterFlex,
    ParaFlex,
    FlexWrapper,
    CustomText,
    CardText,
  } from './StyledComponents'

export default function FirstSection({titleText, descText, imgFluid, videoSrc, cardData}) {
    return(
      <div style={{position: 'relative'}}>
        <FlexWrapper style={{position: 'relative'}}>
          <ParaFlex style={{padding: '40px 5px 5px 30px', alignItems: 'flex-start', minWidth: "300px" }}  flex>
            <CustomText fsize={'5vh'} color={theme.color.blue} dangerouslySetInnerHTML={{ __html: titleText }}>
            </CustomText>
            <CustomText fsize={'3vh'} fweight={'200'} margin={'2rem 0'}>
              {descText}
            </CustomText>
          </ParaFlex>
          <CenterFlex flex={1}>
            {imgFluid && <Img style={{width: '100%', minWidth: '300px'}} fluid={imgFluid}/>}
            {videoSrc && <video style={{ width: "100%", height: "100%", objectFit: "cover", minWidth: '300px' }} preload="true" autoPlay muted loop playsInline>
              <source src={videoSrc} type="video/mp4" />
            </video>}
          </CenterFlex>
        </FlexWrapper>
        <FlexWrapper style={{ margin: cardData[0].spaced ? "0px" : null }}>
          {cardData.map(({info, id, fluid, color, title, subtitle, spaced, onClick, ...rest}, key) => 
            <CenterFlex onClick={onClick} color={color} key={key} {...rest} style={{ minWidth: "300px", overflow: "hidden", margin: spaced ? "10px" : null }}>
              {id ? <a href={`#${id}`}>
                <Card color={color} column={true} fluid={fluid} className="first-section-card">
                  <CardText color={'white'} fweight={'600'} fsize={'16px'}>{title}</CardText>
                  {subtitle && <CardText color={'white'} fweight={'400'} fsize={'14px'}>{subtitle}</CardText>}
                </Card>
              </a> : <Card color={color} column={true} fluid={fluid} className="first-section-card">
                <CardText color={'white'} fweight={'600'} fsize={'16px'}>{title}</CardText>
                {subtitle && <CardText color={'white'} fweight={'400'} fsize={'14px'}>{subtitle}</CardText>}
              </Card>}
            </CenterFlex>
          )}
        </FlexWrapper>
      </div>
    )
  }