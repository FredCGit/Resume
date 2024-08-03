import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import MainSection from './components/MainSection'; 
import './App.css';
import Projects from './components/Projects';

function App() {
    return (
        <div className="App">
            <MainSection />
            <main>
                <Experience />
                <Projects />
                <Education />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
