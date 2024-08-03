import './Experience.css';
import laptopImage from '../assets/Laptop.png';
import laptopImage2 from '../assets/Laptop2.png';

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="experience-item">
                <h3>Web developer at Canhwa Signs & Awning</h3>
                <p className="date">Jan 2023 - Jan 2024</p>
                <ul>
                    <li>Developed web applications using React/Node.js/css</li>
                    <li>Previously maintained different project using wordpress with html and css</li>
                </ul>
                <div className="project-showcase">
                    <div className="laptop-container">
                        <img src={laptopImage} alt="Laptop" className="laptop-image" />
                    </div>
                    <p className="project-description">
                        Check out one of the websites I worked on, showcasing the user interface and functionalities of the application.
                    </p>
                    <a href="https://www.canhwasigns.ca" target="_blank" rel="noopener noreferrer" className="project-link">
                        View Website
                    </a>
                </div>
            </div>
            <div className="experience-item">
                <h3>Web developer at Jin Wei Kitchen</h3>
                <p className="date">Jan 2024 - June 2024</p>
                <ul>
                    <li>Developed web applications using React/Node.js/css</li>
                    <li>Participated in reviews and agile development processes.</li>
                </ul>
                <div className="project-showcase">
                    <div className="laptop-container">
                        <img src={laptopImage2} alt="Laptop" className="laptop-image" />
                    </div>
                    <p className="project-description">
                        Check out one of the website I worked on, showcasing the conceptualization provided by my employer to life.
                    </p>
                    <a href="https://www.jinweikitchen.com" target="_blank" rel="noopener noreferrer" className="project-link">
                        View Website
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Experience;
