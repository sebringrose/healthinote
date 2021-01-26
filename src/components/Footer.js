import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'

export default function Footer() {
    return (
        <FlexWrapper>
            <LinkWrapper>
                Contact us for more information at&nbsp;<a href="mailto:hello@healthinote.com">hello@healthinote.com</a>
            </LinkWrapper>
            <FlexWrapper row>
                <a target="_blank" rel="noreferrer" href="https://www.twitter.com/cognitant">
                    <div style={{width: '55px', margin: '0 15px'}}>
                        <img style={{ width: "100%" }} src={require("../images/twitter.svg")} alt="twitter"/>
                    </div>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/cognitant/">
                    <div style={{width: '55px', margin: '0 15px'}}>
                        <img style={{ width: "100%" }} src={require("../images/linkedin.svg")} alt="linkedin"/>
                    </div>
                </a>
            </FlexWrapper>
            <CustomText center color={'white'} style={{ margin: "20px" }}>© 2021 Cognitant. Registered No. 11282547 <a href="https://cognitant.com/privacy" style={{ color: "white", textDecoration: "underline", fontWeight: 400 }}>Privacy policy</a></CustomText>
        </FlexWrapper>
    )
}

const FlexWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${({row}) => row ? 'row' : 'column'};
    background-color: ${theme.color.darkBlue};
    padding: 20px;
`

const LinkWrapper = styled.div`
    margin: 10px;
    max-width: 400px;
    text-align: center;
    font-size: ${theme.font.large};
    color: white;
    a {
        font-weight: 600;
        text-decoration: none;
        color: ${theme.color.orange};
    }
    @media screen and (max-width: 400px) {
        font-size: ${theme.font.medium};
    }
`

const CustomText = styled.p`
    text-align: center;
    font-size: ${theme.font.small};
    color: ${({color}) => color ? color : 'black'};
`
