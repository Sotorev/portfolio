import './index.scss';
import AnimattedLetters from '../AnimatedLetters'
export default function SectionTitle({text, inView, animationStr}) {
	return (
		<h3 className={inView ? `section-title show` : `section-title hidden-${animationStr}`}>
			<AnimattedLetters
				letterClass={'blast'}
				isLoaded={true}
				strArray={Array.from(text)}
				idx={0}
			/>
			
		</h3>
	);
} 