import styled from 'styled-components'
import theme from '../styles/theme'

export const CenterFlex = styled.div`
  flex: ${({flex}) => flex ? 1 : 'none'};
  display: flex;
  justify-content: ${({VAlign}) => VAlign ? VAlign : 'center'};
  background-color: ${({color}) => color ? color : 'white'};
  flex-direction: ${({column}) => column ? 'column' : 'row'};
  
  ${theme.breakpoint("xl")`
    flex: ${({flex}) => flex};
    justify-content: ${({align}) => align ? align : 'none'};
  `}
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
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({column}) => column ? 'column' : 'row'};
  justify-content: ${({VAlign}) => VAlign ? VAlign : 'unset'};
  align-items: ${({HAlign}) => HAlign ? HAlign : 'unset'};
`;

export const CustomText = styled.p`
  /* @media screen and (max-width: 900px) {
    padding: 10px 70px;
  }; */
  font-size: ${({fsize}) => fsize ? fsize : '14px'};
  color: ${({color}) => color ? color : 'black'};
  margin: ${({margin}) => margin ? margin : '0px'};
  padding: 5px 0px;
  font-weight: ${({fweight}) => fweight ? fweight : '300'};
  max-width: ${({maxWidth}) => maxWidth ? maxWidth : 'unset'};
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

export const ImgWrapper = styled.div`
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