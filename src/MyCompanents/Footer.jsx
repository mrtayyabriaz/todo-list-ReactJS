import React from 'react'

export default function Footer() {
  let FooterStyle = {
    // position: "absolute",
    // top: "100vh",
    width: "100vw !important",
  }
  return (
    <footer className='mt-5 border-top text-white py-3' style={FooterStyle}>
      <div className="container-fluid w-100 text-center">
      Copyright &copy; all rights reserved todos.com
      </div>
    </footer>
  )
}
