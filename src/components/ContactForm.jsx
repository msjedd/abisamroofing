import { useState } from "react";

const ContactForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
        e.target.reset();
      })
      .catch((error) => console.error("Submission error:", error))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="w-full h-full p-6 border border-white/30 backdrop-blur-lg bg-primary/10 shadow-lg rounded-lg flex flex-col">
      <h2 className="text-2xl font-bold text-primary mb-4">
        Please fill in your details
      </h2>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="space-y-4 flex-grow"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />

        <label className="text-primary font-medium">Your Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full p-2 bg-transparent border border-white/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <label className="text-primary font-medium">WhatsApp Number</label>
        <input
          type="tel"
          name="whatsappNumber"
          required
          className="w-full p-2 bg-transparent border border-white/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <label className="text-primary font-medium">Your Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full p-2 bg-transparent border border-white/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <label className="text-primary font-medium">Your Message</label>
        <textarea
          name="message"
          required
          className="w-full p-2 bg-transparent border border-white/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>

        <button
          type="submit"
          className={`w-full py-2 mt-2 text-light bg-secondary rounded-md transition transform hover:scale-105 active:scale-95 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {showPopup && (
        <div className="absolute bottom-4 right-4 bg-dark text-white px-4 py-2 rounded shadow-md">
          Message Sent Successfully!
        </div>
      )}
    </div>
  );
};

export default ContactForm;
