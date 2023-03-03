import React from 'react';
import styled from 'styled-components'
import {mobile} from '../../responsive'

function Footer() {
  return(
    <Container>
      <Wrapper>
        <ContentItem>
          <Title>
            Sản phẩm
          </Title>
            <ItemContainer>
            <Item>Giày</Item>
            <Item>Quần áo</Item>
            <Item>Phụ kiện</Item>
            <Item>Hàng mới về</Item>
            <Item>Áo</Item>
            <Item>Quần</Item>
            <Item>Áo thun có mũ trùm đầu</Item>
            <Item>Túi</Item>
            <Item>Giày Ultra Boost</Item>
            <Item>Giày Pureboost</Item>
          </ItemContainer>
        </ContentItem>
        <ContentItem>
          <Title>
            Thể thao
          </Title>
          <ItemContainer>
            <Item>Quần áo tập gym</Item>
            <Item>Áo ngực thể thao</Item>
            <Item>Quần tất nữ</Item>
            <Item>Quần soóc tập gym dành cho nam</Item>
            <Item>Giày bóng đá</Item>
            <Item>Giày bóng đá trong nhà</Item>
            <Item>Bóng đá</Item>
          </ItemContainer>
        </ContentItem>
        <ContentItem>
          <Title>Bộ sưu tập</Title>
          <ItemContainer>
            <Item>Giày adidas phrrell williams</Item>
            <Item>Giày supperstar</Item>
            <Item>Giày stan smith</Item>
            <Item>Giày gazelle</Item>
            <Item>Giày nmd</Item>
            <Item>EQT</Item>
            <Item>VRCT</Item>
          </ItemContainer>
        </ContentItem>
        <ContentItem>
          <Title>Thông tin về chúng tôi</Title>
          <ItemContainer>
            <Item>Gới thiệu về công ty chúng tôi</Item>
            <Item>Cơ hội nghề nghiệp</Item>
            <Item>Tin tức</Item>
          </ItemContainer>
        </ContentItem>
        <ContentItem>
          <Title>
            Hỗ trợ
          </Title>
          <ItemContainer>
            <Item>Trợ Giúp & Dịch Vụ Khách Hàng</Item>
            <Item>Công cụ tìm kiếm cửa hàng</Item>
            <Item>Biểu Đồ Kích Cỡ</Item>
            <Item>Thanh toán</Item>
            <Item>Giao hàng</Item>
            <Item>Trả Hàng & Hoàn Tiền</Item>
            <Item>khuyến mãi </Item>
            <Item>Sơ đồ trang web</Item>
          </ItemContainer>
        </ContentItem>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  ${mobile({
    justifyContent: 'flex-start',
  })}
`

const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  ${mobile({
    flexDirection: 'column',
  })}
`

const ContentItem = styled.div`
  padding: 12px;
  ${mobile({padding:8})};
`

const Title = styled.a`
  font-size: 24px;
  margin-bottom: 12px;
  ${mobile({
    fontSize: '16px',
  })}
`

const ItemContainer = styled.div`
  opacity: 0.7;
  ${mobile({
    display: 'none'
  })}
`

const Item = styled.a`
  display: block;
  cursor: pointer;
  &:hover { 
    text-decoration: underline;
  }
  padding: 4px 0;
`

export default Footer;
