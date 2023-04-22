import React from "react";

import Home from "../../img/home.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './NavIcons.css'

const NavIcons = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state)=>state.postReducer.posts)
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>

      {/* <UilSetting /> */}

      <div class="dropdown">
        <UilSetting />
        <div class="dropdown-content">
          {/* <a href="/profile/:id">View Profile</a> */}
          <Link to={`/profile/${user._id}`}>My Profile</Link>
          <a href="#">Delete Profile</a>
        </div>
      </div>

      <Link to="../chat">
        <img src={Comment} alt="" />
      </Link>
    </div>
  );
};

export default NavIcons;
