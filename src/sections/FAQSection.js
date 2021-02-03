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
            <CenterFlex justify="center" align="center" width="100%" maxWidth="800px" margin="2rem" padding="0 1rem">
                <CustomText id={content.heading} size={theme.font.large} color={theme.color.blue} weight={600} margin="0 0 1rem">{content.heading}</CustomText>
                {content.questions.map((question, index) => <FAQuestion question={question.q} answer={question.a} last={index===content.questions.length-1} key={index} />)}
            </CenterFlex>
        </CenterFlex>
    )
}
