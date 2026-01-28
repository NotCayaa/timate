const Contact = () => {
    return (
        <div className="pt-40 pb-20 px-4 md:px-20 container mx-auto min-h-screen flex items-center justify-center">
            <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>

                <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">Get in Touch</h1>

                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:border-yellow-400 focus:bg-white dark:focus:bg-gray-600 focus:outline-none transition-colors" placeholder="Your Name" />
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:border-yellow-400 focus:bg-white dark:focus:bg-gray-600 focus:outline-none transition-colors" placeholder="your@email.com" />
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Message</label>
                        <textarea className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:border-yellow-400 focus:bg-white dark:focus:bg-gray-600 focus:outline-none transition-colors h-32" placeholder="Say hello!"></textarea>
                    </div>

                    <button className="w-full bg-black dark:bg-yellow-500 text-white dark:text-black font-bold py-4 rounded-lg hover:bg-gray-800 dark:hover:bg-yellow-400 transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
