// import logo from './logo.svg';
import './App.scss';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Leftside from './components/Leftside';
import Rightside from './components/Rightside';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact'
import AOS from "aos";
import "aos/dist/aos.css"

function App() {
  const booleaTest = false;
  AOS.init({once:true})
  return (
    <div className="App">

      <Navbar />
      <Leftside />
      <Rightside />
      {/* <Intro />
      <About />
      <Experience/>
      <Contact/> */}
    </div>
  );
}

export default App;
