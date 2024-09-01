const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <label>Name:</label>
                <input type="text" name="name" required />
                <br />
                <label>Email:</label>
                <input type="email" name="email" required />
                <br />
                <label>Message:</label>
                <textarea name="message" rows="4" required />
                <br />
                <input type="submit" value="Submit" />
                <br />
                <small>We'll send a confirmation email to your provided email address.</small>
            </form>
        </div>
    );
}
export default Contact;