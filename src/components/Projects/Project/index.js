import { useInView } from 'react-intersection-observer';
import './index.scss'
const Project = ({ img, name, url, description, tools }) => {
	const [ref, inView, entry] = useInView();
	return (
		<li ref={ref} className="project">
			<div className="project-content">
				<h3 className='project-title'>
					<a href={url} target="_blank">{name}</a>
				</h3>
				<div className='project-description'>
					<p>{description}</p>
				</div>
				<ul className='project-tech-list'>
					{tools.map((tool, idx) => <li key={idx}>
						{tool}
					</li>)}
				</ul>
			</div>
			<a className='project-image' href={url} target="_blank">
				<img src={img} />
			</a>
		</li>
	);
}
export default Project;