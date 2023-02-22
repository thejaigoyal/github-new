import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className='header'>
    <div>
        <h1>
        <Link to="/" className='logo'>
        I'm Saksham Jindal
        </Link>
        </h1>
        <h4>
        <Link className='logo'>
        Full Stack Developer
        </Link>
        </h4>
    </div>
    <div className='header-links'>
        <ul>
            <li>
            <Link>77-C, Type 4 Special, Rail Coach Factory, Kapurthala-144602</Link>
            </li>
            <li>
            <Link>(+91)8729015400</Link>
            </li>
            <li>
            <Link>sjindal_mca21@thapar.edu</Link>
            </li>
            <li>
            <a href='https://www.linkedin.com/in/saksham-jindal-2866361b9/' rel='noreferrer' target="_blank">linkedin.com/in/saksham-jindal-2866361b9</a>
            </li>
            <li>
            <Link href='github.com/jindalsaksham'>github.com/jindalsaksham</Link>
            </li>
        </ul>
    </div>
    </header>
  )
}

export default Header