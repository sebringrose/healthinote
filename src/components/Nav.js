import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../styles/theme'
import { useStaticQuery, graphql } from "gatsby";
import { useGlobalState } from '../hooks/useGlobalState'

const checkActive = (link) => {
    if (typeof window === "undefined") return null
    if (link === window.location.pathname) return true
    return false
}

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
        text: 'News',
        link: '/news'
    },
    {
        text: 'Get in touch',
        link: '/contact'
    }
];

export default function Nav() {
    const [navOpen, setNavOpen] = useGlobalState('NavOpen')
    const data = useStaticQuery(graphql`
        query {
            OpenMenu: file(relativePath: { eq: "open-menu.png" }) {
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
    return (
        <React.Fragment>
            <NavWrapper navOpen={navOpen}>
                <FlexWrapper>
                    <ImageWrapper>
                        <img src={require("../images/logo.svg")} alt="Cognitant" />
                    </ImageWrapper>
                    <LinkWrapper>
                        {links.map(({text,link}, key) => 
                            <Link to={link} onClick={() => setNavOpen(false)} key={key}>
                                <Links link={link}>{text}</Links>
                            </Link>
                        )}
                    </LinkWrapper>
                    <LinkWrapper>
                        <a href="mailto:hello@cognitant.com">
                            <Links orange>hello@cognitant.com</Links>
                        </a>
                    </LinkWrapper>
                </FlexWrapper>
            </NavWrapper>
            <ImgWrap onClick={() => setNavOpen(!navOpen)}>
                <Img fluid={navOpen ? data.cancel.childImageSharp.fluid : data.OpenMenu.childImageSharp.fluid}/>
            </ImgWrap>
            </React.Fragment>
        
    )
}
const ImgWrap = styled.div`
    width: 25px;
    position: fixed;
    margin: 15px;
    z-index: 2;
    ${theme.breakpoint('lg')`
        display: none;
    `}
`

const FlexWrapper = styled.div`
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

export const NavWrapper = styled.nav`
    @media screen and (min-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        padding: 12px;
    }
    @media screen and (max-width: 900px) {
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 1;
        transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        background-color: white;
        transform: ${({navOpen}) => navOpen ? 'translateX(0)' : 'translateX(-100%)' };
    }
`;

export const ImageWrapper = styled.div`
    width: 150px;
    /* margin: 20px auto; */
`;

export const Links = styled.div`
    color: ${({orange}) => orange ? theme.color.orange : theme.color.blue};
    font-size: 17px;
    font-weight: 500;
    margin: 10px;
    border-bottom: ${({ link }) => checkActive(link) ? `2px solid ${theme.color.orange}` : "none"};
`;

const LinkWrapper = styled.div`
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 50px;
    }
    display: flex;
    justify-content: center;
`