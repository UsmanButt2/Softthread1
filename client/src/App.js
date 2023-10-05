import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import PagenotFound from './pages/PagenotFound'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/user/Dashboard'
import PrivateRoute from './components/Routes/Private'
import ForgotPassword from './pages/Auth/ForgotPassword'
import AdminRoute from './components/Routes/AdminRoutes'
import AdminDashboard from './pages/Admin/AdminDashboard'
import CreateCategory from './pages/Admin/CreateCategory'
import CreateProduct from './pages/Admin/CreateProduct'
import CreateSaleProds from './pages/Admin/CreateSaleProds'
import Users from './pages/Admin/Users'
import Orders from './pages/user/Orders'
import Profile from './pages/user/Profile'
import Products from './pages/Admin/Products'
import SaleProducts from './pages/Admin/SaleProducts'
import UpdateProduct from './pages/Admin/UpdateProduct'
import Categories from './pages/Categories'
import CategoryPage from './pages/CategoryPage'
import SingleProdPage from './pages/SingleProdPage'
import CheckOut from './pages/CheckOut'
import Search from './pages/Search'
import ShippingForm from './pages/ShippingForm'
import AdminOrders from './pages/Admin/AdminOrders'
import PaymentPage from './components/PaymentPage'
import OrderComp from './components/OrderComp'
import UpdateSaleProducts from './pages/Admin/UpdateSaleProducts'
import SaleCategoryPage from './pages/SaleCategoryPage'
import SingleSaleProdPage from './pages/SingleSaleProdPage'
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-bootstrap'
import GlobalNotification from './components/GlobalNotification'


function App() {
  const messages = ['Sappire Plian Cotton (sky)', 'Pasha Fabric Cotton (blue)', 'Wach N Ware(olive green)', 'Sparkle Wool(pistachio)', 'Sappire Matching Cotton(Beige Cream)', 'Sapphire Metching Cotton', 'Pasha Cotton', 'Slub Desighn Wash&Ware', 'Paper Cotton By GulAhmed','Dynasty Plain Cotton', 'Korean Boski', 'Grace Dark Wash&Ware', 'Kamalia Khaddar Winter Collection', 'Sparkle Wool Collection', 'Legacy Wash&Ware Wool'];
  return (
    <>  
    <ToastContainer/>
      <Toaster/>

  

    <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/search" element={<Search />} />
          <Route index path="/product/:slug" element={<SingleProdPage />} />
          <Route index path="/saleproduct/:slug" element={<SingleSaleProdPage />} />
          <Route index path="/cart" element={<CheckOut />} />
          <Route index path="/shipping" element={<ShippingForm />} />
          <Route index path="/online_payment" element={<PaymentPage/>} />
          <Route index path="/order_completed" element={<OrderComp/>} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/category/:slug' element={<CategoryPage />} />
          <Route path='/category/:slug' element={<SaleCategoryPage />} />
          <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='user' element={<Dashboard />} />
          <Route path='user/myorder' element={<Orders />} />
          <Route path='user/profile' element={<Profile />} />
          </Route>

          <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='order' element={<Dashboard />} />
          <Route path='order/shipping' element={<ShippingForm />} />
          <Route path='user/profile' element={<Profile />} />          
          <Route path='user/myorder' element={<Orders />} />
          </Route>
          
          <Route path='/dashboard' element={<AdminRoute />}>
          <Route path='admin' element={<AdminDashboard />} />
          <Route path='admin/create-category' element={<CreateCategory />} />
          <Route path='admin/create-product' element={<CreateProduct />} />
          <Route path='admin/create-saleproduct' element={<CreateSaleProds />} />
          <Route path='admin/products/:slug' element={<UpdateProduct />} />
          <Route path='admin/saleproduct/:slug' element={<UpdateSaleProducts />} />
          <Route path='admin/products' element={<Products />} />
          <Route path='admin/saleproduct' element={<SaleProducts />} />
          <Route path='admin/allusers' element={<Users />} />
          <Route path='admin/adminorders' element={<AdminOrders />} />
          </Route>
  
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PagenotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />          
          <Route path="/forgot-password" element={<ForgotPassword />} />          
        
      </Routes>
      
      <div>
    {/* popup */}
    <GlobalNotification messages={messages} />
  </div>
      
    </>
  );
}

export default App;
