import "./index.scss";
import AnimatedLetters from "../../components/AnimatedLetters";
import { useInView } from 'react-intersection-observer';
const Contact = () => {

	const [ref, inView, entry] = useInView({ threshold: 0, triggerOnce: true });
	return(
		<section ref={ref} className={inView ? 'contact show' : 'contact hidden'} id="contact">
			<div className="section-title">
					<AnimatedLetters 
						letterClass={'blast-section'}
						isLoaded={true}
						strArray={Array.from("Contact")}
						idx={0}
					/>
			</div>
			<h2>Get in touch</h2>
		</section>
	)
}
export default Contact;