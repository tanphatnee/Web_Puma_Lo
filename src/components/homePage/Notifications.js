import React from 'react';
import styled from 'styled-components'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {mobile} from '../../responsive'

function Notifications() {
  return(
      <Container>
          <Wrapper>
            <TextContainer>
              ĐĂNG KÝ NHẬN THÔNG TIN CẬP NHẬT VÀ ƯU ĐÃI QUA EMAIL
            </TextContainer>
            <ButtonContainer>
              <Button>
                Đăng ký nhận bản tin
                <IconArrow />
              </Button>
            </ButtonContainer>
          </Wrapper>
      </Container>
  );
}

const Container = styled.div`
    background-color: #ede734;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
`

const Wrapper = styled.div`
    padding: 40px 0px;
    display: flex;
    ${mobile({
      flexDirection: 'column'
    })}
`

const TextContainer = styled.h2`
  margin-right: 20px;
  font-size: 30px;
  ${mobile({
    margin: '8px 20px',
    fontSize:24
  })};
`

const ButtonContainer = styled.div`
    margin-left: 20px;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    ${mobile({display:'flex',alignItems: 'center',justifyContent: 'space-between'})};
`

const Button = styled.button`
    margin-top: 4px;
    padding: 10px 12px;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    cursor: pointer;  
    background-color: black;
    color: white;
    border: none;
    &:hover {
        color: #ccc;
    }
`

const IconArrow = styled(ArrowRightAltIcon)`
    font-size: 32px !important;
    margin-left: 8px;
`

export default Notifications;
