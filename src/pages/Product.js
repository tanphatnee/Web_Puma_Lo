import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { AddCart, AddWishList } from '../redux/Products/actions';
import { mobile } from '../responsive';
import { getProduct } from '../api/productServices';
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

  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const addCart = (_id, price, userId) => {
    dispatch(AddCart(_id, price, userId))
  }

  const addWishList = (item) => {
    dispatch(AddWishList(item))
  }

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id)
        setProduct(data.data.product)
        setLoading(false);
      } catch(err) {
        console.log(err.message)
      } 
    }
    fetchProduct()
  },[id])

  const userId = useSelector(state => state.user.user.userId);
  const WishList = useSelector((state) => state._todoProduct.WishList)

  if(loading) {
    return (
      <Box className={classes.loading}>
        <CircularProgress />
      </Box>
    )
  }

  const { _id, price} = product

  return (
    <Container>
      <Left>
        <Image src={product.imageUrl} />
      </Left>
      <Right>
        <Description>
          <Title>{product.name}</Title>
          <Price>{Number(product.price).toLocaleString('en-US')}đ</Price>
        </Description>
        <BuySection>
          <Size>

          </Size>
          <AddWrapper>
            <AddCard onClick={()=> addCart(_id, price, userId)}>
              Thêm vào giỏ hàng
            </AddCard>
            <AddWishListWrapper>
              {/* <FavoriteBorderIcon className='icon' onClick={()=> addWishList(product)} style={{ fontSize:'32px'}} /> */}
              <WishListIcon item={product} liked={WishList.filter(like => like._id === product._id).length > 0 ? true : false} />
            </AddWishListWrapper>
          </AddWrapper>
        </BuySection>
      </Right>
    </Container>
  )
}

 
const Container = styled.div`
  display: flex;
  margin-top: 110px;
  ${mobile({
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '152px',
  })}
`
const Left = styled.div`
  display: flex;
  justify-content: center;
  flex: 60%;
  padding: 20px;
  ${mobile({
    maxWidth: '550px',
  })}
`
const Image = styled.img`
  width: 60%;
  border: 1px solid;
  border-radius: 4px;
  ${mobile({
    width: '100%',
  })}
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 30%;
  padding: 20px;
  margin-right: 80px;
  ${mobile({
    marginRight: '0 !important',
  })}
`
const Description = styled.div`
  width: 100%;
`
const Title = styled.h1`
  margin-bottom: 12px;
`
const Price = styled.p`
  font-size: 24px;
  margin-bottom: 12px;
`
const BuySection = styled.div`

`
const Size = styled.div`

`
const AddWrapper = styled.div`
  display: flex;
`
const AddCard = styled.button`
  width: 90%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`
const AddWishListWrapper = styled.div`
  margin: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
  &:hover{
    background-color: pink;
  }
` 

export default Product;