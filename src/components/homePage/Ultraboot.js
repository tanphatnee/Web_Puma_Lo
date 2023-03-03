import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { mobile } from '../../responsive';

function Ultraboot() {

  const navigate = useNavigate()

  const goToProducts = () => {
    navigate('/allproducts')
  }

  return (
    <>
      <Container>
        <Video
          autoPlay
          muted
          loop
          src={process.env.PUBLIC_URL + '/videos/ultraboot.mp4'}
          type='video/mp4'
        />
        <Wrapper>
          <Title>
            Say hello to ultraboot 2023
          </Title>
          <TextItem>
            Được cải thiện với 360˚ cải thiện độ ôm cho nữ để hoản trả năng lượng tối ưu
          </TextItem>
          <ButtonContainer>
            <Button onClick={goToProducts}>
              Mua ngay
              <IconArrow />
            </Button>
          </ButtonContainer>
        </Wrapper>
      </Container>
    </>
  )
}

const Container = styled.div`
    position: relative;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
`

const Video = styled.video`
    width: 100%;
    height: 100%;
`

const Wrapper = styled.div`
    position: absolute;
    width: 30%;
    margin-left: 130px;
    ${mobile({ width: '100%', marginLeft: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', })};
`

const Title = styled.h1`
    margin-bottom: 32px;
    font-size: 42px;
    font-weight: 600;
    text-transform: uppercase;
    ${mobile({ fontSize: 28, marginBottom: 0, marginLeft: 8 })};
`

const TextItem = styled.p`
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: lighter;
    ${mobile({ display: 'none' })};
`

const ButtonContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    ${mobile({ maxWidth: 150, marginRight: 8 })};
`

const Button = styled.button`
    margin-top: 4px;
    padding: 10px 12px;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover { 
        color: #7a7676;
    }
`

const IconArrow = styled(ArrowRightAltIcon)`
    font-size: 32px !important;
    margin-left: 8px;
`

export default Ultraboot
