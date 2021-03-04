import React, {useState} from 'react'
import styled from 'styled-components'

import theme from '../styles/theme'

import {
    CenterFlex,
    FlexWrapper,
    CustomText,
} from '../components/StyledComponents'

export default function TabSection({ content }) {
    const [selectedTab, setSelectedTab] = useState(1)
    return (<>
        <CenterFlex column align="center" width="100%" maxWidth="2000px">
            <CustomText margin="2rem" size={theme.font.large} color={theme.color.blue} weight="600">{content.heading}</CustomText>
            <FlexWrapper justify="center" width="100%" maxWidth="1000px">
                {content.tabs.map((tab, i) => <Tab key={i} style={{ margin: i === 0 ? 0 : i === 2 ? 0 : "0 5px", borderTopLeftRadius: i === 0 ? "1rem" : 0, borderTopRightRadius: i === 2 ? "1rem" : 0 }} active={selectedTab === i} onClick={() => { window.gtag('event', `homepage_tab_${i}`); setSelectedTab(i) }}>{tab.title}</Tab>)}
            </FlexWrapper>
            {content.tabs.map((tab, i) => <TabContent key={i} active={selectedTab === i}>
                {tab.content}
            </TabContent>)}
        </CenterFlex>
    </>)
}

const Tab = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    max-width: 30vw;
    margin: 0 5px;
    box-sizing: border-box;
    padding: 1rem;
    cursor: pointer;
    text-align: center;
    font-weight: ${({active}) => active ? 600 : 400};
    color: ${({active}) => active ? theme.color.blue : 'white'};
    background: ${({active}) => active ? theme.color.backgroundBlue : theme.color.backgroundGradient};
    @media screen and (max-width: 400px) {
        font-size: ${theme.font.xsmall};
        margin: 0 3px;
    }
`

const TabContent = styled.div`
    width: 100%;
    display: ${({active}) => active ? "block" : "none"};
    background-color: ${theme.color.backgroundBlue};
`