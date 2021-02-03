import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'

import {
    CenterFlex,
    CustomText,
} from '../components/StyledComponents'

export default function TestimonialSection({ content }) {
    return (
        <CenterFlex justify="center" align="center" maxWidth="1500px">
            <CenterFlex justify="center" align="center" width="100%" maxWidth="800px" margin="1rem" padding="0 1rem">
                <CustomText id={content.heading} size={theme.font.large} color={theme.color.blue} weight={600} margin="0 0 1rem">{content.heading}</CustomText>
                {content.testimonialSections && content.testimonialSections.map((testimonial, index) => <Testimonial key={index} title={testimonial.title} quotes={testimonial.quotes} />)}
            </CenterFlex>
        </CenterFlex>
    )
}

const Testimonial = ({ title, quotes }) => <TestimonialBlock>
    <CustomText size={theme.font.medium} color={theme.color.orange} weight={600}>{title}</CustomText>
    {quotes.map((quote, index) => <div key={index} style={{ margin: "0.5rem 0" }}>
        <Quote first={index===0}>{quote.quote}</Quote>
        {quote.from && <CustomText size={theme.font.default} weight={600}>{quote.from}</CustomText>}
    </div>)}
</TestimonialBlock>

const TestimonialBlock = styled.div`
    width: 100%;
    padding: 0.8rem 0.2rem;
    font-size: ${theme.font.default};
    a {
        color: ${theme.color.blue};
        font-weight: 600;
    }
`

const Quote = styled.div`
    padding: 0.5rem 0;
    border-top: ${({first}) => first ? null : "1px solid grey"};
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