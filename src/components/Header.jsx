import React from 'react'
import '../App.css'

const Header = () => {
  return (
    <div className='header'>
      <div id='logo'>
        <h1>Rubixe</h1>
      </div>
      <div id="nav">
        <ul>
            <li><a>HOME</a></li>
            <li><a>SERVICES</a></li>
            <li><a>PRODUCTS</a></li>
            <li><a>AI INTERNSHIP</a></li>
            <li><a>CAREER</a></li>
            <li><a>BLOG</a></li>
            <li><a>ABOUT</a></li>
            <li><a>CONTACT US</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header