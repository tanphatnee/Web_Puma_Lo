// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components'
// import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// import {mobile} from '../../responsive'


// function Festival() {

//   const navigate = useNavigate()

//   const goToProducts = () => {
//     navigate('/allproducts')
//   }

//   return (
//     <Container>
//       <Intro 
//         autoPlay
//         muted
//         loop
//         src={process.env.PUBLIC_URL + '/videos/intro.mp4'} 
//         type ='video/mp4' 
//       />
//       <Wrapper>
//         <Title>
//           Never change your stripes
//         </Title>
//         <TextItem>
//           Our Festival-ready collection has arrived
//         </TextItem>
//         <ButtonContainer>
//           <Button onClick={goToProducts}>
//             Mua ngay
//             <IconArrow />
//           </Button>
//         </ButtonContainer>
//       </Wrapper>
//     </Container>
//   )
// }

// const Container = styled.div`
//     overflow-x: hidden;
//     position: relative;
//     display: flex;
//     align-items: center;
//     cursor: pointer;
// `
// const Intro = styled.video`
//     width: 100%;
//     height: 100%;
// `

// const Wrapper = styled.div`
//     position: absolute;
//     width: 33.33%;
//     margin-left: 130px;
//     ${mobile({display:'flex', justifyContent: 'space-between',width:'100%', marginLeft:6})};
// `

// const Title = styled.h1`
//     margin-bottom: 32px;
//     font-size: 42px;
//     font-weight: 600;
//     text-transform: uppercase;
//     ${mobile({display:'none'})};
// `

// const TextItem = styled.p`
//     font-size: 20px;
//     margin-bottom: 20px;
//     font-weight: lighter;
//     ${mobile({fontSize:28,})};
// `

// const ButtonContainer = styled.div`
//     position: relative;
//     width: 100%;
//     height: 100%;
//     z-index: 1;
//     ${mobile({maxWidth:150,marginRight:12,marginTop:16})};
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
//     background-color: black;
//     color: white;
//     border: none;
//     &:hover {
//         color: #ccc;
//     }
//     ${mobile({padding:16})};
// `

// const IconArrow = styled(ArrowRightAltIcon)`
//     font-size: 32px !important;
//     margin-left: 8px;
// `

// export default Festival
