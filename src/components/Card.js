import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

export default function Card({children, fluid, card, ...rest}) {
    return (
        <FlexWrapper {...rest}>
            <div style={{ width: '50px' }} >
                <Img fluid={fluid}/>
            </div>
            {children}
        </FlexWrapper>
    )
}

const FlexWrapper = styled.div`
    transition: ease 0.25s;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: pink;
    padding: 20px;
    width: ${({width}) => width ? width : '250px'};
    min-width: 250px;
    background-color: ${({color}) => color ? color : 'white'};
    color: ${({textColor}) => textColor ? textColor : 'white'};
    flex-direction: ${({column}) => column ? 'column' : 'row'};

    &:hover {
        transform: scale(1.05);
    }
`

