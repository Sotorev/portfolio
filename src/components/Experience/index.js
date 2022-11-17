import "./index.scss";
import { useInView } from 'react-intersection-observer';
import SectionTitle from "../SectionTitle";
const Experience = () => {
	const [ref, inView, entry] = useInView({ threshold: .3, triggerOnce: true });
	return (
		<section ref={ref} id="experience" className="experience">
			<div className={inView ? 'show' : 'hidden'}>
				<SectionTitle
					text="Experience"
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