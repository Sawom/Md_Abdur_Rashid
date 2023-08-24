import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar></Sidebar>
      </BrowserRouter>
      
    
    
    </div>
  );
}

export default App;
