import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../styles/theme';

export default function contact() {
    return (
        <Layout>
            <SEO title="Contact Us" />
            <div style={{paddingBottom: '400px'}}>
            <CustomText fsize={'32px'} color={theme.color.blue} style={{padding: '50px'}}>Want to find out more? We'd love to hear from you.</CustomText>
            <FlexWrapper style={{width: '40vw', minWidth: '250px'}}>
                <CustomText color={theme.color.orange} style={{marginRight: '20px'}} fsize={'24px'}>Email: </CustomText>
                <a href="mailto:hello@cognitant.com">
                    <CustomText color={theme.color.blue}  fsize={'24px'}>hello@cognitant.com</CustomText>
                </a>
            </FlexWrapper>
            </div>
        </Layout>
    )
}

const FlexWrapper = styled.div`
    display: flex;
    padding: 20px;
    margin-left: 50px;
    -webkit-box-shadow: 0px 6px 22px -1px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 6px 22px -1px rgba(0,0,0,0.4);
    box-shadow: 0px 6px 22px -1px rgba(0,0,0,0.4);
    flex-wrap: wrap;
    border-radius: 0.5rem;
`;  

const CustomText = styled.div`
    color: ${({color}) => color ? color : 'black'};
    font-size: ${({fsize}) => fsize ? fsize : '14px'};
    font-weight: ${({fweight}) => fweight ? fweight : '200'};
`