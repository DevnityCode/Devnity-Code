import React, { useState, useEffect } from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../animation/done.json";
import emailAnimation from "../animation/email.json";
const Contact = () => {
  const [state, handleSubmit, reset] = useForm("xwpbnzke");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Clear inputs and show success message on successful submission
  useEffect(() => {
    if (state.succeeded) {
      setEmail("");
      setMessage("");
      setShowSuccessMessage(true);

      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
        reset(); // Reset form state after hiding success message
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  // Hide success message if user starts typing again
  useEffect(() => {
    if (showSuccessMessage && (email !== "" || message !== "")) {
      setShowSuccessMessage(false);
    }
  }, [email, message, showSuccessMessage]);

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact Us for more information and Get notified when I publish
        something new.
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message</label>
            <textarea
              required
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {showSuccessMessage && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem", color: "white" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully.
            </p>
          )}
        </form>

        <div className="animation ">
          {" "}
          <Lottie
            className="contact-animation"
            style={{ height: 400 }}
            animationData={emailAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
