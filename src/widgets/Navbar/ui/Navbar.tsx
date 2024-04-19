import { useEffect, useState } from 'react';
import cls from './Navbar.module.scss';
import { Logo } from 'shared/ui/Logo';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsBurgerActive(false);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        setIsBurgerActive(false);
      });
    };
  }, []);

  return (
    <nav className={cls.navbar}>
      <div className={cls.logo}>
        <NavLink className={({ isActive }) => (isActive ? cls.active : '')} to={'/'}>
          <Logo />
        </NavLink>
      </div>
      <ul
        onClick={() => {
          setIsBurgerActive(false);
        }}
        className={`${cls.navMenu} ${isBurgerActive ? cls.active : ''}`}
      >
        <li className={cls.navItem}>
          <NavLink className={({ isActive }) => (isActive ? cls.active : '')} to={'/'}>
            Home
          </NavLink>
        </li>
        <li className={cls.navItem}>
          <NavLink className={({ isActive }) => (isActive ? cls.active : '')} to={'/create'}>
            Create
          </NavLink>
        </li>
        <li className={cls.navItem}>
          <NavLink className={({ isActive }) => (isActive ? cls.active : '')} to={'/decode'}>
            Decode
          </NavLink>
        </li>
        <li className={cls.navItem}>
          <NavLink className={({ isActive }) => (isActive ? cls.active : '')} to={'/about'}>
            About
          </NavLink>
        </li>
      </ul>
      <div
        onClick={() => {
          setIsBurgerActive((prevState) => !prevState);
        }}
        className={`${cls.hamburger} ${isBurgerActive ? cls.active : ''}`}
      >
        <span className={cls.bar}></span>
        <span className={cls.bar}></span>
        <span className={cls.bar}></span>
      </div>
    </nav>
  );
};
