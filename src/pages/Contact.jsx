import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        // ... (truncated for brevity, keep existing logic)
        e.preventDefault();
        setIsLoading(true);
        setStatus(null);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // 1. Send Notification to Admin
        const sendNotification = emailjs.sendForm(serviceId, templateId, form.current, { publicKey });

        // 2. Send Auto-Reply to User (if ID exists)
        const sendAutoReply = autoReplyTemplateId
            ? emailjs.sendForm(serviceId, autoReplyTemplateId, form.current, { publicKey })
            : Promise.resolve();

        Promise.all([sendNotification, sendAutoReply])
            .then(
                () => {
                    setStatus('success');
                    form.current.reset();
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setStatus('error');
                },
            )
            .finally(() => {
                setIsLoading(false);
                setTimeout(() => setStatus(null), 5000);
            });
    };

    return (
        <div className="pt-40 pb-20 px-4 md:px-20 container mx-auto min-h-screen flex items-center justify-center">
            <SEO
                title="Contact Us"
                description="Get in touch with Jengset Dev Group for your next project."
            />
            <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>

                <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">Get in Touch</h1>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <input type="hidden" name="title" value="General Inquiry" />
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Name</label>
                        <input name="user_name" type="text" required className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:border-yellow-400 focus:bg-white dark:focus:bg-gray-600 focus:outline-none transition-colors" placeholder="Your Name" />
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email</label>
                        <input name="user_email" type="email" required className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:border-yellow-400 focus:bg-white dark:focus:bg-gray-600 focus:outline-none transition-colors" placeholder="your@email.com" />
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Message</label>
                        <textarea name="message" required className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:border-yellow-400 focus:bg-white dark:focus:bg-gray-600 focus:outline-none transition-colors h-32" placeholder="Say hello!"></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full font-bold py-4 rounded-lg transition-all duration-300 ${isLoading ? 'bg-gray-400 cursor-not-allowed text-gray-200' : 'bg-black dark:bg-yellow-500 text-white dark:text-black hover:bg-gray-800 dark:hover:bg-yellow-400 hover:shadow-lg'}`}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>

                </form>
            </div>

            {/* Toast Notification */}
            <AnimatePresence>
                {status && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: 50 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: 50, x: 50 }}
                        className={`fixed bottom-8 right-8 z-50 px-6 py-4 rounded-xl shadow-2xl border flex items-center gap-3 ${status === 'success'
                            ? 'bg-white dark:bg-gray-800 border-green-500 text-green-600 dark:text-green-400'
                            : 'bg-white dark:bg-gray-800 border-red-500 text-red-600 dark:text-red-400'
                            }`}
                    >
                        {status === 'success' ? (
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        ) : (
                            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        )}
                        <div>
                            <h4 className="font-bold text-sm md:text-base">
                                {status === 'success' ? 'Message Sent!' : 'Delivery Failed'}
                            </h4>
                            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                {status === 'success'
                                    ? "We'll get back to you shortly."
                                    : "Please try again later."}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Contact;
