import Loader from 'react-loaders'

import './index.scss'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_z4x1kcc',
        'template_z1sy47v',
        e.target,
        'FWX0PEsQrtPVUpbiN'
      )
      .then(
        () => {
          alert('Message successfully sent')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message,please try again')
        }
      )
  }

  return (
    <div>
      <div className=" contact-page">
        <div className="text-zone">
          <div>
            <h1>
              <AnimatedLetters
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                idx={15}
              />
            </h1>
            <p>I hope to hear from you soon. Please feel fee to contact me.</p>
          </div>{' '}
          <Loader type="pacman" />{' '}
          <form
            className="contact-form"
            style={{ margin: '25px 85px 75px 100px' }}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
            />

            <input
              type="email"
              name="user_mail"
              className="form-control"
              placeholder="Email"
            />

            <textarea
              name="message"
              rows="4"
              className="form-control"
              placeholder="Message"
            />
            <input
              type="submit"
              value="Send"
              className="form-control btn btn-primary"
              style={{ marginTop: '30px' }}
            />
          </form>
        </div>{' '}
      </div>
    </div>
  )
}

export default Contact
