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
            <FlexWrapper justify="center" maxWidth="750px">
                {content.tabs.map((tab, i) => <Tab key={i} active={selectedTab === i} onClick={() => setSelectedTab(i)}>{tab.title}</Tab>)}
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
    max-width: 30%;
    margin: 0 5px;
    box-sizing: border-box;
    padding: 1rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    cursor: pointer;
    text-align: center;
    font-weight: ${({active}) => active ? 600 : 400};
    color: ${({active}) => active ? theme.color.blue : 'white'};
    background: ${({active}) => active ? theme.color.backgroundBlue : theme.color.backgroundGradient};
`

const TabContent = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: ${({active}) => active ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    background-color: ${theme.color.backgroundBlue};
`