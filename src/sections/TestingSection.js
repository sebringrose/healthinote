import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'

import {
    CenterFlex,
    CustomText,
} from '../components/StyledComponents'

export default function TestingSection({ content }) {
    return (
        <CenterFlex justify="center" align="center" maxWidth="1500px" background={theme.color.backgroundBlue}>
            <CenterFlex justify="center" align="center" width="100%" maxWidth="800px" margin="1rem" padding="0 1rem">
                <CustomText id={content.heading.replace(" ", "-")} size={theme.font.large} color={theme.color.blue} weight={600} margin="0 0 1rem">{content.heading}</CustomText>
                <TestingText>{content.content}</TestingText>
            </CenterFlex>
        </CenterFlex>
    )
}

const TestingText = styled.div`
    padding: 0.5rem 0;
    font-size: ${theme.font.default};
    font-style: italic;
    a {
        color: ${theme.color.blue};
        font-weight: 600;
    }
    ul {
        list-style: none;
    }
    li {
        margin: 8px 0;
    }
    li:before {
        content: "•";
        color: ${theme.color.orange};
        font-size: ${theme.font.medium};
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }
`