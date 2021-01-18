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
            <CustomText margin="2rem" size={theme.font.large} color={theme.color.lightBlue} weight="600">{content.heading}</CustomText>
            <Tabs>
                {content.tabs.map((tab, i) => <Tab key={i} active={selectedTab === i} onClick={() => setSelectedTab(i)}>{tab.title}</Tab>)}
            </Tabs>
            {content.tabs.map((tab, i) => <TabContent key={i} active={selectedTab === i}>
                {tab.content}
            </TabContent>)}
        </CenterFlex>
    </>)
}

const Tabs = styled(FlexWrapper)`
    max-width: 750px;
`

const Tab = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 0 5px;
    padding: 1rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    cursor: pointer;
    text-align: center;
    font-weight: ${({active}) => active ? 600 : 400};
    color: ${({active}) => active ? theme.color.orange : theme.color.blue};
    background-color: ${({active}) => active ? 'white' : theme.color.backgroundBlue};
`

const TabContent = styled.div`
    width: 100%;
    display: ${({active}) => active ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    background-color: white;
`