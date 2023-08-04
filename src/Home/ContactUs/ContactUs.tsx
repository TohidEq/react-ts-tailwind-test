import { useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import * as EmailValidator from "email-validator";

import { AiOutlineMail } from "react-icons/ai";
import { BsCardText } from "react-icons/bs";

function ContactUs() {
  const userEmail = useRef<HTMLInputElement>(null);
  const userText = useRef<HTMLTextAreaElement>(null);
  const [disableForm, setDisableForm] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorTxt, setErrorTxt] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorEmail(!EmailValidator.validate(userEmail.current?.value || ""));
    setErrorTxt(userText.current?.value === "");

    if (!errorEmail && !errorTxt) {
      setDisableForm(false); //set it to TRUE
      // something ...
    }
  };

  return (
    <div className="cntct-us-base">
      <div className="gradient">
        <div className="container mx-auto">
          <div className="cntct-us">
            <div className="">
              <div className="cntct-us-smry">
                <span>Contact Us</span>
                <h1>Contact Us & We Can Work Together</h1>
                <p>
                  Don't miss out on the opportunity to work with a trusted
                  financial service provider that is dedicated to your success.
                  Contact GC Partners today and let us guide you towards a
                  brighter financial future.
                </p>
              </div>

              <form
                action=""
                className="inputs"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <div className="input">
                  <label htmlFor="Email">
                    <AiOutlineMail />
                    Email
                  </label>
                  <input
                    type="text"
                    ref={userEmail}
                    name="email"
                    id="user-email"
                    placeholder="yourmail@gmail.com"
                    disabled={disableForm}
                  />
                  <span className="error-msg">
                    {errorEmail && "Please Enter True Email."}
                  </span>
                </div>

                <div className="input">
                  <label htmlFor="Message">
                    <BsCardText />
                    Message
                  </label>
                  <TextareaAutosize
                    name="message"
                    minRows={6}
                    autoComplete="off"
                    ref={userText}
                    id="user-message"
                    placeholder="Your message..."
                    disabled={disableForm}
                    className="before:hidden after:hidden"
                  />
                  <span className="error-msg">
                    {errorTxt && "Please Enter Something."}
                  </span>
                </div>

                <div className="btns">
                  <button
                    className="btn2 btn"
                    type="submit"
                    disabled={disableForm}
                  >
                    send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
