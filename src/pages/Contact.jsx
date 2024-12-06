import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality to send the message (e.g., using email API or backend)
    setIsSubmitted(true);
  };

  // WhatsApp link
  const whatsappLink = `https://wa.me/6399085419?text=Hello, I have a message for you:`;

  return (
    <div
      className="min-h-screen bg-cover mt-10 bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?nature,water')",
      }}
    >
      <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
        {isSubmitted ? (
          <div className="text-center">
            <p className="text-xl">Thank you for your message!</p>
            <p>We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-6 text-center text-gray-700">
          <p>Email: akhileshbisht2020@gmail.com</p>
          <p>Phone: 6399085419</p>
          <p className="mt-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 font-semibold"
            >
              Chat on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
