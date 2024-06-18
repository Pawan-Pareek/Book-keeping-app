import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import AddBook from "./components/Books/AddBook";
import Book from './components/Books/Book';
import Books from './components/Books/Books'; 
import RegisterUser from './components/users/RegisterUser';
import LoginUser from './components/users/LoginUser';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/AddBook' Component={AddBook} />
          <Route exact path='/Books' Component={Books} />
          <Route exact path='/Register' Component={RegisterUser} />
          <Route exact path='/Login' Component={LoginUser} />
          <Route exact path='/Profile' Component={Profile} />
          <Route exact path='/' Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
