import React from "react";
import "./ContactUs.sass";

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or inquiries, please feel free to reach out to
        us.
      </p>
      <div className="contact-us__details">
        <h2>Email</h2>
        <p>
          <a href="mailto:sunpowerindonesia98@gmail.com">
            sunpowerindonesia98@gmail.com
          </a>
        </p>
        <h2>Phone</h2>
        <p>
          <a href="tel:+6281234567890">+62 812-3456-7890</a>
        </p>
        <h2>Address</h2>
        <p>Jl. Raya No. 123, Jakarta, Indonesia</p>
        <h2>Social Media</h2>
        <p>
          <a
            href="https://www.instagram.com/sunpower_genset/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
        <p>
          <a
            href="https://www.facebook.com/sunpower_genset"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </p>
        <p>
          <a
            href="https://www.twitter.com/sunpower_genset"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/company/sunpower_genset"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <div className="contact-us__form">
        <h2>Contact Form</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              const nameInput = document.getElementById(
                "name"
              ) as HTMLInputElement | null;
              const emailInput = document.getElementById(
                "email"
              ) as HTMLInputElement | null;
              const messageInput = document.getElementById(
                "message"
              ) as HTMLTextAreaElement | null;
              alert(
                "Thank you for your message!, your message is: " +
                  `\nName: ${nameInput?.value}` +
                  `\nEmail: ${emailInput?.value}` +
                  `\nMessage: ${messageInput?.value}`
              );
            }}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
