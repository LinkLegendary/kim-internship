import React from 'react';
import "./SkeletonTopSellers.css";

const SkeletonTopSellers = () => {
  return (
    <li>
      <div className="author_list_pp">
        <div className="skeleton skeleton-img"></div>
        <i className="fa fa-check"></i>
      </div>
      <div className="author_list_info">
        <div className="skeleton skeleton-text name"></div>
        <div className="skeleton skeleton-text price"></div>
      </div>
    </li>
  );
};

export default SkeletonTopSellers;
