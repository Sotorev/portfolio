import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useInView } from 'react-intersection-observer';
const Experience = () => {
	const [ref, inView, entry] = useInView({ threshold: .3, triggerOnce: true });
	return (
		<section ref={ref} id="experience" className="experience">
			<div className={inView ? 'section-title show' : 'section-title hidden'}>
				<AnimatedLetters
					letterClass={'blast-section'}
					isLoaded={true}
					strArray={Array.from("Experience")}
					idx={0}
				/>
      </div>
			<div className={inView ? 'experience-content show' : 'experience-content hidden'}>
        <ul>
          <li>Free lancer Web developer 2021-2022</li>
        </ul>
      </div>
		</section>
	)
}
export default Experience;