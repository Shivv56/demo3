import About from './Components/About';
import Homes from './Components/Home';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App(){
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Homes />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  </BrowserRouter>
  </>


}
export default App;