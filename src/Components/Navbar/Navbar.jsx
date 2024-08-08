import React from 'react'

const Navbar = () => {
  return (
    <nav className='container-fluid p-0'>
        <ul className='ul-navbar'>
            <div>
                <img className='logo img-fluid' src="images/logo2.svg" alt="Logo" />
            </div>
            <div>
            <a className='mail' href="mailto:hi@whatif-arch.com">hi@whatif-arch.com</a>
            <img className='img-mail' src="images/mail.png" alt="" />
            </div>
        </ul>
    </nav>
  )
}

export default Navbar