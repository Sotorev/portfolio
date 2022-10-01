import "./index.scss";
import AnimatedLetters from "../../components/AnimatedLetters";
import { useInView } from 'react-intersection-observer';
const Contact = () => {

	const [ref, inView, entry] = useInView({ threshold: 0, triggerOnce: true });
	return(
		<section ref={ref} className={inView ? 'contact show' : 'contact hidden'} id="contact">
			<h2>Get In Touch</h2>
			<a href='mailto:manrev@umes.edu.gt'>Say Hello</a>
		</section>
	)
}
export default Contact;