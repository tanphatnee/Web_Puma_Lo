import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/User/user.actions';

function Profile() {

  const dispatch = useDispatch();

  const userStatus = useSelector(state => state.user.user)

  const logOut = () => dispatch(logout())

  return (
    <Container>
      {userStatus ? 
      (
        <WrapperMobile>
          <Text>
            {`Xin chào ${userStatus?.fullName}`}
          </Text>
          <Link to='/sign-in'>
            <MenuItems onClick={() => logOut()}>
              Đăng xuất
            </MenuItems>
          </Link>
        </WrapperMobile>
      ) : (
      <NotSignIn>
        <Link to='/sign-in'>
          <MenuItems>
            Đăng nhập
          </MenuItems>
        </Link>
      </NotSignIn>
      )
      }
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
  border-radius: 4px 0 0 4px;
  padding: 16px;
  top: 52px;
  right: 0px;
  z-index: 10001;
`

const WrapperMobile = styled.div`

`

const Text = styled.div`
  margin-bottom: 12px;
  color: red;
`

const MenuItems = styled.button`
  padding: 4px 8px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  width: 100%;
  background-color: #2acd83;
  &:hover {
    background-color: #8dd3b3;
  }
`

const NotSignIn = styled.div`

`

export default Profile;
