import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { paginationServices } from '../api/pagination'
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Box, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
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

function AllProducts() {

  const classes = useStyles();

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1)

  const goToProduct = (id) => {
    navigate(`/product/${id}`)
  }

  const WishList = useSelector((state) => state._todoProduct.WishList)

  const handleChangePagination = (e, numberPage) => {
    setPage(numberPage)
  }

  useEffect(() => {
    setLoading(true);
    try{
      const fetchProducts = async () => {
        const res = await paginationServices(page, 8)
        setData(res.data)
        setLoading(false);
      }
      fetchProducts()
    }catch (err) {
      console.log(err);
    }
  }, [page])

  if(loading) {
    return (
      <Box className={classes.loading}>
        <CircularProgress />
      </Box>
    )
  }
  
  return (
    <Container>
      <Wrapper>
        <Title>All Products</Title>
        <Content>
          {data.product?.map((item) => (
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
      <PaginationWrapper>
        <Pagination
          onChange={handleChangePagination}
          page={page}
          count={data?.totalPages}
          color="primary"
        />
        </PaginationWrapper>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const PaginationWrapper = styled.div`
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default AllProducts