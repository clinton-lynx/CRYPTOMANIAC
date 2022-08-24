import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.scss';
import React from 'react'
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage';
import './assets/styles/_main.scss'; 



function App() {
  return (
    
  
    <BrowserRouter>
    <Routes>
  
     <Route path='/' element={<HomePage />} />


      
    
      </Routes>
     </BrowserRouter>

  );
}

export default App;
