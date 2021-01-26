import React from 'react'
import styled from 'styled-components'

export default function CardBordered({children, ...rest}) {
    return (
        <FlexWrapper {...rest} >
           {children}
        </FlexWrapper>
    )
}

const FlexWrapper = styled.div`
    display: flex;
    align-items: ${({HAlign}) => HAlign ? HAlign : 'center'};
    justify-content: ${({align}) => align ? align : 'center'};
    flex-direction: column;
    background-color: ${({bcolor}) => bcolor ? bcolor : 'white'};
    padding: ${({padding}) => padding ? padding : '20px'};
    margin: 20px ${({marginL}) => marginL ? marginL : '10px'};
    min-width: 200px;
    min-height: ${(minHeight => minHeight ? minHeight : "220px")};
    width: ${({width}) => width ? width : '17vw'};
    height: ${({height}) => height ? height : 'auto'};
    max-width: 600px;
    border-top: 2px solid ${({color}) => color ? color : 'white'};
    -webkit-box-shadow: -1px 8px 23px -9px rgba(0,0,0,0.15);
    -moz-box-shadow: -1px 8px 23px -9px rgba(0,0,0,0.15);
    box-shadow: -1px 8px 23px -9px rgba(0,0,0,0.15);
    @media screen and (max-width: 400px) {
        width: 250px;
    }
`