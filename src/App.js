import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home/Home';
import Header from './Shared/Header/Header';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUP/SignUp';
import SingleItem from './pages/SingleItem/SingleItem';
import ManageItems from './pages/ManageItems/ManageItems';
import AddNewItem from './pages/AddNewItem/AddNewItem';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/bikes/:id' element={<SingleItem></SingleItem>}></Route>
        <Route path='/manage-item' element={<ManageItems></ManageItems>}></Route>
        <Route path='/add-new-item' element={<AddNewItem></AddNewItem>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
