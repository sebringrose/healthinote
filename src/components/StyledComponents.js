import styled from 'styled-components'
import theme from '../styles/theme'

export const CenterFlex = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  flex: ${({flex}) => flex ? 1 : 'none'};
  display: flex;
  justify-content: ${({justify}) => justify ? justify : 'center'};
  align-items: ${({align}) => align ? align : 'flex-start'};
  margin: ${({margin}) => margin ? margin : 'auto'};
  padding: ${({padding}) => padding ? padding : 'unset'};
  flex-direction: ${({column, reverse}) => column ? reverse ? 'column-reverse' : 'column' : reverse ? 'row-reverse' : 'row'};
  width: ${({width}) => width ? width : "unset"};
  max-width: ${({maxWidth}) => maxWidth ? maxWidth : "unset"};
  background-color: ${({background}) => background ? background : "unset"};
  flex-wrap: ${({wrap}) => wrap ? 'wrap' : "unset"};
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  } 
  @media screen and (max-width: 900px) {
    align-items: ${({mobileWrap}) => mobileWrap ? 'center' : 'auto'}
  } 
  @media screen and (min-width: 600px) {
    flex-wrap: ${({mobileWrap}) => mobileWrap ? 'nowrap' : 'wrap'};
  }
`;

export const ParaFlex = styled(CenterFlex)`
  flex: ${({flex}) => flex ? flex : '1'};
  flex-direction: ${({row}) => row ? 'row' : 'column'};
  align-items: center;
  justify-content: ${({fstart}) => fstart ? 'flex-start' : 'center' };
  background-color: ${theme.color.lightBlue};
`;

export const FlexWrapper = styled.div`
  flex: ${({flex}) => flex ? flex : '1'};
  display: flex;
  flex-wrap: ${({wrap}) => wrap};
  flex-direction: ${({column}) => column ? 'column' : 'row'};
  justify-content: ${({justify}) => justify ? justify : 'unset'};
  align-items: ${({align}) => align ? align : 'unset'};
  width: ${({width}) => width ? width : "unset"};
  height: ${({height}) => height ? height : "unset"};
  max-width: ${({maxWidth}) => maxWidth ? maxWidth : "unset"};
  max-height: ${({maxHeight}) => maxHeight ? maxHeight : "unset"};
  margin: ${({margin}) => margin ? margin : 'unset'};
  padding: ${({padding}) => padding ? padding : 'unset'};
`;

export const CustomText = styled.p`
  /* @media screen and (max-width: 900px) {
    padding: 10px 70px;
  }; */
  text-align: ${({align}) => align ? align : "unset"};
  font-size: ${({size}) => size ? size : theme.font.medium};
  margin: ${({margin}) => margin ? margin : '0px'};
  padding: 5px 0px;
  font-weight: ${({weight}) => weight ? weight : '300'};
  max-width: ${({maxWidth}) => maxWidth ? maxWidth : 'unset'};
  color: ${({color}) => color ? color : 'black'};
`;

export const CardText = styled(CustomText)`
  padding: 10px 5px;
  margin: 0px;
  text-align: center;
`;

export const Quote = styled.p`
  font-family: 'eb-garamond', serif;
  font-size: 18px;
  text-align: center;
`;

export const CustomBold = styled.b`
  font-family: 'eb-garamond', serif;
  font-weight: 700;
`;

export const OrangeButton = styled(CustomText)`
    background-color: ${theme.color.orange}; 
    border-radius: 30px;
    color: white; 
    text-align: center; 
    display: inline-block;
    padding: 10px 20px; 
    margin: 5px;
    max-width: 150px;
    font-weight: 500;
`;

export const CardWrap = styled.div`
    width: 35vw;
    min-width: 300px;
    background-color: white;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
`;

export const per = styled.div`
    display: flex;
    flex: 1;
    background-color: black;
    height: 300px;
`;

export const HorizontalRule = styled.hr`
    background-color: #f46e42;
    height: 2px;
    width: 200px;
    border: none;
`;

export const HorizontalScroller = styled(FlexWrapper)`
    max-width: 100%;
    flex-wrap: nowrap;
    overflow-x: scroll;
`