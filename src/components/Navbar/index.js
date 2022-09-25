import './index.scss'
import logo from '../../assets/images/manrev.png'
export default function Navbar() {
  return (
    <header className='nav-bar'>
      <nav>
        <a className='logo' href='/'>
          <img src={logo} alt='manrev-logo' />
        </a>
        <ul>
          <li className='text_animate _0'>
            <a href='#about'>About</a>
          </li>
          <li className='text_animate _1'>
            <a href='#experience'>Experience</a>
          </li>
          <li className='text_animate _2'>
            <a href='#work'>Work</a>
          </li>
          <li className='text_animate _3'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}