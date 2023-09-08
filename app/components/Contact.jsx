export default function Contact() {
  return (
    <div>
        <div className="form_wrapper" id="contact">
            <h3 className="contact">Contact</h3>
            <form id="form" method="POST" action="/success">
                <div>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" minlength="3" maxlength="30" placeholder="Name"
                    aria-describedby="name-validation" autocomplete="true" required />
                    <span id="name-validation" aria-live="assertive" className="validation-message"></span>
                </div>
                <div>
                    <label for="email">Email address </label>
                    <input type="email" name="email" id="email" placeholder="Email" aria-describedby="email-validation"
                   autocomplete="true" required />
                    <span id="email-validation" aria-live="assertive" className="validation-message"></span>
                </div>
                <div>
                    <label for="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="5"
                    placeholder="Leave a message for a quick response."></textarea>
                </div>
                <button type="submit" value="Submit" className="submit_button" id="modal-submit">Submit</button>

            </form>
        </div>
    </div>
  )
}
