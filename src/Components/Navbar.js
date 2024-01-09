import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav class="navbar bg-dark">
            <ul>
                <li><a href="#home" id="home">Home</a></li>
                <li><a href="#featuredclass">Featured classes</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#coachs">Coachs</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar