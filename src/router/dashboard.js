import { Routes, Route } from 'react-router-dom';
import DashBoard from '../components/dashboard';
import Sidebar from '../components/dashboard/sidebar';
import AllProducts from '../components/dashboard/allProducts';
import Trending from '../components/dashboard/trending';
import UpdateProduct from '../components/dashboard/allProducts/updateProduct';
import UpdateProductTrending from '../components/dashboard/trending/updateProduct';
import AddProduct from '../components/dashboard/allProducts/addProduct';
import AddTrendingProduct from '../components/dashboard/trending/addProduct';
import NotFound from '../pages/NotFound';


function App() {

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/allproducts' element={<AllProducts />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/allproducts/:id' element={<UpdateProduct />}/>
        <Route path='/trending/:id' element={<UpdateProductTrending />}/>
        <Route path='/allproducts/createproduct' element={<AddProduct />}/>
        <Route path='/trending/createtrendingproduct' element={<AddTrendingProduct />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}


export default App;
