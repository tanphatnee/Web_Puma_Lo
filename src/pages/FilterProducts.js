import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { mobile } from '../responsive';
import { filterServices } from '../api/filterServices';
import { Box, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WishListIcon from '../components/common/WishListIcon';

const useStyles = makeStyles({
  loading: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

function Product() {

  const classes = useStyles();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const WishList = useSelector((state) => state._todoProduct.WishList)

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const goToProduct = (id) => {
    navigate(`/product/${id}`)
  }

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      try {
       const data = await filterServices(pathname)
        setProduct(data.data.product)
        setLoading(false);
      } catch (err) {
        console.error(err)
      } 
    }
    fetchProduct()
  },[pathname])

  if(loading) {
    return (
      <Box className={classes.loading}>
        <CircularProgress />
      </Box>
    )
  }

  const filterName = pathname.slice(1, pathname.length)

  return (
    <Container>
    <Wrapper>
      <Title>All Products for {filterName}</Title>
      <Content>
        {product?.map((item) => (
          <ProductContainer
            key={item._id}
            onClick={() => goToProduct(item._id)}
          >
            <Top>
              <ImageWrapper>
                <Image src={item.imageUrl} alt={item.name} />
              </ImageWrapper>
              <Price>{Number(item.price).toLocaleString('en-US')}đ</Price>
              <Icon
                onClick={(e) => {e.stopPropagation()}}
              >
                <WishListIcon item={item} liked={WishList.filter(like => like._id === item._id).length > 0 ? true : false} />
              </Icon>
            </Top>
            <Bottom>
              <Name>{item.name}</Name>
              <Description>{item.description}</Description>
              <Status>{item.status}</Status>
            </Bottom>
          </ProductContainer>
        ))}
      </Content>
    </Wrapper>
  </Container>
  )
}

 
const Container = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({
    marginTop: '117px',
  })}
`

const Wrapper = styled.div`
  max-width: 1280px;
`

const Title = styled.h1`
  text-align: center;
  margin: 8px;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25.00%);
  ${mobile({
    gridTemplateColumns: '50% 50%'
  })}
`

const ProductContainer = styled.div`
  border: 1px solid transparent;
  cursor: pointer;
  margin: 4px;
  padding: 4px;
  &:hover {
    border: 1px solid
  }
`

const Top = styled.div`
  position: relative;
`

const ImageWrapper = styled.div`

`

const Image = styled.img`
  width: 100%;
`

const Price = styled.div`
  position: absolute;
  bottom: 0;
  left: 4px;
  background-color: white;
  padding: 4px;
`

const Bottom = styled.div`
  padding: 8px;
`

const Icon = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
`

const Name = styled.div`

`

const Description = styled.div`

`

const Status = styled.div`

`


export default Product;