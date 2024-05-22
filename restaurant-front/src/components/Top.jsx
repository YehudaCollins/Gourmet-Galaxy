import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { faHome, faPlus, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../style/top.css"

//בניתי פה נווט לכל הדפים (על בסיס הראוטרים בדף הראשי)
//משתמש גם בספרייה של אייקונים

function Top() {
  const location = useLocation();
  return (
    <div className="main-top">
      <div className="logo">
          <div>Gourmet Galaxy</div>
      </div>
      <nav className="links">
        <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link to="/Add" className={location.pathname === '/Add' ? 'active-link' : ''}>
          <FontAwesomeIcon icon={faPlus} /> Add
        </Link>
        <Link to="/Manage" className={location.pathname === '/Manage' ? 'active-link' : ''}>
          <FontAwesomeIcon icon={faBars} /> Manage
        </Link>
      </nav>
    </div>
  );
}

export default Top;


