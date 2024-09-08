import React from "react";
import '../All.css';
function Navbar() {
    return ( 
        <>
         
      <header className="header">
        {/* <div className="logo">
          <h1>Homepage/Order Sync Successful</h1>
        </div> */}


        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>Orders</li>
            <li>Integrations</li>
            <li>Tracking Page</li>
            <li>Partner with Us</li>
          </ul>
        </nav>


        <div className="actions">
          <input type="text" placeholder="Search" />
          <button>Account</button>
          <button>Settings</button>
        </div>
      </header>
        </>
     );
}

export default Navbar;