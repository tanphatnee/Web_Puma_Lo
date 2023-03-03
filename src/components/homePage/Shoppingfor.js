import React from 'react';
import styled from 'styled-components'

function Shoppingfor() {

    const data = [
        {
            id: 1,
            img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/updated_gender_women_dt_tcm337-636701.jpg',
            text: 'Women'
        },
        {
            id: 2,
            img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/mens_1_tcm337-819364.png',
            text: 'Men'
        },
        {
            id: 3,
            img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/kids_1_tcm337-819367.png',
            text: 'Kids'
        }
    ]

  return(
        <Container>
            <TextContainer>
                WHO ARE YOU SHOPPING FOR?
            </TextContainer>
            <Content>
                {data.map((item) => (
                    <Wrapper key={item.id}>
                        <Img src={item.img} />
                        <TextItem>{item.text}</TextItem>
                    </Wrapper>
                ))}
            </Content>
            
        </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
`

const TextContainer = styled.h1`
    text-transform: uppercase;
    margin-bottom: 12px;
`

const Content = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    gap: 16px;
    @media (max-width:600px) {
        flex-direction: column;
    }
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    @media (max-width:600px) {
        width: 100%;
    }
`

const Img = styled.img`
    flex: 1;
    width: 33.33%;
    cursor: pointer;
`

const TextItem = styled.p`
    position: absolute;
    color: white;
    text-transform: uppercase;
    font-size: 24px;
`



export default Shoppingfor;
