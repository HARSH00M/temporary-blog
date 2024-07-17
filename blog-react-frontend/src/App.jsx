import {
  Routes,
  Route
} from "react-router-dom";

import Error from './pages/Error';
import Blogs from './pages/Blogs';
import Service from './pages/Service.jsx';
import Home from './Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Banner from "./components/Banner";
import SingleBlog from "./pages/SingleBlog";



function App() {
  return (

    <Routes>
      <Route element={<Home/>}>
        
      <Route path="/" element={<Banner/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/services" element={<Service/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/blogs/:id" element={<SingleBlog/>}  />
      <Route path="*" element={<Error/>} />
      </Route>
    </Routes>
  )
}

export default App;