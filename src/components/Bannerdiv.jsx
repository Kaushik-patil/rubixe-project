import React from 'react'
import '../App.css'
let Logo = require('../images/img1.jpg');

const Bannerdiv = () => {
  return (
    <div className='bannerdiv'>
        <img src={Logo} alt="" />
        <h1 className='h1'>TECH </h1>
        <p >FOR TEENS</p>
    </div>
  )
}

export default Bannerdiv