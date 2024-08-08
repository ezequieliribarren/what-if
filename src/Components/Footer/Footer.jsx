import React from 'react'

const Footer = () => {
  return (
    <footer className='container-fluid p-0'>
      <ul className='ul-footer'>
        <div className='redes'>
          <img src="images/ig.png" alt="" />
        </div>
        <div >
          <h2 className='h2-direccion'> <a target='_blank' href="https://maps.app.goo.gl/YWmxsqjxy2uDtG6E8
">Calle Aldapa, 2 Local 4, Esquina, C. de Matilde Hernández, 28025 Madrid, España</a></h2>
          <img className='img-direccion' src="images/map.png" alt="" />
        </div>
      </ul>
    </footer>
  )
}

export default Footer