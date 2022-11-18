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
			<ul>
				{
					data.map((project, idx) => 
						<Project
								key={idx}
								name={project.name}
								description={project.description}
								img={project.image}
								url={project.url}
								tools={project.buildingTools}
						/>
					)
				}
			</ul>
		</section>
	);
}

export default Projects;