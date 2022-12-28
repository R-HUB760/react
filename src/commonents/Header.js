import React from 'react'
import logo from '../logo.svg';

function Header() {
  return (
    <>
      <div className='row text-dark bg-warning align-items-center justify-content-center sticky-top'>
        <div class="col-4 text-center">

          {/* My Photo */}
          <a href='/index.html' className='logs'><img src={logo} alt='Logo' /></a>
        </div>

        {/* Logo Text */}
        <div class="col-4">
          <div className='text-center fs-3 mb-1'> React App Development</div>
        </div>

        {/* Log In */}
        <div class="col-4">
          <div className='text-center fs-5 mb-1'>
            <a href='#signup'>Sign Up</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header