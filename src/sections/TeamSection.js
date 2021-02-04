import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'

import {
    CenterFlex,
    CustomText,
} from '../components/StyledComponents'

export default function TeamSection({ content, setModal }) {
    return (
        <CenterFlex justify="center" align="center" maxWidth="1500px">
            <CenterFlex column justify="center" align="center" width="100%" maxWidth="1200px" margin="1rem" padding="0 1rem">
                <CustomText id={content.heading} size={theme.font.large} color={theme.color.blue} weight={600} margin="0 0 1rem">{content.heading}</CustomText>
                <CenterFlex>
                    {content.members && content.members.map(({image, name, color, position, links, more}, key) => <Member setModal={setModal} image={image} name={name} color={color} position={position} links={links} more={more} key={key} />)}
                </CenterFlex>
            </CenterFlex>
        </CenterFlex>
    )
}

const Member = ({setModal, image, name, color, position, links, more}) => <CardBordered team height={'30vh'} style={{maxWidth: '300px', marginTop: '95px' }} color={color} align={'flex-start'}>
    <img src={image} style={{ margin: '-95px 0 5px', width: '150px', minHeight: "150px" }} alt={name}/>
    <CardText size={theme.font.medium} weight='600'>{name}</CardText>
    <CardText size={theme.font.default}>{position}</CardText>
    <CenterFlex align='center'>
    {links.twitter && <a target="_blank" rel="noreferrer" href={links.twitter}>
        <div style={{width: '30px', margin: '10px'}}>
        <img src={require("../images/twitter.svg")} alt="twitter"/>
        </div>
    </a>}
    {links.linkedin && <a target="_blank" rel="noreferrer" href={links.linkedin}>
        <div style={{width: '30px', margin: '10px'}}>
        <img src={require("../images/linkedin.svg")} alt="linkedin"/>
        </div>
    </a>}
    </CenterFlex>
    {more && <CustomText 
        weight='600' 
        size={theme.font.default} 
        color={theme.color.orange}
        style={{ marginTop: "auto", cursor: "pointer" }}
        onClick={() => setModal(more)}
    >
        Read more
    </CustomText>}
</CardBordered>

const CardBordered = ({children, ...rest}) => <CardWrapper {...rest} >{children}</CardWrapper>
const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: 'white';
    padding: '20px';
    margin: 20px 10px;
    min-width: 200px;
    min-height: 240px;
    width: 17vw;
    max-width: 600px;
    border-top: 2px solid ${({color}) => color ? color : 'white'};
    -webkit-box-shadow: -1px 8px 23px -9px rgba(0,0,0,0.15);
    -moz-box-shadow: -1px 8px 23px -9px rgba(0,0,0,0.15);
    box-shadow: -1px 8px 23px -9px rgba(0,0,0,0.15);
    @media screen and (max-width: 400px) {
        width: 250px;
    }
`
const CardText = styled(CustomText)`
  padding: 10px 5px;
  margin: 0px;
  text-align: center;
`;