import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {mobile} from '../../responsive';
import { getAllTrending } from '../../api/trendingServices';
import { CircularProgress } from '@material-ui/core';
 

function Trending() {
  // Slider
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1050, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const [listTrendingitem, setListTrendingItem] = useState()
  const [loading, setLoading] = useState(false);

  //fetch api
  useEffect(() => {
    setLoading(true);
    try {
      const fetchTrending = async () => {
        const res = await getAllTrending()
        setListTrendingItem(res.data.data)
        setLoading(false);
      }
      fetchTrending()
    } catch (error) {
      console.log(error)
    }
    return () => {setListTrendingItem()}
  },[])
    
  const navigate = useNavigate()

  const goToProducts = () => {
    navigate('/allproducts')
  }
    
  return(
    <>
      <Text>What's Hot ?</Text>
      <Container>
        {loading ?
          <Loading>
            <CircularProgress />
          </Loading>
          :
          <Wrapper>
            {listTrendingitem && (
              <Carousel 
                responsive={responsive}>
                  {listTrendingitem.map((item) => (
                    <Slide key={item._id} onClick={goToProducts}>
                      <Img src={item.imageUrl} />
                      <TextContainer>
                        <Title>{item.name}</Title>
                        <Des>{item.description}</Des>
                        <BuyButton>{item.buy}</BuyButton>
                      </TextContainer>
                    </Slide>
                  ))}
              </Carousel>
            )}
          </Wrapper>
        }
      </Container>
    </>
  )} 


const Text = styled.h1`
  padding: 10px 25px;
  text-transform: uppercase;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 15px;
  margin-bottom: 0;
  ${mobile({padding:0, marginBottom:20})};
`

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 100%;
  @media(min-width: 464px) {
      width: 100%
  }
`

const Slide = styled.div`

`

const Img = styled.img`
  width: 100%;
  padding: 10px;
  ${mobile({padding:0})};
`

const TextContainer = styled.div`
  min-height: 150px;
  position: relative;
  ${mobile({
    minHeight: '180px',
  })}
  @media (max-width: 600px) {
    min-height: 120px;
  }
`

const Title = styled.h1`
  font-size: 18px;
  margin: 0 8px 8px 8px;
  
`

const Des = styled.p`
  font-size: 16px;
  margin: 0 8px 8px 8px;
  opacity: 0.8;
`

const BuyButton = styled.a`
  margin: 0 8px 8px 8px;
  position: absolute;
  bottom: -10px;
  text-decoration: underline;
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover{
      background-color: black;
      color: white;
  }
  ${mobile({bottom:0})};
`
export default Trending;

