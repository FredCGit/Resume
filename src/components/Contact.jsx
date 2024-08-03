import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-content">
                <h2>Contact Me</h2>
                <p>If you have any questions or would like to get in touch, please fill out the form below:</p>
                <form action="https://formspree.io/f/your-form-id" method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="6" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
