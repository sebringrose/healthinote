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
    const imgHeight = 80

    const scrollFcn = (e) => setScrollPosition(e.target.scrollLeft)
    const scrollClick = (direction) => {
        if (!partnersScroller.current) return
        switch(direction) {
            case "left": return partnersScroller.current.scrollLeft -=  imgHeight*3
            case "right": return partnersScroller.current.scrollLeft +=  imgHeight*3
            default: return
        }
    }

    useEffect(() => {
        if (partnersScroller.current) {
            partnersScroller.current.scrollX = 0
            partnersScroller.current.addEventListener('scroll', scrollFcn)
        }
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
        <FlexWrapper width="100%" margin="0.5rem auto" maxWidth="2000px" align="center">
            <OrangeButton disabled={scrollPosition < 50} onClick={() => { window.gtag("event", "partners_scroll_left"); scrollClick("left") }}><img src={chevron} style={{ width: "30px", transform: "rotate(180deg)" }} alt="chevron-left" /></OrangeButton>
            <Scroller ref={partnersScroller} flex margin="0 1rem" align="center">
                {partners.allFile.edges.map((partner, i) => <Img id={`partners-${i}`} key={i} style={{ margin: "20px", height: `${imgHeight}px`, scrollSnapAlign: "start", minWidth: `${imgHeight * partner.node.childImageSharp.fluid.aspectRatio}px` }} objectFit="contain" fluid={partner.node.childImageSharp.fluid} durationFadeIn={100} />)}
            </Scroller>
            <OrangeButton disabled={partnersScroller.current && scrollPosition > partnersScroller.current.scrollLeftMax - 50} onClick={() => { window.gtag("event", "right"); scrollClick("right") }}><img src={chevron} style={{ width: "30px" }} alt="chevron-right" /></OrangeButton>
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
    scroll-snap-type: mandatory;
    scroll-snap-points-x: repeat(200px);
    scroll-snap-destination: 0 0;

    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`