import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home/Home';
import Mern from './Components/Mern/Mern';
import ReactProject from './Components/ReactProject/ReactProject';
import PSDtoHTML from './Components/PSDtoHTML/PSDtoHTML';
import Academic from './Components/Academic/Academic';

function App() {
  return (
    <div >
        <BrowserRouter>
          <Header> </Header>
            <Routes>
              {/* nested route */}
              <Route path='/' element={ <Home></Home> } >
                  <Route path='mern' element={ <Mern></Mern> } ></Route> 
                  <Route path='reactjs' element={ <ReactProject></ReactProject> } ></Route>
                  <Route path='psd' element={ <PSDtoHTML></PSDtoHTML> } ></Route>
                  <Route path='academic' element={ <Academic></Academic> } ></Route>
              </Route>
            </Routes>
          <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
