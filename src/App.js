import { Routes, Route, Outlet } from 'react-router-dom';
import SignUpForm from './components/signup/signupform.component';
//import CategoryItem from './components/category-item/category-item.component';

import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Signin from './routes/signin/signin.component';
const Navigation = () => {
  return (<div>

    <p>This is Navigationbar</p>
    <Outlet />
  </div>)
}
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route  index element={<Home />} />
        <Route path='home'  element={<Home />} />
        <Route path="shop"  element={<Shop />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<SignUpForm />} />
      </Route>
    </Routes>
  );
};

export default App;
