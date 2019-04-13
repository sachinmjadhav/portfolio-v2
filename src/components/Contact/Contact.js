import React from "react";
import "./Contact.css";
import contactList from "../../data/contacts.json";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="text-center">CONTACT</h2>
      <div className="row text-center section-content">
        {contactList.map(contact => (
          <div className="col-sm-2" key={contact.url}>
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-social-icon"
              title={`External Link to my ${contact.name} account`}
            >
              <span
                className={`fa fa-${contact.icon} contact_icon`}
                alt={`External Link to my ${contact.name} account`}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
