import { useState, useEffect } from "react"

const ContactContainer = () => {
  const [email, setEmail] = useState("")
  const [isValid, setIsValid] = useState(true)

  useEffect(() => {
    if (!isValid) {
      setTimeout(() => setIsValid(true), 20000)
    }
  }, [isValid])

  const validateEmail = (val: string) => {
    const emailRegEx = /\S+@\S+\.\S+/
    return emailRegEx.test(val) && !!val
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValid = validateEmail(email)

    setIsValid(isValid)
  }

  return (
    <section>
      <div className="contacts-wrapper">
        <div className="contacts-container">
          <div className="contacts-container--joined">
            35,000+ Already joined
          </div>
          <div className="contacts-container--stay-up">
            Stay up-to-date with what we`re doing
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <button>Contact Us</button>
            {/* {!isValid && ( */}
            <>
              <span className="error"></span>
              <div className="error-msg">Whoops, make sure it`s an email</div>
            </>
            {/* )} */}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactContainer
