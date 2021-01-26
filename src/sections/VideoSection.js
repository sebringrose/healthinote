import React from 'react'
import styled from 'styled-components'

import theme from '../styles/theme'

import {
    CenterFlex,
    CustomText,
} from '../components/StyledComponents'

export default function VideoSection({ content, reverse, background }) {
    return (
    <CenterFlex background={background} width="100%">
        <CenterFlex justify="center" align="center" margin="1.6rem 0" padding="1rem" width="100%" maxWidth="800px" reverse={reverse}>
            <Video preload="true" autoPlay muted loop playsInline>
                <source src={content.video} type="video/mp4" />
            </Video>
            <VideoText>
                {content.heading && <CustomText size={theme.font.large} color={theme.color.blue} weight={600}>{content.heading}</CustomText>}
                {content.subtitle && <CustomText size={theme.font.medium}>{content.subtitle}</CustomText>}
                {content.text.map((line, i) => <CustomText key={i} size={theme.font.default}>{line}</CustomText>)}
            </VideoText>
        </CenterFlex>
    </CenterFlex>
    )
}

const Video = styled.video`
    width: 100%;
    max-width: 350px;
    object-fit: contain;
`

const VideoText = styled.div`
    flex: 1;
    padding: 20px 30px;
`