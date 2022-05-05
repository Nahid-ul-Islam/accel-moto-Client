import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home/Home';
import Header from './Shared/Header/Header';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUP/SignUp';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;