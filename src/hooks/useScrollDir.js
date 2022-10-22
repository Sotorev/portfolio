import { useEffect, useState } from "react";

const useScroll = () => {

	const [lastScrollY, setLastScrollY] = useState(0);
	const [scrollDir, setscrollDir] = useState("UP");
	
	useEffect(() => {
		function handleScroll(e) {
			if (window.scrollY == 0) {
				setscrollDir("INITIAL")
			}
			else if (window.scrollY < lastScrollY) {
				setscrollDir("UP");
			}
			else {
				setscrollDir("DOWN");
			}
			setLastScrollY(window.scrollY);
		}
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY])

	return scrollDir;
}

export default useScroll;