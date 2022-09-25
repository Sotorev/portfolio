import './index.scss';
import imageProfile from '../../assets/images/profile.jpg'
import AnimatedLetters from '../AnimatedLetters';

const About = () => {
  return (
    <section className='about' id='about' data-aos="fade-up">
      <div className='section-title'>
        <AnimatedLetters
          letterClass={'blast-section'}
          isLoaded={true}
          strArray={Array.from("About")}
          idx={0}
        />
      </div>
      <div className='about-info'>
        <div className='text about-text'>
          <p >
            Hello!, My name is Manuel and I enjoy creating things
            that live on the internet. My interest in web development
            started back in 2018 when I decided to try creating fandom webpages.

            My main focus these days is building accesible, inclusive products and digital
            experiences.
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul>
            <li>Javascript ES6+</li>
            <li>React</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>

        <div className='profile-pic wrapper'>
          <img src={imageProfile} alt='my-profile' />
        </div>
      </div>
    </section>
  )
}
export default About;