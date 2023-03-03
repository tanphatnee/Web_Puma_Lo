import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Home from '../pages/Home';
import Header from '../pages/Header';
import Product from '../pages/Product';
import SignIn from '../pages/sign-in';
import SignUp from '../pages/sign-up';
import WishList from '../pages/wishList';
import AllProducts from '../pages/AllProducts';
import FilterProducts from '../pages/FilterProducts';
import SearchResult from '../pages/SearchResult';
import NotFound from '../pages/NotFound';
import { UpdateCart } from '../redux/Products/actions';
import { getWishList } from '../redux/Products/actions';

function Client() {

  const currentUser = useSelector((state) => state.user.user)
  const userId = useSelector(state => state.user?.user?.userId) || '';
  const dispatch = useDispatch();

  const resetNumberCart = 0;
  useEffect(() => {
    dispatch(UpdateCart(resetNumberCart));
    dispatch(getWishList(userId))
  },[dispatch, userId])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/sign-in' element={ currentUser ? <Navigate to="/" replace /> : <SignIn />} />
        <Route path='/sign-up' element={ currentUser ? <Navigate to="/" replace /> : <SignUp />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/allproducts' element={<AllProducts />} />
        <Route path='/female' element={<FilterProducts />} />
        <Route path='/male' element={<FilterProducts />} />
        <Route path='/search' element={<SearchResult />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}


export default Client;
