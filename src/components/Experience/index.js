import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
const Experience = () => {
	return (
		<section id="experience" className="experience">
			<div className="section-title">
			<AnimatedLetters
          letterClass={'blast-section'}
          isLoaded={true}
          strArray={Array.from("Experience")}
          idx={0}
        />
			</div>
		</section>
	)
}
export default Experience;