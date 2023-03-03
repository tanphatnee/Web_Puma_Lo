import { useEffect } from 'react';
import styled from 'styled-components';
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { mobile } from '../../responsive';
import { actFetchShoesRequest } from '../../redux/Products/actions';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import WishListIcon from '../common/WishListIcon';

function Shoes() {

  // Slider
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchShoes = () =>dispatch(actFetchShoesRequest())
    fetchShoes()
  }, [dispatch])

  const data = useSelector((state) => state._todoProduct._shoes?.product)
  const loading = useSelector((state) => state._todoProduct.loading)
  const WishList = useSelector((state) => state._todoProduct.WishList)

  return(
    <Container>
      <TextContainer>
        MẶT HÀNG MỚI
      </TextContainer>
      {
        loading ?
        <Loading>
          <CircularProgress />
        </Loading>
        :
        <Wrapper>
          {data && (
            <Carousel 
              arrows={true}
              showDots={true}
              renderDotsOutside={renderButtonGroupOutside}
              responsive={responsive}>
                {data.map((item) => (
                  <div key={item._id}>
                    <Link to={`/product/${item._id}`}>
                      <Slide>
                        <Img src={item.imageUrl} />
                        <TextItem>
                          <Price> {Number(item.price).toLocaleString('en-US')}đ </Price>
                          <Title>{item.name}</Title>
                          <Des>{item.description}</Des>
                          <Status>{item.status}</Status>
                        </TextItem>
                      </Slide>
                    </Link>
                    <Icon>
                      <WishListIcon item={item} liked={WishList.filter(like => like._id === item._id).length > 0 ? true : false} />
                    </Icon>
                  </div>
                ))}
            </Carousel>
          )}
        </Wrapper>
      }
    </Container>
  )}


const renderButtonGroupOutside = styled.div`
  position: absolute;
  bottom: 0px;
`

const Container = styled.div`
  padding:  0 15px;
  position: relative;
  padding-bottom: 30px;
  ${mobile({padding:0})};
`

const TextContainer = styled.h1`
  padding: 0 20px 5px 5px;
`

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  
`

const Slide = styled.div`
  position: relative;
  margin: 0 10px;
  padding-bottom: 30px;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
      border: 1px solid black;
  }
  ${mobile({margin:0})};
  z-index: 1;
`

const Img = styled.img`
  width: 100%;
  max-height: 360px;
  ${mobile({
    maxHeight: '388px'
  })}
`

const Icon = styled.div`
  position: absolute;
  top: 4px;
  right: 16px;
  z-index: 100;
  cursor: pointer;
`

const TextItem = styled.div`
  padding: 0 10px;
`

const Price = styled.p`
  font-size: 20px;
`

const Title = styled.div`

`

const Des = styled.div`
  opacity: 0.8;
`

const Status = styled.div`

`

export default Shoes;
