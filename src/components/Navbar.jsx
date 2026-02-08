import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const navLinks = useRef();
  const navMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sideMenuRef.current &&
        navMenuRef.current &&
        !sideMenuRef.current.contains(e.target) &&
        !navMenuRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden ${
          isScroll ? 'bg-image' : ''
        }`}
      ></div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''
        }`}
      >
        <div className="text-2xl font-bold cursor-pointer mr-14 dark:text-white">Atul Koshta</div>

        <ul
          ref={navLinks}
          className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-0vo dark:border dark:border-white/50 dark:bg-transparent"
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => document.documentElement.classList.toggle('dark')}>
            <img src="./assets/moon_icon.png" alt="" className="w-6 dark:hidden" />
            <img src="./assets/sun_icon.png" alt="" className="w-6 hidden dark:block" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-0vo dark:border-white/50"
          >
            Contact
            <img src="./assets/arrow-icon.png" alt="" className="w-3 dark:hidden" />
            <img src="./assets/arrow-icon-dark.png" alt="" className="w-3 hidden dark:block" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu} ref={navMenuRef}>
            <img src="./assets/menu-black.png" alt="" className="w-6 dark:hidden" />
            <img src="./assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <img src="./assets/close-black.png" alt="" className="w-5 cursor-pointer dark:hidden" />
            <img src="./assets/close-white.png" alt="" className="w-5 cursor-pointer hidden dark:block" />
          </div>

          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
