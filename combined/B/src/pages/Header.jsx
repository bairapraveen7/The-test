
import React from "react"
import { Link } from "react-router-dom"

function Header()
{
    return (
        <>
      <nav className="linkgroup">
         
            <Link className="btn btn-primary links" to="/">Home</Link>
          
            <Link className="btn btn-primary links " to="/create">Create</Link>
          
            <Link className="btn btn-primary links" to="/authorize">Authorize</Link>
          
      </nav>

        </>
    )
}

export default Header;