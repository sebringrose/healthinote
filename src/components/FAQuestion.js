import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'

import { CustomText } from '../components/StyledComponents'

export default function FAQuestion({ question, answer, last }) {
  const [expanded, setExpanded] = useState(false)

    return (
        <QuestionBlock last={last}>
            <Question style={{ cursor: "pointer" }} onClick={() => setExpanded(!expanded)}>
                <div style={{ flex: 1 }}>
                    <CustomText size={theme.font.medium} color={theme.color.orange} weight={600}>{question}</CustomText>
                </div>
                <img src={require('../images/chevron_orange.png')} style={{ height: "36px", marginLeft: "1rem", transform: `rotate(${expanded ? "180" : 0}deg)` }} alt="chevron" />
            </Question>
            <Answer expanded={expanded}>{answer}</Answer>
        </QuestionBlock>
    )
}

const QuestionBlock = styled.div`
    width: 100%;
    padding: 0.8rem 0.2rem;
    border-bottom: ${({last}) => !last ? "1px solid grey" : null};
`

const Question = styled.div`
    display: flex;
    align-items: center;
`

const Answer = styled.div`
    font-size: ${theme.font.default};
    display: ${({expanded}) => expanded? "block" : "none"};
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