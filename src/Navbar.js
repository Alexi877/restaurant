import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>{
	return(
		<div className ="Navbar container-fluid">
		 <div className = "row">
		  <div className= "col-12">
		   <div className="home">
		    <div className="home-text d-inline-flex">
		    <div className="col-8" >
		   <Link to ="/" >Home</Link>
		   </div>
		    </div>
		    
		    <div className="nav-right d-inline-flex">
		    <div className="col-4">
		   <Link to="/about" >About</Link> 
		   <Link to="/contact">Contact</Link>
		  </div>

		    </div>
		   </div>
		  </div>
		 </div>
		</div>
		)
}
export default Navbar;