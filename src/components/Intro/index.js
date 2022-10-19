import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'



const Intro = () => {

  const intro = Array.from("Hi,");
  const name = Array.from("I'm Manuel, ");
  const rol = Array.from("software engineer.")
  const [letterClass, setLetterClass] = useState("blast animated bounce");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
          setIsLoaded(true);
          setLetterClass("blast")
        }, 3500);
  }, [])
  return (
    <div className='intro'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={intro}
            idx={5}
            isLoaded={isLoaded}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={name}
            idx={8}
            isLoaded={isLoaded}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={rol}
            idx={7 + name.length}
            isLoaded={isLoaded}
          />
        </h1>
      </div>
      <p className='slideInUp'>
        I'm a software engineer specializing in data science and building web apps.
        <br/>Currently, I'm focused on building accesible, human-centered
        products at Lucrev.
      </p>
    </div>
  )
}
export default Intro