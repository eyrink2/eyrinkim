import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function PageToggle() {
  const { pathname } = useLocation();
  const onAbout = pathname === "/about";

  return (
    <div className="page-toggle">
      {onAbout ? (
        <Link to="/" className="page-toggle__link">← back</Link>
      ) : (
        <Link to="/about" className="page-toggle__link">more about me →</Link>
      )}
    </div>
  );
}
