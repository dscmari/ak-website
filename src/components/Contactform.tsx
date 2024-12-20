import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contactform() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAIL_USER_ID;

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey: userId,
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.log("Form reference is null");
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-white flex flex-col gap-4 p-4 md:w-1/2 mx-auto lg:text-xl rounded-md"
    >  
    <h2>Kontaktformular</h2>
      <div className="flex flex-col">
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Name" className="p-2 border-2"/>
      </div>
      <div className="flex flex-col">
        <label>Email</label>
        <input type="email" name="user_email" placeholder="Email" className="p-2 border-2"/>
      </div>
      <div className="flex flex-col">
        <label>Message</label>
        <textarea name="message" placeholder="Nachricht" className="p-2 border-2"/>
      </div>
      <div>
        <input
          type="submit"
          value="Send"
          className="p-2 px-6 rounded block mx-auto bg-primary text-white cursor-pointer"
        />
      </div>
    </form>
  );
}
