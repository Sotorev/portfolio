import { useInView } from 'react-intersection-observer';
import './index.scss'
const Project = ({ img, name, url, description, tools }) => {
	const [ref, inView, entry] = useInView();
	return (
		<article ref={ref} className="project">
			<div className="project-content">
				<div>
					<a className='project-title' href={url} target="_blank">{name}</a>
					<div className='project-description'>
						<p>{description}</p>
					</div>
					<ul className='project-tech-list'>
						{tools.map((tool, idx) => <li key={idx}> 
							{tool}
						</li>)}
					</ul>
				</div>
			</div>
			<a className='project-image' href={url} target="_blank">
				<img src={img} />
			</a>
		</article>
	);
}
export default Project;