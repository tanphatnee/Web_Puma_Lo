import { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { AddCart, AddWishList } from '../redux/Products/actions';
import { mobile } from '../responsive';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector, useDispatch } from "react-redux";
import { getWishList } from '../redux/Products/actions';
import { getWishListServices } from '../api/wishListServices';
import { Box, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loading: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

function WishList() {

  const dispatch = useDispatch();

  const classes = useStyles()

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const userId = useSelector(state => state.user?.user?.userId) || '';
  const addCart = (productId, price) => dispatch(AddCart(productId, price, userId))
  
  const numberWishList = useSelector((state) => state._todoProduct.numberWishList)
  
  useEffect(() => {
    dispatch(getWishList(userId))
    setLoading(true)
    try {
      const fetchWishList = async () => {
        const res = await getWishListServices(userId)
        setData(res.data.data.wishLists)
        setLoading(false)
      }
      fetchWishList()
    } catch(err) {
      console.log(err)
    }
  },[dispatch, userId])

  const addWishList = (productId, item) => {
    const wishListRemaning = data.filter(item => item.productId._id !== productId)
    setData(wishListRemaning)
    dispatch(AddWishList(userId, productId, item))
  }

  if(loading) {
    return (
      <Box className={classes.loading}>
        <CircularProgress />
      </Box>
    )
  }
  
  return (
    <Container>
      <H1>MY WISHLISH</H1>
      <NumberItems>{numberWishList} items</NumberItems>
      <Wrapper>
        {data?.map((item, index) => (
            <ItemContainer key={index}>
              <Link to={`/product/${item.productId._id}`}>
                <Content>
                  <Image src={item.productId.imageUrl} alt={item.productId.name} />
                  <Price>{Number(item.productId.price).toLocaleString('en-US')}đ</Price>
                  <Name>{item.productId.name}</Name>
                </Content>
              </Link>
              <Cart onClick={() => {addCart(item.productId._id, item.productId.price)}}>
                Thêm vào giỏ hàng
              </Cart>
              <Icon>
                <FavoriteIcon className='icon' onClick={()=> addWishList(item.productId._id, item.productId)} />
              </Icon>
            </ItemContainer>
        ))}
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
  margin-top: 110px;
  ${mobile({
    marginTop: '152px',
  })}
`

const H1 = styled.h1`
  margin-left:
`

const NumberItems = styled.div`
  font-size: 24px;
  ${mobile({
    marginBottom: '8px',
  })}
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  `
  
  const ItemContainer = styled.div`
  position: relative;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover{
    border: 1px solid;
    border-radius: 4px;
  }
  ${mobile({
    border: '1px solid',
    borderRadius: '4px',
  })}
`

const Content = styled.div`
  width: 300px; 
  margin: 8px;
`
const Image = styled.img`
  width: 100%
`
const Price = styled.p`

`
const Name = styled.div`
  width: 100%;
  height: 50px;
`

const Icon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`

const Cart = styled.button`
  width: calc(100% - 16px);
  margin: 12px 8px;
  padding: 8px;
  border: 1px solid;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  &:hover{
    background-color: black;
    color: white;
  }
`

export default WishList;
