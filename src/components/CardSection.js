import React from 'react'
import styled from 'styled-components'
import CardBordered from './CardBordered'

export default function CardSection({ id, title, subtitle ,children, color, cards, quotes }) {
    return (
        <React.Fragment>
            <FlexWrapper id={id}>
                <CustomText fsize={'32px'} fweight={'500'} color={color}>{title}</CustomText>
                <CustomText>{subtitle}</CustomText>
                <FlexWrapper row style={{flexWrap: 'wrap', maxWidth: "1000px"}}>
                {quotes && quotes.map((unit, key) =>
                    <FlexWrapper key={key} style={{flex: '1', minWidth: "300px"}}>
                        <CustomText style={{display: 'inline-block',textAlign: 'center', fontSize: '24px'}}><q style={{ fontFamily: 'eb-garamond, serif' }}>{unit.quote}</q></CustomText>
                        {unit.author && <CustomText style={{display: 'inline-block'}}>{unit.author}</CustomText>}
                    </FlexWrapper> 
                )}
                </FlexWrapper>
                <CustomText fsize={'26px'} fweight={'600'} color={color}>Did you know?</CustomText>
                <FlexWrapper row>
                    {cards.map((text, key) => <CardBordered height={'30vh'} style={{maxWidth: '300px'}} color={color} key={key} align={'flex-start'}>
                        {text}
                    </CardBordered>)}
                </FlexWrapper>
            </FlexWrapper>
            {children}
        </React.Fragment>
    )
}

const FlexWrapper = styled.div`
    /* padding: 30px 0px; */
    display: flex;
    flex-direction: ${({row}) => row ? 'row' : 'column'};
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
`
const CustomText = styled.div`
    padding: 10px 10px;
    margin: 0;
    color: ${({color}) => color ? color : 'black'};
    font-size: ${({fsize}) => fsize ? fsize : '20px'};
    font-weight: ${({fweight}) => fweight ? fweight : 'normal'};
`