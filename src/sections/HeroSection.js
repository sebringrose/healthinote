import React from 'react'
import styled from 'styled-components'

import theme from '../styles/theme'

import {
    CenterFlex,
    CustomText,
} from '../components/StyledComponents'

export default function HeroSection({ content }) {
    return (
        <CenterFlex justify="center" align="center" margin="2rem auto" maxWidth="1500px">
            <a href={content.linkedVideo} target="_blank">
                <HeroVideo preload="true" autoPlay muted loop playsInline>
                    <source src={content.video} type="video/mp4" />
                </HeroVideo>
            </a>
            <HeroText>
                <CustomText size={theme.font.xlarge} color={theme.color.blue} weight={600}>{content.heading}</CustomText>
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
    width: 86vw;
    box-sizing: border-box;
    max-width: 400px;
    margin: 10px 15px;
    object-fit: contain;
`

const HeroText = styled.div`
    flex: 1;
    padding: 10px 15px;
`

const HeroBadges = styled.div`
    align-self: flex-end;
    justify-content: space-between;
    width: 160px;
    padding: 10px 15px;
    background-color: white;
    text-align: center;
    border-radius: 0.5rem;
    /* box-shadow: 0px 0px 14px rgba(0,0,0,0.1); */
`

