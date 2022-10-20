import './index.scss'

const AnimatedLetters = ({letterClass,strArray, idx, isLoaded }) => {

  return (
    <>
      {
        strArray.map((char, i) => (
          <span
            onAnimationEnd={(e) => e.target.className = letterClass}
            onMouseOver={(e) => {
              if(isLoaded)
                e.target.className =` ${letterClass} animated rubberband`
            }}
            key={char + i}
            className={`${letterClass} _${i + idx}`} >
            {char}
          </span>
        ))
      }
    </>
  )
};
export default AnimatedLetters