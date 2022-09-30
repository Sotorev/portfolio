import "./index.scss";
import AnimatedLetters from "../../components/AnimatedLetters";
const Contact = () =>{
	return(
		<section className="contact" id="contact">
			<div className="section-title">
					<AnimatedLetters 
						letterClass={'blast-section'}
						isLoaded={true}
						strArray={Array.from("Contact")}
						idx={0}
					/>

			</div>
		</section>
	)
}
export default Contact;