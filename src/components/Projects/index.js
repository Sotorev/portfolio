import { useInView } from "react-intersection-observer";
import AnimatedLetters from '../AnimatedLetters/'
import './index.scss'
import data from '../../projects-data'
import Project from "./Project";
const Projects = () => {
	const [ref, inView, entry] = useInView()
	console.log(Array.from("Some Things I’ve Built."))
	return (
		<section ref={ref} className="projects-section" id="work">
			<div className='section-title'>
				<AnimatedLetters
					letterClass={'blast-section'}
					isLoaded={true}
					strArray={Array.from("Some Things I’ve Built.")}
					idx={0}
				/>
			</div>
			<Project
				name={data.rm.name}
				description={data.rm.description}
				img={data.rm.image}
				url={data.rm.href}
			/>
		</section>	
	);
}

export default Projects;