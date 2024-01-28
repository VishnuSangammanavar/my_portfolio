import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import DragHandleIcon from '@mui/icons-material/DragHandle';

const Header = () => {

  const [toggle, setToggle] = useState(true)

  return (
    <header id="header" className="header">
        <div className="container">
            <div className="row">
                <div className="col-11 d-flex justify-content-between align-items-center m-auto">
                    <div className="logo me-auto">
                        <h1><a href="/">Coder<span>_</span></a></h1>
                    </div>
                    <nav id='navbar' className='navbar'>
                        <ul style={ {right: `${toggle? '-300px':'0'}`} }>
                            <li className="nav-item"><a className="nav-link" href="#hero">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                            <li className="nav-item"><a className="nav-link" href="#footer">Interest</a></li>
                            <div className="close-menu" onClick={() => setToggle(!toggle)}>
                                <CloseIcon className='mobile-nav-toggle' />
                            </div>
                        </ul>
                        <div className="open-menu" onClick={() => setToggle(!toggle)}>
                            <DragHandleIcon className='mobile-nav-toggle' />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header