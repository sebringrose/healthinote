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
            healthinoteTagline: file(relativePath: { eq: "healthinote-tagline.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
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
        }
    `)

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
        {
            text: 'About',
            link: '/about'
        },
        {
            text: 'Contact',
            action: () => setModal(<>If you have any questions or suggestions for improvement of our service, feel free to contact us at <a onClick={() => { window.outboundLink("mailto:hello@healthinote.com"); return false }} href="mailto:hello@healthinote.com" style={navLinkStyle({ active: true, margin: false })}>hello@healthinote.com</a>.</>)
        }
    ]

    return (<>
        <NavWrapper navOpen={navOpen}>
            <FlexWrapper>
                <LinkWrapper>
                    {links.map(({text,link, action}, key) => action ? 
                        <span key={key} onClick={() => { window.gtag("event", `nav_${text}`); action() }} style={navLinkStyle({ active: false, margin: true })} role="button" tabIndex={0}>{text}</span>
                    : 
                        <Link key={key} onClick={() => { window.gtag("event", `internal_link_${text}`); setNavOpen(false) }} style={navLinkStyle({ active: checkActive(link), margin: true })} to={link}>{text}</Link>
                    )}
                </LinkWrapper>
                {!navOpen && <ImageWrapper>
                    <img style={{ width: "100%" }} src={healthinote} alt="Healthinote" />
                </ImageWrapper>}
                {!navOpen && <LinkWrapper>
                    Powered by&nbsp;<a onClick={() => { window.outboundLink("https://www.cognitant.com"); return false }} style={navLinkStyle({ active: true, margin: false })}  href="https://www.cognitant.com">Cognitant Group</a>
                </LinkWrapper>}
            </FlexWrapper>
        </NavWrapper>
        <MobileNav>
            <MobileNavButton onClick={() => { window.gtag("event", "nav_toggle_menu"); setNavOpen(!navOpen) }}>
                <Img fluid={navOpen ? images.cancel.childImageSharp.fluid : images.openMenu.childImageSharp.fluid}/>
            </MobileNavButton>
            <MobileNavLogo>
                <Img style={{ width: "180px", objectFit: "containt" }} fluid={images.healthinoteTagline.childImageSharp.fluid} navOpen={navOpen} />
            </MobileNavLogo>
        </MobileNav>
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
        padding: 15px 30px 0;
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
    margin-top: -15px;
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

const MobileNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: ${theme.color.blue};
    ${theme.breakpoint('lg')`
        display: none;
    `}
`

const MobileNavButton = styled.div`
    z-index: 2;
    padding: 1rem;
    background: ${theme.color.blue};
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin: 1rem;
    cursor: pointer;
`

const MobileNavLogo = styled.div`
    z-index: 2;
    padding: 0.2rem 0.8rem 0.2rem 0.5rem;
    background: ${theme.color.blue};
    border-radius: 0.5rem;
    margin: 1rem;
    cursor: pointer;
`