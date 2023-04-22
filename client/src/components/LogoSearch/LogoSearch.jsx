import React from "react";
import { Link } from 'react-router-dom';

import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">

      <Link to={"/home"} style={{textDecorationLine: "none"}}>
        <div className="brand-logo2">TECSocial.</div>
      </Link>
    </div>
  );
};

export default LogoSearch;
