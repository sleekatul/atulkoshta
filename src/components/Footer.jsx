export default function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <img src="./assets/logo.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
        <img src="./assets/logo_dark.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />

        <div className="w-max flex items-center gap-2 mx-auto">
          <img src="./assets/mail_icon.png" alt="" className="w-6 dark:hidden" />
          <img src="./assets/mail_icon_dark.png" alt="" className="w-6 hidden dark:block" />
          <a href="mailto:atulkoshtag@gmail.com">atulkoshtag@gmail.com</a>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2026 Atul Koshta. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/atul-koshta/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:atulkoshtag@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </div>
  );
}