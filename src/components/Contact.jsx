import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!accessKey) {
      setStatusMessage('Missing Web3Forms access key. Set VITE_WEB3FORMS_ACCESS_KEY in your .env file.');
      return;
    }
    setIsSubmitting(true);
    setStatusMessage('');
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setStatusMessage('Message sent successfully!');
        event.target.reset();
      } else {
        setStatusMessage(res.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setStatusMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
      <h4 className="text-center mb-2 text-lg font-0vo">Connect with me</h4>
      <h2 className="text-center text-5xl font-0vo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-0vo">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
      </p>

      <div className="flex flex-col lg:flex-row items-start gap-10 my-10">
        <div className="flex-1">
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <div className="flex gap-6">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              />
            </div>
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              rows="6"
              className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
            ></textarea>
            <button
              type="submit"
              className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit now'}
              <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
            </button>
            {statusMessage && (
              <p className="text-center text-sm text-gray-700 dark:text-gray-300">{statusMessage}</p>
            )}
          </form>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <img src="./assets/mail_icon.png" alt="" className="w-7 mt-1 dark:hidden" />
            <img src="./assets/mail_icon_dark.png" alt="" className="w-7 mt-1 hidden dark:block" />
            <div>
              <h3 className="font-medium text-lg">Email</h3>
              <a href="mailto:atulkoshtag@gmail.com" className="text-gray-600 dark:text-white/80 hover:text-blue-600">
                atulkoshtag@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src="./assets/location_icon.png" alt="" className="w-7 mt-1 dark:hidden" />
            <img src="./assets/location_icon_dark.png" alt="" className="w-7 mt-1 hidden dark:block" />
            <div>
              <h3 className="font-medium text-lg">Location</h3>
              <p className="text-gray-600 dark:text-white/80">Jabalpur, Madhya Pradesh, India</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src="./assets/linkedin_icon.png" alt="" className="w-7 mt-1 dark:hidden" />
            <img src="./assets/linkedin_icon_dark.png" alt="" className="w-7 mt-1 hidden dark:block" />
            <div>
              <h3 className="font-medium text-lg">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/atul-koshta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-white/80 hover:text-blue-600"
              >
                linkedin.com/in/atul-koshta
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src="./assets/code_icon.png" alt="" className="w-7 mt-1 dark:hidden" />
            <img src="./assets/code_icon_dark.png" alt="" className="w-7 mt-1 hidden dark:block" />
            <div>
              <h3 className="font-medium text-lg">Experience</h3>
              <p className="text-gray-600 dark:text-white/80">15+ Years in .NET & Mobile Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
