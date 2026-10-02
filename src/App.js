//import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import {About, Experience, Projects} from './components/sections';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
