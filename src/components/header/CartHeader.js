import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Modal } from '@material-ui/core';
import { mobile } from '../../responsive';
import { Link, useNavigate } from 'react-router-dom';
import useComponentVisible from '../hooks/useComponentVisible';
import Profile from '../common/Profile';
import { suggestionsServices } from '../../api/suggestionsServices';

const menuItems = [
  {
    title: "Nam",
    path: "male"
  },
  {
    title: "Nữ",
    path: "female"
  },
  {
    title: "Trẻ em",
    path: "allproducts"
  },
  {
    title: "Thể thao",
    path: "allproducts"
  },
  {
    title: "Các nhãn hiệu",
    path: "allproducts"
  }
]

function CartHeader() {

  const [extendNavbar, setExtendNavbar] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  let navigate = useNavigate();
  
  const [textSearch, setTextSearch] = useState('')

  const [dataSearch, setDataSearch] = useState();

  const onChangeSearch = (e) => {
    setTextSearch(e.target.value);
    setIsComponentVisible(true);
  }

  useEffect(() => {
    suggestionsServices(textSearch)
      .then((data) => textSearch && setDataSearch(data.data.data))
  },[textSearch])

  const onShowProfile = (e) => {
    setShowProfile(!showProfile)
  }

  const handleClickSearchResult = (id) => {
    navigate(`/product/${id}`);
    setDataSearch([])
    setIsComponentVisible(false)
  }

  const handleClearSearch = () => {
    setDataSearch([])
    setTextSearch('')
  }

  const goToSearchResult = () => {
    navigate(`search?name=${textSearch}`);
    setIsComponentVisible(false)
  }

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)
  useEffect(() => {
    setIsComponentVisible(false)
  },[setIsComponentVisible])

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
            <NavbarLinkContainer>
              <OpenLinksButton>
                <MenuIcon  onClick={() => {setExtendNavbar(true)}} />
              </OpenLinksButton>
            </NavbarLinkContainer>
        </LeftContainer>
        <CenterContainer>
          <Link to="/">
            <Logo style={{ marginTop: '15px'}} src='/images/logo.png'></Logo>
          </Link>
          <MenuItem>
            {menuItems.map((item, index) => (
              <NavbarLink
                onClick={() => {navigate(`/${item.path}`)}}
                key={index}
              >
                {item.title}
              </NavbarLink>
            ))}
          </MenuItem>
        </CenterContainer>
        <Right>
            <SearchContainer>
              <SearchWrapper>
                <Input placeholder="Tìm kiếm" value={textSearch || ''} onChange={onChangeSearch}/>
                {textSearch? <ClearIcon style={{ cursor: 'pointer'}} onClick={handleClearSearch} /> : <IconSearch />}
              </SearchWrapper>
            </SearchContainer>
            {textSearch ? (
              <div ref={ref}>
                {isComponentVisible && (
                  <div className="search-result">
                    {dataSearch?.map((item) => (
                      <div
                        key={item._id}
                        onClick={() => handleClickSearchResult(item._id)}
                        className="search-item"
                      >
                        <div className="img">
                          <img src={item.imageUrl} alt={item.name} />
                        </div>
                        <div className="content">
                          <p>{item.name}</p>
                          <p> {Number(item.price).toLocaleString('en-US')}đ</p>
                        </div>
                      </div>
                    ))}
                    {dataSearch?.length ? (
                      <div className="more">
                        <p className="more-btn" onClick={goToSearchResult}>Xem thêm ...</p>
                      </div>
                    ): null}
                  </div>
                )}
              </div>
            ): null}
            <IconContainer>
              <IconItems onClick={onShowProfile}>
                <AccountCircleOutlinedIcon />
                { showProfile &&  <Triangle /> }
              </IconItems>
              <Modal
                open={showProfile}
                onClose={() => {setShowProfile(false)}}
                BackdropProps={{
                  style:{backgroundColor: 'transparent'}
                }}
              >
                <>
                  <Profile /> 
                </>
              </Modal>
          </IconContainer>
        </Right>
      </NavbarInnerContainer>
        <NavbarExtendedContainer show={extendNavbar}>
          <Top>
            <Link to="/">
              <Logo onClick={() => setExtendNavbar(false)} src='images/logo.png'></Logo>
            </Link>
            <CloseIcon
              style={{fontSize: '36px', right: '24px', position: 'absolute', cursor: 'pointer',}}
              onClick={() => setExtendNavbar(false)} />
          </Top>
          <Bottom>
            {menuItems.map((item, index) => (
              <NavbarLinkExtended
                onClick={() => {
                  navigate(`/${item.path}`)
                  setExtendNavbar(false)
                }}
                key={index}
              >
                {item.title}
              </NavbarLinkExtended>
            ))}
          </Bottom>
        </NavbarExtendedContainer>
    </NavbarContainer>
  );
}

 const NavbarContainer = styled.nav`
  position: fixed;
  width: 100vw;
  top: 0;
  background-color: #28a8e9;
  border-bottom: 1px solid #ccc;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 70px;
  };
`;

 const LeftContainer = styled.div`
  display: none;
  ${mobile({
    flex: '30%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '5%',
  })}
`;

 const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
`;

 const NavbarLinkContainer = styled.div`
  display: flex;
`;

 const NavbarLink = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 2px;
  padding: 12px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  ${mobile({
    display: 'none',
  })}
  &:hover {
    background-color: pink;
    border-bottom: 3px solid red;
  }
`;

 const NavbarLinkExtended = styled.a`
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

const CenterContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  ${mobile({
    flex: '40%',
    marginTop: '12px',
    justifyContent: 'center',
  })}
`;

const Logo = styled.img`
  height: 70px;
  cursor: pointer;
  ${mobile({
    height: '100px',
  })};
`;

const MenuItem = styled.div`

`

const OpenLinksButton = styled.button`
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  font-size: 45px;
  cursor: pointer;
  display: none;
  ${mobile({ 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })}
`;

 const NavbarExtendedContainer = styled.div`
  transform: ${(props) => (props.show ? 'translateX(0%)' : 'translateX(-100%)')};
  transition: 600ms ease;
  z-index: 10000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const Right = styled.div`
  display: flex;
  flex: 30%;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
  ${mobile({
    paddingRight: '5%',
  })};
`

const SearchContainer = styled.div`
  margin-right: 24px;
  ${mobile({
    backgroundColor: '#28a8e9',
    width: '100%',
    position: 'absolute',
    top: '70px',
    left: '0',
    borderTop: '1px solid',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px !important',
  })}
`

const SearchWrapper = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
  display: flex;
  padding: 5px;
  margin-right: 28px;
  justify-content: space-between;
  ${mobile({
    margin: '5px',
    width: '100%',
    padding: '5px',
  })};
`

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  ::placeholder {
    color: black;
    font-size: 14px;
  }
  ${mobile({
    width: '100%'
  })}
`

const IconSearch = styled(SearchIcon)`
    cursor: pointer;
`

const IconContainer = styled.div`
    display: flex;
    margin-right: 24px;
    ${mobile({marginRight:0})};
`

const IconItems = styled.div`
  position: relative;
  margin-right: 28px;
  cursor: pointer;
  ${mobile({marginRight: '12px'})};
`

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid white;
  position: absolute;
  top: 22px;
  left: 50%;
  transform: translate(-50%, 0);
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  position: relative;
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`


export default CartHeader
