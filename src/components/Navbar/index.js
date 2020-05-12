import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div> 
        <Link to="/">
        <button type="submit"> Search </button>
        </Link>
        <Link to="/Portfolio">
        <button type="submit"> Portfolio </button>
        </Link>
        <Link to="/Log">
        <button type="submit"> Log </button>
        </Link>
        <Link to="/Auth">
        <button type="submit"> Login </button>
        </Link>
        </div>
    );
}

export default Navbar;

    