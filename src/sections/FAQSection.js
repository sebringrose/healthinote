import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'

import FAQuestion from '../components/FAQuestion'

import {
    CenterFlex,
    CustomText,
} from '../components/StyledComponents'

export default function FAQSection({ content }) {
    return (
        <CenterFlex justify="center" align="center" maxWidth="1500px" background={theme.color.backgroundBlue}>
            <CenterFlex justify="center" align="center" maxWidth="800px" margin="2rem">
                <CustomText size={theme.font.large} color={theme.color.blue} weight={600} margin="0 0 1rem">Frequently asked questions</CustomText>
                {content.questions.map((question, index) => <FAQuestion question={question.q} answer={question.a} key={index} />)}
            </CenterFlex>
        </CenterFlex>
    )
}
