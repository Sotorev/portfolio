import './index.scss'
const Project = ({ img, name, url, description }) => {
	return (
		<article className="project">
			{/* <a className='project-image' href={url} target="_blank">
					<img src={img} />
				</a> */}
			<div className="project-info">
					<h2>{name}</h2>
					<p>{description}</p>
			</div>
		</article>
	);
}
export default Project;