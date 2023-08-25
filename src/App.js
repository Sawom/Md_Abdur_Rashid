import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <div  >
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={ <Home></Home> } ></Route>
            <Route path='/home' element={ <Home></Home> } ></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
        
      
    
    </div>
  );
}

export default App;
