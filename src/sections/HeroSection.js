import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import theme from '../styles/theme'

import {
    CenterFlex,
    CustomText,
} from '../components/StyledComponents'

export default function HeroSection({ content }) {
    return (
        <CenterFlex justify="center" align="center" margin="2rem 0" maxWidth="2000px">
            <HeroVideo preload="true" autoPlay muted loop playsInline>
                <source src={content.video} type="video/mp4" />
            </HeroVideo>
            <HeroText>
                <CustomText size={theme.font.xlarge} color={theme.color.lightBlue} weight={600}>{content.heading}</CustomText>
                <CustomText size={theme.font.large}>{content.subtitle}</CustomText>
                {content.description.map((line, i) => <CustomText key={i}>{line}</CustomText>)}
            </HeroText>
            <HeroBadges>
                {content.badge}
            </HeroBadges>
        </CenterFlex>
    )
}

const HeroVideo = styled.video`
    width: 100%;
    max-width: 400px;
    margin: 20px 30px;
    object-fit: contain;
`

const HeroText = styled.div`
    flex: 1;
    padding: 20px 30px;
`

const HeroBadges = styled.div`
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 180px;
    width: 100px;
    margin: 20px -0.5rem 30px 20px;
    padding: 1rem 1.25rem 1rem;
    background-color: white;
    text-align: center;
    border-radius: 0.5rem;
    /* box-shadow: 0px 0px 14px rgba(0,0,0,0.1); */
`

