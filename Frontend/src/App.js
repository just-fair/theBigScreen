import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Pages/home';
import About from './Pages/about';
import Reserve from './Pages/reserve';
import Movie from './Pages/movie';
import Seats from './Pages/seat';
import Contact from './Pages/contact';


function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Navbar/>
          <div className='pages'>
            <Routes>
              <Route path= '/' element={<Home/>}/>           
              <Route path= '/reserve' element={<Reserve/>}/>            
              <Route path= '/movie' element={<Movie/>}/>            
              <Route path= '/seats' element={<Seats/>}/>            
              <Route path= '/contact' element={<Contact/>}/>           
              <Route path= '/about' element={<About/>}/>
            </Routes>
          </div>

        </BrowserRouter>
      </div>
      
    </>
   
  );
}

export default App;
