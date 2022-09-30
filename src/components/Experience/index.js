import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useInView } from 'react-intersection-observer';
const Experience = () => {
	const [ref, inView, entry] = useInView({ threshold: 0, triggerOnce: true });
	return (
		<section ref={ref} id="experience" className={inView ? 'experience show' : 'experience hidden'}>
			<div className="section-title">
			<AnimatedLetters
          letterClass={'blast-section'}
          isLoaded={true}
          strArray={Array.from("Experience")}
          idx={0}
        />
			</div>
		</section>
	)
}
export default Experience;