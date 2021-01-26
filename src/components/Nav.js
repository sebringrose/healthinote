import React, { useState } from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../styles/theme'
import { useStaticQuery, graphql } from "gatsby"

import healthinote from '../images/healthinote.png'

export default function Nav ({ setModal }) {
    const [navOpen, setNavOpen] = useState(false)

    const images = useStaticQuery(graphql`
        query {
            openMenu: file(relativePath: { eq: "open-menu.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            cancel: file(relativePath: { eq: "cancel.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
    }`)

    const checkActive = (link) => {
        if (typeof window === "undefined") return null
        if (link === window.location.pathname) return true
        return false
    }
    
    const navLinkStyle = ({ active, margin }) => ({ 
        color: active ? theme.color.orange : 'white',
        fontWeight: active ? 600 : 400,
        textDecoration: "none",
        margin: margin ? "0 10px" : 0,
        cursor: "pointer"
    })
    
    const links = [
        {
            text: 'Home',
            link: '/'
        },
        // {
        //     text: 'About',
        //     link: '/about'
        // },
        {
            text: 'Contact',
            action: () => setModal(<>If you have any questions or suggestions for improvement of our service, feel free to contact us at <Link to="mailto:hello@healthinote.com" style={navLinkStyle({ active: true, margin: false })}>hello@healthinote.com</Link>.</>)
        }
    ]

    return (<>
        <NavWrapper navOpen={navOpen}>
            <FlexWrapper>
                <ImageWrapper>
                    <img style={{ width: "100%" }} src={healthinote} alt="Healthinote" />
                </ImageWrapper>
                <LinkWrapper>
                    {links.map(({text,link, action}, key) => action ? <span key={key} style={navLinkStyle({ active: false, margin: true })} onClick={action}>{text}</span> : <Link to={link} style={navLinkStyle({ active: checkActive(link), margin: true })} onClick={() => setNavOpen(false)} key={key}>{text}</Link>)}
                </LinkWrapper>
                <LinkWrapper>
                    Powered by&nbsp;<Link style={navLinkStyle({ active: true, margin: false })} to="https://www.cognitant.com">Cognitant Group</Link>
                </LinkWrapper>
            </FlexWrapper>
        </NavWrapper>
        <ImgWrap onClick={() => setNavOpen(!navOpen)}>
            <Img fluid={navOpen ? images.cancel.childImageSharp.fluid : images.openMenu.childImageSharp.fluid}/>
        </ImgWrap>
    </>)
}

const NavWrapper = styled.nav`
    @media screen and (min-width: 900px) {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        padding: 30px;
        background-color: ${theme.color.blue};
    }
    @media screen and (max-width: 900px) {
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 1;
        transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        transform: ${({navOpen}) => navOpen ? 'translateX(0)' : 'translateX(-100%)' };
        background-color: ${theme.color.blue};
    }
`

const FlexWrapper = styled.div`
    max-width: 1000px;
    @media screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
    }
    @media screen and (min-width: 900px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 100%;
    }
`

const ImageWrapper = styled.div`
    width: 261px;
`

const LinkWrapper = styled.div`
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 50px;
    }
    color: white;
    display: flex;
    justify-content: center;
    font-size: ${theme.font.medium};
`

const ImgWrap = styled.div`
    align-self: flex-start;
    width: 25px;
    position: fixed;
    margin: 15px;
    z-index: 2;
    background: ${theme.color.blue};
    border-radius: 50%;
    padding: 1rem;
    ${theme.breakpoint('lg')`
        display: none;
    `}
`