import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import theme from '../styles/theme'

import {
    CenterFlex,
    FlexWrapper,
    CustomText,
} from '../components/StyledComponents'

import chevron from '../images/chevron.png'

export default function PartnersSection({ content }) {
    const [scrollPosition, setScrollPosition] = useState(0)
    const partnersScroller = useRef()
    const scrollFcn = (e) => setScrollPosition(e.target.scrollLeft)
    const scrollClick = (direction) => {
        if (!partnersScroller.current) return
        switch(direction) {
            case "left": return partnersScroller.current.scrollLeft -=  200
            case "right": return partnersScroller.current.scrollLeft +=  200
        }
    }

    useEffect(() => {
        if (partnersScroller.current) {
            partnersScroller.current.scrollX = scrollPosition
            partnersScroller.current.addEventListener('scroll', scrollFcn)
        }
        return () => partnersScroller.current.removeEventListener('scroll', scrollFcn)
    }, [partnersScroller])

    const partners = useStaticQuery(graphql`
        query MyQuery {
            allFile(filter: {relativeDirectory: {eq: "partners"}}) {
                edges {
                    node {
                        id
                        childImageSharp {
                            fluid(maxWidth: 400) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    return (<>
        <CenterFlex justify="center" align="center" margin="3rem 0 0">
            <CustomText size={theme.font.large} color={theme.color.orange} weight={600}>{content.heading}</CustomText>
        </CenterFlex>
        <FlexWrapper width="100%" maxHeight="100px" maxWidth="2000px" align="center">
            <OrangeButton disabled={scrollPosition < 50} onClick={() => scrollClick("left")}><img src={chevron} style={{ width: "30px", transform: "rotate(180deg)" }}/></OrangeButton>
            <Scroller ref={partnersScroller} flex height="100px" margin="0 1rem" align="center">
                {partners.allFile.edges.map((partner, i) => <Img id={`partners-${i}`} key={i} style={{ margin: "10px", height: "100px", scrollSnapAlign: "start", minWidth: `${60 * partner.node.childImageSharp.fluid.aspectRatio}px` }} objectFit="contain" fluid={partner.node.childImageSharp.fluid} />)}
            </Scroller>
            <OrangeButton disabled={partnersScroller.current && scrollPosition > partnersScroller.current.scrollLeftMax - 50} onClick={() => scrollClick("right")}><img src={chevron} style={{ width: "30px" }} /></OrangeButton>
        </FlexWrapper>
    </>)
}

const OrangeButton = styled.button`
    font-size: ${theme.font.large};
    background-color: ${theme.color.orange};
    border: none;
    min-height: 40px;
    min-width: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({disabled}) => disabled ? 0.4 : 1}
`

const Scroller = styled(FlexWrapper)`
    overflow-x: scroll;
    scroll-behaviour: smooth;
    scroll-snap-type: x mandatory;

    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`