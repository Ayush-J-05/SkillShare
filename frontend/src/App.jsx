import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {Routes,Route} from 'react-router-dom';
import Tutorials from "./pages/Tutorials";
import View from "./pages/View";
import UploadTutorial from "./pages/UploadTutorial";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tutorials" element={<Tutorials />} />
      <Route path="/view/:id" element={<View />} />
      <Route path="/upload" element={<UploadTutorial />} />
    </Routes>
  );
}

export default App;