import './App.css';

import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NewsGrid from './pages/NewsGrid';
import Navigation from "./components/NavBar";


  export default function App() {
  return (
    <div>
   
      <Navigation />
      <Routes>       
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsgrid" element={<NewsGrid />} />
      </Routes>
     
      
       </div>
     
  );

  
   
}



