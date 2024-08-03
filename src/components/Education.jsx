import './Education.css';
import schoolIcon from '../assets/seeker_job_attachments.png'


const Education = () => {
    return (
        <section id="education">
            <h2>Education</h2>
            <div className="education-item">
                <div className="education-info">
                    <img src={schoolIcon} alt="School Icon" className="school-icon" />
                    <h3>Simon Fraser University</h3>
                    <p>Bachelor of Science in Software Systems</p>
                </div>
            </div>
        </section>
    );
};

export default Education;
