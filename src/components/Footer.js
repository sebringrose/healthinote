import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../styles/theme'

export default function Footer() {
    return (
        <FlexWrapper>
            <CustomText center color={'white'} style={{ fontSize: "1.5rem", marginBottom: 0 }}>Get in touch</CustomText>
            <a href="mailto:hello@cognitant.com">
                <CustomText center color={theme.color.orange} style={{ fontSize: "1.2rem" }}>hello@cognitant.com</CustomText>
            </a>
            <FlexWrapper row>
                <a target="_blank" rel="noreferrer" href="https://www.twitter.com/cognitant">
                    <div style={{width: '50px', margin: '10px'}}>
                        <img src={require("../images/twitter.svg")} alt="twitter"/>
                    </div>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/cognitant/">
                    <div style={{width: '50px', margin: '10px'}}>
                        <img src={require("../images/linkedin.svg")} alt="linkedin"/>
                    </div>
                </a>
            </FlexWrapper>
            <CustomText center color={theme.color.blue} style={{ margin: "10px" }}>© 2021 Cognitant | <Link to="/privacy" style={{ color: "unset", textDecoration: "none" }}>Privacy policy</Link> | Registered No. 11282547</CustomText>
        </FlexWrapper>
    )
}

const FlexWrapper = styled.div`
    display: flex;
    flex: 1;
    align-content: center;
    justify-content: center;
    flex-direction: ${({row}) => row ? 'row' : 'column'};
    background-color: #015173;
    flex-wrap: wrap;
`
const CustomText = styled.p`
    text-align: center;
    color: ${({color}) => color ? color : 'black'};
`
