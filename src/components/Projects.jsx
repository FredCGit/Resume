import './Projects.css';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project">
                <h3>Theatrebook · TheHacktrical 2022</h3>
                <p>
                    • Created a web application that allows users to browse film trailers and information, with the capability for manual updates.
                </p>
                <p>
                    • Implemented using HTML, CSS, and NodeJS.
                </p>
            </div>
            <div className="project">
                <h3>Temperature Controlling Lunchbox · Personal 2021</h3>
                <p>
                    • Created a portable lunchbox with heating and cooling features utilizing a peltier and nichrome wires to allow consumers to heat and cool their food to fend off ambient temperatures.
                </p>
                <p>
                    • Coded C++ scripts on Raspberry Pi connected to peltier to correctly change temperatures of the lunchbox.
                </p>
                <p>
                    • Through multiple iterations of prototyping within a team, communicated and collaborated efficiently to create the product.
                </p>
            </div>
            <div className="project">
                <h3>LED Light Cube · Personal 2020</h3>
                <p>
                    • Constructed an electronic LED light cube that can output a wide range of displays using an Arduino and C.
                </p>
                <p>
                    • Designed a user-friendly UI that allows users to toggle between different programmed patterns.
                </p>
            </div>
        </section>
    );
};

export default Projects;
