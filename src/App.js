// import logo from './logo.svg';
import './App.scss';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Leftside from './components/Leftside';
import Rightside from './components/Rightside';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">

      <Navbar />
      <Leftside />
      <Rightside />
      <Intro />
      <About  />
      <Experience/>
      <Contact />
    </div>
  );
}

export default App;
