"use client";
import { useState } from "react";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";

const faqs = [
  {
    question: "What is GaadiCab car rental company?",
    answer:
      "GaadiCab is a trusted outstation car rental service provider offering reliable rides across India.",
  },
  {
    question: "Why should I book through GaadiCab?",
    answer:
      "We offer transparent pricing, professional drivers, clean vehicles, and 24x7 support.",
  },
  {
    question: "How do I book on GaadiCab?",
    answer:
      "You can book via our website www.gaadicab.com, our Android App, or call us at +91 9665703666.",
  },
  {
    question: "What are the different modes of payment you support?",
    answer:
      "We support multiple payment options including UPI, net banking, credit/debit cards, and wallets.",
  },
  {
    question:
      "Is it safe to use my credit/debit card on your site? Do you store my card number and details?",
    answer:
      "Yes, it’s completely safe. We use Razorpay and PayPal gateways with SSL encryption. GaadiCab does not store your card details.",
  },
  {
    question: "Can I change or cancel the booking?",
    answer:
      "Yes, you can modify or cancel bookings as per our cancellation policy. Check the terms on our website.",
  },
];

export default function ContactFAQuestionsSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const toggleIndex = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="w-full min-h-screen bg-[#0F0F0F] text-white px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl">
        {/* LEFT: CONTACT FORM */}
        <div className="flex flex-col sm:gap-1">
          <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-semibold leading-tight  mt-3">
            Contact{" "}
            <span className="text-[#26CC6B] text-4xl sm:text-6xl md:text-7xl">
              GaadiCab
            </span>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-5 p-5 sm:p-6 border border-dashed border-white/50 -2xl mt-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 -md border border-dashed border-white/40 focus:border-[#DD9FFE] outline-none bg-transparent text-white placeholder-gray-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 -md border border-dashed border-white/40 focus:border-[#DD9FFE] outline-none bg-transparent text-white placeholder-gray-400"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3 -md border border-dashed border-white/40 focus:border-[#DD9FFE] outline-none bg-transparent text-white placeholder-gray-400"
            />

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="p-3 -md bg-transparent border border-dashed border-white/40 focus:border-[#DD9FFE] outline-none text-white placeholder-gray-400"
            >
              <option value="" disabled className="bg-black">
                Select Subject
              </option>
              <option className="bg-[#0F0F0F]" value="Cab Booking">
                Cab Booking
              </option>
              <option className="bg-[#0F0F0F]" value="Booking Modification">
                Booking Modification
              </option>
              <option className="bg-[#0F0F0F]" value="Refund or Cancellation">
                Refund or Cancellation
              </option>
              <option className="bg-[#0F0F0F]" value="Driver Complaint">
                Driver Complaint / Misbehavior
              </option>
              <option className="bg-[#0F0F0F]" value="Corporate Inquiry">
                Corporate Inquiry
              </option>
              <option className="bg-[#0F0F0F]" value="Other">
                Other
              </option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 -md border border-dashed border-white/40 focus:border-[#DD9FFE] outline-none bg-transparent text-white placeholder-gray-400 resize-none"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 border border-dashed border-[#26CC6B] text-[#26CC6B] hover:text-black hover:bg-[#26CC6B] py-3 font-medium -md transition-all duration-300"
            >
              Send Message <FaArrowRight />
            </button>
          </form>
        </div>

        {/* RIGHT: FAQ SECTION */}
        <div className="flex flex-col">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold  leading-tight">
            <span className="text-[#26CC6B]">F A </span>Questions
          </h2>

          <div className="flex flex-col gap-3 sm:gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 border border-dashed border-white/30 hover:border-[#DD9FFE]/80 transition-all duration-300 cursor-pointer -xl"
                onClick={() => toggleIndex(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-base sm:text-lg md:text-xl font-medium">
                    {faq.question}
                  </h4>
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      activeIndex === index
                        ? "rotate-180 text-[#DD9FFE]"
                        : "text-white/70"
                    }`}
                  />
                </div>

                {activeIndex === index && (
                  <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
