import './App.css';

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Join from "./pages/Join";
import NewsGrid from './pages/NewsGrid';
import Navigation from "./components/NavBar";


  export default function App() {
  return (
    <div>
   
      <Navigation />
      <Routes>       
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/join" element={<Join />} />
        <Route path="/newsgrid" element={<NewsGrid />} />
      </Routes>
     
      
       </div>
     
  );

  
   
}



