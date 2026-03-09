
//import React, { useState } from 'react'; // Add useState to the import
import '../components/navbar.css'
import { Link } from "react-router-dom";
//import { FaBars } from "react-icons/fa";
//import { ImCross } from "react-icons/im";

export default function Navigation() {//Clickable links are on all pages
    
  return (
   <nav className='navbar'>
    <div className='logo'><img src="src/assets/images/housetrap_small.svg" alt="house in a mousetrap" /></div>
  <h1 className="housetrap">Housetrap</h1><h1>-Free Zone</h1>

<span></span>
        <span></span>
        <span></span>

    <ul className='nav-links'>    
     
      <Link to="/" exact activeClassName="active">
        <li>HomePage</li>
      </Link>
      <Link to="/about" activeClassName="active">
        <li>About</li>
      </Link>
      <Link to="/blog" activeClassName="active">
        <li>Blog</li>
      </Link>
        <Link to="/join" activeClassName="active">
        <li>Join</li>
      </Link>
      <Link to="/newsgrid" activeClassName="active">
        <li>NewsGrid</li>
      </Link>
      </ul>
      
      </nav>
     
    
  );
}

/*


export default function Navigation() {//Clickable links are on all pages
  const [Mobile, setMobile] = useState(true);

  const toggleMobileMenu = () => {
    setMobile(!Mobile);
  };
  
  return (
   <nav className='navbar'>
    <div className='container'>
    <h3 className='logo'>Housetrap-Free Zone</h3>

    <ul className= 'nav-links-mobile' onClick={() => setMobile(false)}> 
    
     
      <Link to="/" exact activeClassName="active">
        <li>HomePage</li>
      </Link>
      <Link to="/about" activeClassName="active">
        <li>About</li>
      </Link>
      <Link to="/blog" activeClassName="active">
        <li>Blog</li>
      </Link>
        <Link to="/contact" activeClassName="active">
        <li>Contact</li>
      </Link>
      <Link to="/newsgrid" activeClassName="active">
        <li>NewsGrid</li>
      </Link>
      </ul>
<button className="mobile-menu-icon"><FaBars onClick={toggleMobileMenu} />
        {Mobile? <ImCross /> : <FaBars/>}
      </button>


      </div>
      </nav>
     
    
  );
}




*/




/*line 20:  <ul className= {Mobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setMobile(false)}>  is used to toggle the mobile menu when a link is clicked. It checks the state of Mobile and applies the appropriate class for styling. When a link is clicked, it sets Mobile to false, which hides the mobile menu.*/

/*line 40: <button className="mobile-menu-icon"  onClick={() => setMobile(!Mobile)}> is used to toggle the mobile menu when the button is clicked. It checks the current state of Mobile and toggles it to the opposite value (true or false). This allows the mobile menu to be shown or hidden when the button is clicked. The button also displays an icon that changes based on the state of Mobile, showing a cross icon when the menu is open and a bars icon when the menu is closed.*/
/*line 40 or <button className="mobile-menu-icon"  onClick={toggleMobileMenu}> 
       {Mobile? <ImCross /> : <FaBars/>}
      </button>
      */

/*mobile-menu-icon written to make code mobile friendly.*/


/*


      */
/*
<button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <i className="fas fa-bars"></i>
      </button>

*/

//Before
/*
export default function Navigation() {//Clickable links are on all pages
  return (
      
     
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
  */



