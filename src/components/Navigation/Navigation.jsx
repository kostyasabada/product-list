import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink
          to="/"
          exact
          className="nav__link"
          activeClassName="nav__link_active"
        >
          Catalog
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          to="/bucket"
          exact
          className="nav__link"
          activeClassName="nav__link_active"
        >
          Bucket
        </NavLink>
      </li>
    </ul>
  </nav>
);
