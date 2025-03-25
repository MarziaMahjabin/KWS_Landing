import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-full max-w-md"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-white text-lg font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-[#0B174B] border border-[#913BFF] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#913BFF]"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-white text-lg font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-[#0B174B] border border-[#913BFF] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#913BFF]"
          placeholder="Your email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-white text-lg font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="bg-[#0B174B] border border-[#913BFF] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#913BFF] resize-none"
          placeholder="Your message"
        />
      </div>

      <button
        type="submit"
        className="bg-[#913BFF] text-white font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 mt-4"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
