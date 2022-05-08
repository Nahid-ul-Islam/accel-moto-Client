import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home/Home';
import Header from './Shared/Header/Header';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUP/SignUp';
import SingleItem from './pages/SingleItem/SingleItem';
import ManageItems from './pages/ManageItems/ManageItems';
import AddNewItem from './pages/AddNewItem/AddNewItem';
import RequireAuth from './Shared/RequireAuth/RequireAuth';
import MyItem from './pages/MyItems/MyTabularItem/MyTabularItem';
import MyItems from './pages/MyItems/MyItems';
import NotFound from './pages/NotFound/NotFound';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/AboutPage/About';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='/bikes/:id' element={<RequireAuth>
          <SingleItem></SingleItem>
        </RequireAuth>}>
        </Route>

        <Route path='/manage-item' element={
            <ManageItems></ManageItems>
        }></Route>

        <Route path='/add-new-item' element={
          <RequireAuth>
            <AddNewItem></AddNewItem>
          </RequireAuth>
        }></Route>

        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }>
        </Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
