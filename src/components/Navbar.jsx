import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[100px] h-[100px] object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex w-full justify-end items-center">
  {/* Toggle button for menu */}
  <img
    src={menu}
    alt="menu"
    className="w-[34px] h-[34px] object-contain cursor-pointer"
    onClick={() => setToggle(!toggle)}
  />
  
  {toggle && (
    <div
      className="fixed inset-0 bg-flashWhite opacity-[0.98] z-10 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out"
    >
      {/* Close button */}
      <div className="absolute top-6 right-6">
        <img
          src={close}
          alt="close"
          className="w-[24px] h-[24px] object-contain cursor-pointer"
          onClick={() => setToggle(false)}
        />
      </div>

      {/* Navigation Links */}
      <ul className="list-none flex flex-col items-center justify-center space-y-6">
        {navLinks.map((nav) => (
          <li
            id={nav.id}
            key={nav.id}
            className={`${
              active === nav.title ? 'text-french' : 'text-eerieBlack'
            } text-[12px] font-bold font-poppins cursor-pointer`}
            onClick={() => {
              setToggle(false);
              setActive(nav.title);
            }}
          >
            <a href={`#${nav.id}`} className="block w-full text-center">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>



      </div>
    </nav>
  );
};

export default Navbar;
