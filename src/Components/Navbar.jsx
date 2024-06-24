import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className= 'mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center '>
            <h1 className='mx-2 w-10 text-2xl font-bold'>Mr</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://github.com/Manishrwt15"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/manish-rawat-b1b61b269/"><FaLinkedin/></a>
            <a href="https://www.instagram.com/its_manish0915/"><FaInstagram/></a>
        </div>

    </nav>
  )
}

export default Navbar
