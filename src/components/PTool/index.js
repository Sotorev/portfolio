import { useInView } from 'react-intersection-observer';
import './index.scss'

export default function PTool({ Icon, name }) {
	const [ref, inView, entry] = useInView({ threshold: 0.3, triggerOnce: false });

	return (
		<li className={inView ? 'ptool show' : 'ptool hidden'} ref={ref}>
			<div className='container'>
				{<Icon />}
				<h4>{name}</h4>
				
			</div>
			<div className='glow'></div>
		</li>
	);
}