import './index.scss'

export default function PTool({ Icon, name }) {
	return (
		<li className="ptool">
			{<Icon />}
			<h4>{name}</h4>
		</li>
	);
}