import React from 'react'

function Navigation() {
  return (
    <div className='navigation'>
      <nav>
        <ul>
            <li><a href="#home" className='active'>Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
