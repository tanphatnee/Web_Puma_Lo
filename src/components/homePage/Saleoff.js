// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// import {mobile} from '../../responsive';

// function Saleoff() {

//   const navigate = useNavigate()

//   const goToProducts = () => {
//     navigate('/allproducts')
//   }

//   return (
//       <Container>
//           <Image 
//           src={process.env.PUBLIC_URL + '/images/saleoff.jpg'} 
//           alt='image'
//           />
//           <Wrapper>
//               <TextItem>
//                   Giảm giá áp dụng trong giỏ hàng. Một số sản phẩm ngoại lệ. Điều khoản và điều kiện đi kèm.
//               </TextItem>
//               <ButtonContainer>
//                   <Button onClick={goToProducts}>
//                       Mua ngay
//                       <IconArrow />
//                   </Button>
//               </ButtonContainer>
//           </Wrapper>
//       </Container>
//   )
// }

// const Container = styled.div`
//     margin-top: 70px;
//     position: relative;
//     display: flex;
//     align-items: center;
//     cursor: pointer;
//     ${mobile({
//         marginTop: '107px',
//     })}
// `

// const Image = styled.img`
//     width: 100%;
//     height: 100%;
// `

// const Wrapper = styled.div`
//     width: 33.33333%;
//     position: absolute;
//     margin-left: 130px;
//     ${mobile({marginLeft:16})};
// `

// const TextItem = styled.h1`
//     font-size: 22px;
//     line-height: 32px;
//     color: white;
//     ${mobile({display:'none'})};
// `

// const ButtonContainer = styled.div`
//     position: relative;
//     width: 100%;
//     height: 100%;
//     z-index: 1;
// `

// const Button = styled.button`
//     margin-top: 4px;
//     padding: 10px 12px;
//     text-transform: uppercase;
//     font-size: 16px;
//     letter-spacing: 2px;
//     display: flex;
//     align-items: center;
//     cursor: pointer;  
// `

// const IconArrow = styled(ArrowRightAltIcon)`
//     font-size: 32px !important;
//     margin-left: 8px;
// `






// export default Saleoff
