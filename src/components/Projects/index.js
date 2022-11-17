import AnimatedLetters from '../AnimatedLetters/'
import './index.scss'
import data from '../../projects-data'
import Project from "./Project";
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../SectionTitle';
const Projects = () => {
	const [ref, inView, entry] = useInView({ threshold: 0.3, triggerOnce: true });
	return (
		<section ref={ref} className="projects-section" id="work">
			<div className={inView ? 'show' : 'hidden'}>
				<SectionTitle
					text="Projects"
				/>
			</div>
			<Project
				name={data.rm.name}
				description={data.rm.description}
				img={data.rm.image}
				url={data.rm.url}
				tools={data.rm.buildingTools}
			/>
		</section>	
	);
}

export default Projects;