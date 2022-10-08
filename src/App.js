import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './NotFound/NotFound';
import About from './Pages/About/About';
import Booking from './Pages/Home/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/booking/:serviceId' element={<PrivateRoute><Booking/></PrivateRoute>} />
      <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
