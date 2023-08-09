import React from 'react'
// Router
import { NavLink, Link } from 'react-router-dom'
// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

function Header() {
return (
<header>
  <FontAwesomeIcon icon={faBook} />
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/books'>Books</NavLink>
    <NavLink to='/add_book'>Add Book</NavLink>
  </nav>
</header>
)
}

export default Header