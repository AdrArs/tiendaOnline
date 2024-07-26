import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProductComponent from './components/ProductComponent'
import SideBarLayout from './Layouts/SideBarLayout'
import ProductDetail1 from "./components/productDetail/ProductDetail1.jsx";
import CardComponent from "./components/CardComponent.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        <Route path='/product' element={<ProductComponent></ProductComponent>}></Route>
        <Route path='/dashboard' element={<SideBarLayout></SideBarLayout>}></Route>
        <Route path='/tecnologia' element={<CardComponent></CardComponent>}></Route>
        <Route path='/product/:id' element={<ProductDetail1></ProductDetail1>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
