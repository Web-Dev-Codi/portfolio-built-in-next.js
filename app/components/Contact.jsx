



export default function Contact() {
  return (
    <div>
        <div className="form_wrapper" id="contact">
            <h3 className="contact">Contact</h3>
            <form id="form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" minLength="3" maxLength="30" placeholder="Name" autoComplete="true" required />
                </div>
                <div>
                    <label htmlFor="email">Email address </label>
                    <input type="email" name="email" id="email" placeholder="Email" autoComplete="true" required />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="5" placeholder="Leave a message for a quick response." required ></textarea>
                </div>
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    </div>
  )
}
