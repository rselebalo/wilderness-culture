import React, { Component } from 'react';  
import { Link } from 'react-router-dom'

function HeaderComponent (){
  return (
    <ul>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/people"> People </Link>
      </li>
      <li>
        <Link to="/contact"> Contact </Link>
      </li>
    </ul>
  )
}

export default HeaderComponent;