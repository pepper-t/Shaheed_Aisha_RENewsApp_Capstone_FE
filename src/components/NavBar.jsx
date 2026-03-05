

import { Link } from "react-router-dom";

export default function Navigation() {//Clickable links are on all pages
  return (
    <div className="nav">
      <Link to="/">
        <div>HomePage</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/blog">
        <div>Blog</div>
      </Link>
        <Link to="/contact">
        <div>Contact</div>
      </Link>
      <Link to="/newsgrid">
        <div>NewsGrid</div>
      </Link>
      
    </div>  
  );
}