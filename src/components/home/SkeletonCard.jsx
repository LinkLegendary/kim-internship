import React from "react";
import "./SkeletonCard.css"; // for styles

const SkeletonCard = () => {
  return (
    <div className="slider-box">
      <div className="nft__item skeleton-item">
        <div className="skeleton skeleton-author" />
        <div className="skeleton skeleton-img" />
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-price" />
      </div>
    </div>
  );
};

export default SkeletonCard;


//  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"