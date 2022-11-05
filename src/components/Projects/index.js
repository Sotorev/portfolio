import AnimatedLetters from '../AnimatedLetters/'
import './index.scss'
import data from '../../projects-data'
import Project from "./Project";
import { useInView } from 'react-intersection-observer';
const Projects = () => {
	const [ref, inView, entry] = useInView();
	return (
		<section ref={ref} className="projects-section" id="work">
			<div className={inView ? "section-title show" : "section-title hidden"}>
				<AnimatedLetters
					letterClass={'blast-section'}
					isLoaded={true}
					strArray={Array.from("SomeThingsI’veBuilt.")}
					idx={0}
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