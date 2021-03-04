import React from 'react'
import styled from 'styled-components'

import theme from '../styles/theme'

import {
    CenterFlex,
    CustomText,
} from '../components/StyledComponents'

export default function AppSection({ content, reverse, background }) {
    return (
        <CenterFlex background={background} width="100%">
            <CenterFlex justify="center" align="center" maxWidth="800px" margin="1.6rem 0" padding="1rem" width="100%"  reverse={reverse}>
                <AppImg src={content.appImage} alt={content.appImage} />
                <AppText>
                    {content.heading && <CustomText size={theme.font.medium}>{content.heading}</CustomText>}
                    {content.subtitle && <CustomText size={theme.font.medium}>{content.subtitle}</CustomText>}
                    {content.list && content.list.heading && content.list.items && <>
                        <CustomText size={theme.font.medium} weight={600} margin="1rem 0 0" color={theme.color.blue}>{content.list.heading}</CustomText>
                        <AppList>
                            {content.list.items.map((li, i) => <AppListItem key={i}>{li}</AppListItem>)}
                        </AppList>
                    </>}
                    {content.text && content.text[0] && content.text.map((text, i) => <CustomText key={i} size={theme.font.default}>{text}</CustomText>)}
                    {content.download && <>
                        {content.download.text && <CustomText size={theme.font.default} weight={600} color={theme.color.orange} margin="1rem 0 0">{content.download.text}</CustomText>}
                        <CenterFlex justify="space-around">
                            {content.download.googleLink && <a onClick={() => { window.outboundLink(content.download.googleLink); return false }} href={content.download.googleLink}><img style={{ margin: "1rem", width: "200px" }} src={require("../images/google-play.png")} alt="google-play-store"/></a>}
                            {content.download.iosLink && <a onClick={() => { window.outboundLink(content.download.iosLink); return false }} href={content.download.iosLink}><img style={{ margin: "1rem", width: "200px"}} src={require("../images/app-store.png")} alt="apple-app-store"/></a>}
                        </CenterFlex>
                    </>}
                </AppText>
            </CenterFlex>
        </CenterFlex>
    )
}

const AppImg = styled.img`
    height: 400px;
    width: 250px;
    max-width: 30vw;
    max-width: 350px;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AppText = styled.div`
    flex: 1;
    padding: 1rem;
`

const AppList = styled.ul`
    list-style-type: none;
    list-style: none;
    padding: 0;
    margin-top: 0;
`

const AppListItem = styled.li`
    background-image: url(${require('../images/orangeTick.png')});
    background-repeat: no-repeat;
    background-size: 1.2rem;
    background-position: left;
    padding-left: 1.5rem;
    margin: 1rem 0 1rem 2rem;
    font-weight: 300;
    font-size: 1rem;
`