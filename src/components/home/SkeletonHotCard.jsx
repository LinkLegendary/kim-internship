import React from "react";
import "./SkeletonHotCard.css";

const SkeletonHotCard = () => {
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

export default SkeletonHotCard;
