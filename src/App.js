import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/homepage/Home';
import Bookmark from './components/bookmark/Bookmark';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/bm' element={<Bookmark/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
