import React from 'react'
import styled from 'styled-components'

import theme from '../styles/theme'

import {
    CenterFlex,
    CustomText,
} from '../components/StyledComponents'

export default function MacSection({ content, reverse, background }) {
    return (
        <CenterFlex background={background} width="100%">
            <CenterFlex justify="center" align="center" maxWidth="800px" margin="1.6rem 1rem" padding="1rem" width="100%"  reverse={reverse}>
                <AppFrame>
                    <AppView>
                        <AppImage src={content.appImage} alt={content.appImage} />
                    </AppView>
                </AppFrame>
                <AppText>
                    <CustomText size={theme.font.default}>{content.heading}</CustomText>
                    {content.text && content.text[0] && content.text.map((text, i) => <CustomText key={i} size={theme.font.small}>{text}</CustomText>)}
                </AppText>
            </CenterFlex>
        </CenterFlex>
    )
}

const AppFrame = styled.div`
    height: 79.2vw;
    width: 90vw;
    max-height: 352px;
    max-width: 400px;
    background-image: url(${require('../images/iMac.png')});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 2rem;
`

const AppView = styled.div`
    width: 90%;
    height: 55%;
    position: absolute;
    top: 8%;
    left: 5%;
    overflow: scroll;
`

const AppImage = styled.img`
    width: 100%;
`

const AppText = styled.div`
    margin: 1rem;
    padding: 1rem;
    flex: 1;
`