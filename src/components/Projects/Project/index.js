import { useInView } from 'react-intersection-observer';
import './index.scss'
const Project = ({ img, name, url, description }) => {
	const [ref, inView, entry] = useInView();

	return (
		<article ref={ref} className="project">
			<div className="project-content">
				<div>
					<h2 className='project-title'>{name}</h2>
					<div className='project-description'>
						<p>{description}</p>
					</div>
					<ul className='project-tech-list'>
						<li>React</li>
						<li>React Router</li>
						<li>Styled Components</li>
						<li>Serie API</li>
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