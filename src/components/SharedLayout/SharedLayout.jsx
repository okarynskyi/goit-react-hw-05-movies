import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from "./SharedLayout.module.css";

const getClassName = ({isActive}) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
}

export const SharedLayout = () => {
  return (
    <main>
      <header className={css.header}>
        <nav>
          <NavLink to="/" className={getClassName} end>
            Home
          </NavLink>
          <NavLink to="/movies" className={getClassName}>Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};