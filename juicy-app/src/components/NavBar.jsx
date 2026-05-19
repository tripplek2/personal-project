import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
       <Link to="/">Home</Link> 
       <Link to="/shop">Shop</Link>
       <Link to="/admin">Admin</Link>
       </div>
    </nav>
  )
}


export default NavBar;
