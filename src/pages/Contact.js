import React from 'react';

function Contact() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form className="grid gap-4 max-w-md">
        <input type="text" placeholder="Your Name" className="border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="border p-2 rounded" />
        <textarea placeholder="Your Message" className="border p-2 rounded" rows="5"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
