//import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import {About, Experience, Projects} from './components/sections';
import Reveal from './animation/Reveal';

function App() {
  return (
    <><Reveal>
      <div className='container'>
        <div>
          <Header />
          <main>
            
            <About />
            
            <Experience />
            <Projects />
          </main>
        </div>
      </div>
    </Reveal></>
  );
}

export default App;
