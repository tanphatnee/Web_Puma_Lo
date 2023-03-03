// import { useEffect } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import {mobile} from '../../responsive';
// import { actFetchClothesRequest } from '../../redux/Products/actions';
// import { useSelector, useDispatch } from 'react-redux';
// import { CircularProgress } from '@material-ui/core';
// import WishListIcon from '../common/WishListIcon';

// function Interested() {
//   //Slider
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       slidesToSlide: 2 // optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2 // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1 // optional, default to 1.
//     }
//   };

//   const ButtonGroup = ({ next, previous}) => {
//   return (
//     <> 
//       <ButtonOne  onClick={() => previous()}>
//         <IconItems>
//           <NavigateBeforeIcon style={{fontSize: 32}} />
//         </IconItems>
//       </ButtonOne>
//       <ButtonTwo onClick={() => next()}>
//         <IconItems>
//           <NavigateNextIcon style={{fontSize: 32}} />
//         </IconItems>
//       </ButtonTwo>
//     </>
//   );
//   };

//   const dispatch = useDispatch()

//   const data = useSelector((state) => state._todoProduct._clothes.product)
//   const loading = useSelector((state) => state._todoProduct.loading)
//   const WishList = useSelector((state) => state._todoProduct.WishList)

//   useEffect(() => {
//     dispatch(actFetchClothesRequest())
//   }, [dispatch])


//   return(
//     <Container>
//       <InterestedContainer>
//         <InterestedText>
//       Mẫu Sản Phẩm 
//         </InterestedText>
//       </InterestedContainer>
//       {loading ? 
//         <Loading>
//           <CircularProgress />
//         </Loading>
//        : 
//         <Wrapper>
//           {data && (
//             <Carousel 
//               arrows={false}
//               renderButtonGroupOutside={true}
//               customButtonGroup={<ButtonGroup />}
//               responsive={responsive}>
//                 {data?.map((item) => (
//                   <div key={item._id}>
//                     <Link to={`/product/${item._id}`}>
//                       <Slide>
//                         <Image src={item.imageUrl} />
//                         <Price> {Number(item.price).toLocaleString('en-US')}đ </Price>
//                         <Title> {item.name} </Title>
//                         <Des> {item.description} </Des>
//                       </Slide>
//                     </Link>
//                     <Icon>
//                       <WishListIcon item={item} liked={WishList.filter(like => like._id === item._id).length > 0 ? true : false} />
//                     </Icon>
//                   </div>
//                 ))}
//             </Carousel> 
//           )}
//         </Wrapper>
//       }
//     </Container>
//   )}

// const ButtonOne = styled.button`
//   position: absolute;
//   width: 60px;
//   top: 40px;
//   right: 100px;
//   background-color: transparent;
//   border: none;
//   ${mobile({top:100, left: 20})};
// `
// const ButtonTwo = styled.button`
//   position: absolute;
//   width: 60px;
//   top: 40px;
//   right: 40px;
//   background-color: transparent;
//   border: none;
//   ${mobile({top: 100, right: 20})};
// `

// const Container = styled.div`
//   overflow: hidden;
//   position: relative;
// `

// const InterestedContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 48px 0;
// `

// const InterestedText = styled.h1`
//   text-transform: uppercase;
//   font-size: 40px;
//   margin-left: 135px;
//   letter-spacing: 2px;
//   ${mobile({marginLeft:0})};
// `

// const IconItems = styled.div`
//   padding: 12px;
//   &:hover {
//       background-color: black;
//       color: white;
//       cursor: pointer;
//   }
// `

// const Loading = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// const Wrapper = styled.div`
// `

// const Slide = styled.div`
//   position: relative;
//   margin:0 18px;
//   position: relative;
//   border: 1px solid transparent;
//   cursor: pointer;
//   &:hover{
//       border: 1px solid black;
//   }
//   ${mobile({margin: 0, marginTop: 12})};
// `

// const Icon = styled.div`
//   position: absolute;
//   top: 4px;
//   right: 24px;
//   z-index: 100;
//   cursor: pointer;
//   ${mobile({
//     top: '24px'
//   })}
// `

// const Image = styled.img`
//   width: 100%;
  
// `

// const Price = styled.div`
//   position: absolute;
//   bottom: 100px;
//   font-size: 20px;
//   background-color: white;
//   padding: 8px;
// `

// const Title = styled.div`
//   margin: 4px 8px;
// `

// const Des = styled.p`
//   opacity: 0.8;
//   font-size: 16px;
//   padding-bottom: 32px;
//   margin: 0 8px;
// `

// export default Interested;
