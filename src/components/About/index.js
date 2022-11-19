import './index.scss';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../SectionTitle';
import IconPython from '../../assets/icons/python'
import IconJavascript from '../../assets/icons/javascript';
import IconTypescript from '../../assets/icons/typescript';
import IconReact from '../../assets/icons/react';
import PTool from '../PTool';

const About = () => {
  const [ref, inView, entry] = useInView({ threshold: [0.3], triggerOnce: false });
  return (
    <section ref={ref} className='about' id='about'>
      <SectionTitle
        text="About"
        inView={inView}
        animationStr="slide"
      />
      <div className={inView ? 'about-info' : 'about-info'}>
        <div className='text about-text'>
          <p className={inView ? 'show' : 'hidden'}>
            Hello!, My name is Manuel and I enjoy creating things
            that live on the internet. My interest in web development
            started back in 2018 when I decided to try creating fandom webpages.

            My main focus these days is building accesible, inclusive products and digital
            experiences.
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
          </p>
        </div>
        <ul className='tech-list'>
          <PTool
            Icon={IconReact}
            name={"React"}
          />
          <PTool
            Icon={IconJavascript}
            name={"Javascript (ES6+)"}
          />
          <PTool
            Icon={IconTypescript}
            name={"Typescript"}
          />
          <PTool
            Icon={IconPython}
            name={"Python"}
          />
        </ul>
      </div>
    </section>
  )
}
export default About;