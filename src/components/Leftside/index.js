import './index.scss'
import IconGitHub from '../../assets/icons/github.js'
import IconInstagram from '../../assets/icons/instagram.js'
import IconLinkedIn from '../../assets/icons/linkedin'
import IconTwitter from '../../assets/icons/twitter'

const Side = () => {
  return (
    <div className='left-side animate-sides '>
      <ul>
        <li>
          <a href="https://github.com/Sotorev" aria-label="Github"
            target="_blank" rel="noreferrer"
          >
            <IconGitHub />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/Sotorev" aria-label="Instagram"
            target="_blank" rel="noreferrer"
          >
            <IconInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jos%C3%A9-soto-77a087248" aria-label="LinkedIn"
            target="_blank" rel="noreferrer"
            >
            <IconLinkedIn />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/sotoj7_" aria-label="Twitter"
            target="_blank" rel="noreferrer"
          >
            <IconTwitter />
          </a>
        </li>
      </ul>
    </div >
  )
}
export default Side;