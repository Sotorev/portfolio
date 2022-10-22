import './index.scss'
import logo from '../../assets/images/manrev.png';
import { useState } from 'react';
import useScrollDir from '../../hooks/useScrollDir';
export default function Navbar() {
  const [showNavBar, setShowNavBar] = useState(false);
  const scrollDir = useScrollDir();
  let navClassName = "nav-bar";
  if (scrollDir == "INITIAL") {
    navClassName = "nav-bar";
  }
  else if (scrollDir == "UP") {
    navClassName = "nav-bar show-nav-bar";
  }
  else {
    navClassName = "nav-bar hide-nav-bar";
  }
  return (
    <header
      className={navClassName}
    >
      <a className='logo' href='/'>
        <img src={logo} alt='manrev-logo' />
      </a>

      <div
        //button nav
        className={showNavBar ? "opened-nav-menu" : "closed-nav-menu"}
        onClick={() => setShowNavBar(!showNavBar)} 
      >
        <span/>
        <span/>
        <span/>
      </div>
      
      <div className={showNavBar ? 'mobile-nav-bar' : 'hide-mobile-nav-bar'}>
        <nav>
          <ul>
            <li className='text_animate _1'>
              <a href='#about'>About</a>
            </li>
            <li className='text_animate _2'>
              <a href='#experience'>Experience</a>
            </li>
            <li className='text_animate _3'>
              <a href='#work'>Work</a>
            </li>
            <li className='text_animate _4'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}