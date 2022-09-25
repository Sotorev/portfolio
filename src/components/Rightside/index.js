import './index.scss'

const RightSide = () => {
  return (
    <div className='right-side animate-sides'>
      <div className='column-mode'>
        <a href='mailto:sotorev7@gmail.com' 
          onMouseEnter={(e) => e.target.className= 'animated social'}
          onAnimationEnd={(e) => e.target.className = ''}
        >
          sotorev7@gmail.com
        </a>
      </div>
    </div>
  )
}
export default RightSide;