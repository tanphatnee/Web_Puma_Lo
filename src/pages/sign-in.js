import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { mobile } from '../responsive';
import { login } from '../redux/User/user.actions';
import { CircularProgress } from '@material-ui/core';

function SignIn() {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.isLoading)
  const errorMessage = useSelector(state => state.user.message_login)
  
  const [input, setInput] = useState({
    username: '',
    password: '',
  })
  const [textErr, setTextErr] = useState();
  
  useEffect(() => {
    setTextErr(errorMessage)
    return () => {
      setTextErr('')
    }
  },[errorMessage])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = input

    try {
      dispatch(login(username, password));
      setInput({
        username: '',
        password: '',
      })
    }catch(err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    })
  }

  return (
    <Container>
      <Content>
      <Title>Đăng nhập</Title>
      <Form onSubmit={handleSubmit}>
        <Wrapper>
          <Input
            type="username"
            name="username"
            placeholder="Username"
            value={input.username}
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Mật khẩu"
            value={input.password}
            onChange={handleChange}
          />
        </Wrapper>
        {textErr ? (
          <div style={{textAlign: 'center', marginBottom: '16px', color: 'red'}}>
            <p>{textErr}</p>
          </div>
        ) : null}
        <ButtonWrapper>
          <Button type="submit">
            {loading ? <CircularProgress style={{marginRight:'8px', width:'20px', height:'20px'}} /> : null}
            Đăng nhập
          </Button>
        </ButtonWrapper>
      </Form>
      <SignUpWrapper>
          Bạn chưa có tài khoản?
          <Link to='/sign-up'>
              <SignUp>
                  Đăng ký ngay
              </SignUp>
          </Link>
      </SignUpWrapper>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: calc(100vh - 30px - 30px - 70px)
  ${mobile({height: 'calc(100vh - 224px)'})}
`

const Content = styled.div`
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  ${mobile({
    padding: '40px 0',
    marginTop: '20px',
  })}
`

const Title = styled.h1`
  padding: 20px;
`

const Form = styled.form`

`

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  width: 400px;
  padding: 16px;
  margin: 8px 0;
  border-radius: 5px;
  border: 1px solid black;
  ${mobile({width: '300px'})};
`

const Button = styled.button`
  font-size: 20px;
  padding: 10px 40px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: #2acd83;
  &:hover {
    background-color: #8dd3b3;
  }
`

const SignUpWrapper = styled.div`
  margin-top: 20px;
`

const SignUp = styled.span`
  margin-left: 8px;
  color: blue;
  cursor: pointer;
  &:hover {
      text-decoration: underline;
  }
`

export default SignIn