import React from 'react';
import styled from 'styled-components'
import {mobile} from '../../responsive'

function Popular() {
  return(
    <Container>
        <Title>
            Popular right now
        </Title>
        <MenuContainer>
            <MenuItems>
                Lego
            </MenuItems>
            <MenuItems>
                Disney
            </MenuItems>
            <MenuItems>
                Ultraboot 22
            </MenuItems>
            <MenuItems>
                Slides
            </MenuItems>
            <MenuItems>
                Manchester united
            </MenuItems>
        </MenuContainer>
    </Container>
)}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 100px;
    ${mobile({marginBottom:40})};
`

const Title = styled.h1`
    text-transform: uppercase;
    color: #7a7676;
    margin-bottom: 24px;
`

const MenuContainer = styled.div`
    display: flex;
    @media(min-width: 360px) {
        flex-wrap: wrap;
    }
`

const MenuItems = styled.div`
    color: #7a7676;
    text-transform: uppercase;
    padding: 8px;
    margin: 4px 4px;
    border: 1px solid #ccc;
    cursor: pointer;
    &:hover {
        border: 1px solid black;
    }
    
`

export default Popular;
