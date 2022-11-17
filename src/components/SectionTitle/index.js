import './index.scss';
import AnimattedLetters from '../AnimatedLetters'
export default function SectionTitle({text}) {
	return (
		<h3 className='section-title'>
			<AnimattedLetters
				letterClass={'blast'}
				isLoaded={true}
				strArray={Array.from(text)}
				idx={0}
			/>
			
		</h3>
	);
} 