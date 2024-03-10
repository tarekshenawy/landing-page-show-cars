import React from "react";
import "./Navbar.css";


const Navbar=()=>{
    return(
        <div className='navbar'>
            <h1>Ev-olution</h1>
            <div className='itemsnavbar'>
                <button>home</button>
                <button>explore</button>
                <button>about</button>
                <button className="contact">contact</button>
            </div>
    </div>

    )

}

export default Navbar;