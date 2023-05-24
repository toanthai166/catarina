import React from "react";
import { NavLink } from "react-router-dom";
// max-w-[360px] max-h-[200px]

const PostImage = ({ small, url, className = "", to }) => {
  if (!to)
    return (
      <div
        className={
          small
            ? ` h-[75px] w-[90px] ${className}`
            : `h-full w-full  ${className}`
        }
      >
        <img
          src={url}
          loading="lazy"
          alt=""
          className="w-full h-full object-cover "
        />
      </div>
    );
  return (
    <a href={to}>
      <div
        className={
          small
            ? ` w-full h-[75px]  min-w-[90px] ${className}`
            : `h-full max-h-[200px] w-full min-w-[300px] mb-10 ${className}`
        }
      >
        <img
          src={url}
          loading="lazy"
          alt=""
          className="w-full h-full object-cover "
        />
      </div>
    </a>
  );
};

export default PostImage;
