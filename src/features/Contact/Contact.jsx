import { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaPhoneAlt, FaUndo } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { sendContactMessage } from "./contactService";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const result = await sendContactMessage(formData);

            if (result.success) {
                setSubmitStatus({ type: "success", message: "Message sent successfully!" });
                setFormData({ name: "", email: "", message: "" }); // Reset form
            } else {
                setSubmitStatus({ type: "error", message: "Failed to send message. Please try again." });
            }
        } catch (error) {
            setSubmitStatus({ type: "error", message: "An error occurred. Please try again.", error: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitStatus(null);
    };

    return (
        <section id="contact" className="w-full py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
                        Get In <span className="text-blue-600">Touch</span>
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                        Have a project in mind or want to discuss opportunities? Feel free
                        to reach out!
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 justify-center items-center">
                    <div className="w-full lg:w-2/5 space-y-6">
                        <div className="bg-slate-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                    <FaPhoneAlt className="text-blue-600 dark:text-blue-400 text-xl" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Phone</h2>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Reach out directly</p>
                                </div>
                            </div>
                            <a href="tel:+8801759544204" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg font-medium">
                                +880 1759 544204
                            </a>
                        </div>

                        <div className="bg-slate-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                                    <FaEnvelope className="text-red-600 dark:text-red-400 text-xl" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Email</h2>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Send me a message</p>
                                </div>
                            </div>
                            <a href="mailto:mail@neamul.awsapps.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg font-medium">
                                mail@neamul.awsapps.com
                            </a>
                        </div>

                        <div className="bg-slate-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                                    <MdLocationOn className="text-green-600 dark:text-green-400 text-2xl" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Location</h2>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Based in Bangladesh</p>
                                </div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
                                Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/5">
                        <div className="bg-slate-100 dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                Send Me a Message
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Fill out the form below and I&apos;ll get back to you as soon as possible.
                            </p>

                            {submitStatus && (
                                <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === "success"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"}`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                            Your Name *
                                        </label>
                                        <input id="name" type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} className="w-full p-4 bg-white dark:bg-gray-700 rounded-lg outline-none border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-gray-900 dark:text-gray-100" required />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                            Your Email *
                                        </label>
                                        <input id="email" type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} className="w-full p-4 bg-white dark:bg-gray-700 rounded-lg outline-none border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-gray-900 dark:text-gray-100" required />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                        Your Message *
                                    </label>
                                    <textarea id="message" name="message" cols="30" rows="6" placeholder="Type your message here..." value={formData.message} onChange={handleChange} className="w-full p-4 bg-white dark:bg-gray-700 rounded-lg outline-none border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-gray-900 dark:text-gray-100" required
                                    ></textarea>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                    <button type="submit" disabled={isSubmitting} className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 px-6 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg disabled:cursor-not-allowed">
                                        {isSubmitting ? ("Sending...") : (
                                            <>
                                                <FaPaperPlane />
                                                Send Message
                                            </>
                                        )}
                                    </button>

                                    <button type="button" onClick={handleReset} className="flex-1 flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 py-4 px-6 rounded-lg font-medium transition-colors duration-200">
                                        <FaUndo />
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;