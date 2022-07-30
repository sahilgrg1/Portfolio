import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import man from './icons/man1.png'
import './styles/Header.scss'


function Header() {
    return (<>
        <div className="main">
        <nav className="headers">
                    <ul>
                        <li>
                            <Link className="link" smooth to='#menu'>Home</Link>
                        </li>
                        <li>
                            <Link className="link" smooth to='#about'>about</Link>
                        </li>
                        <li>
                            <Link className="link" smooth to='#skills'>skills</Link>
                        </li>
                        <li>
                            <Link className="link" smooth to='#contact'>contact</Link>
                        </li>
                    </ul>
                </nav>
            <div className="app">
              
            </div>
            <div className="main-components">
                <div className="images">
                    <img src={man} alt="Hello" />
                </div>
                <div className="description">
                    <p className="header-decription">Hi there,</p>
                    <p className="header-decription">I am Sahil Garg</p>
                    <div className="profession">
                        <p className="header-decription"> A <span>C</span>omputer <span>S</span>cience <span>E</span>ngineer</p>
                    </div>


                </div>

            </div>
        </div>



    </>);
}




export default Header
