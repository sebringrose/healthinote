import styled from 'styled-components'

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: pink;
    flex-direction: ${({column}) => column ? 'column' : 'row'};
`
