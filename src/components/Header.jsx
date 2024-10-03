import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full ${isScrolled ? 'shadow-md' : 'border-white-b-[5px]'}`}>
      <nav className="bg-teal-300 py-3 flex justify-between items-center border-b-black-100">
        <Link to="/HomePage" className="flex items-end pl-11 pb-2 h-10 text-white hover:text-teal-500 active:text-teal-500">
          SPICY<img src="" alt="" className="px-2"/>
        </Link>
        <div className="md:hidden flex items-center pr-5">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 ml-8">
          <li>
            <Link to="#support" className="text-white hover:text-teal-500 active:text-teal-500 px-4 py-2">
              SUPPORT
            </Link>
          </li>
          <li>
            <Link to="#services" className="text-white hover:text-teal-500 active:text-teal-500 px-4 py-2 rounded">
              MERCH
            </Link>
          </li>
          <li>
            <Link to="#about" className="text-white hover:text-teal-500 active:text-teal-500 px-4 py-2 rounded">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="#start" className="text-white hover:text-teal-500 active:text-teal-500 px-4 py-2">
              WHAT'S NEXT?
            </Link>
          </li>
        </ul>
        <section className='pr-8'>
          <span className="cursor-pointer h-10 bg-white text-teal-300 hover:text-teal-300 active:text-teal-500 pr-4 pl-4 py-2 shadow-md" onClick={() => navigate('/signup', { replace: true })}>
            JOIN
          </span>
        </section>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-teal-400 pl-3 py-4 pr-3 border-black-[100] rounded-full font-semibold shadow-lg">
          <ul className="flex flex-col items-start pl-5">
            <li>
              <Link to="#support" className="text-white hover:text-teal-500 active:text-teal-500 px-4 py-2 rounded">
                SUPPORT
              </Link>
            </li>
            <li>
              <Link to="#services" className="text-white hover:text-yellow-500 active:text-yellow-500 px-4 py-2 rounded">
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="#about" className="text-white hover:text-teal-200 active:text-teal-500 px-4 py-2 rounded">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="#store" className="text-white hover:text-teal-500 active:text-teal-500 px-4 py-2 rounded">
                STORE
              </Link>
            </li>
            <li className='border-white rounded-full'>
              <Link to="/signup" className="text-white hover:text-teal-500 active:text-teal-500 px-4 py-2 rounded">
                JOIN
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
