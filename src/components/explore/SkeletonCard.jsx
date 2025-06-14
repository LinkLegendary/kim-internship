import React from "react";
import "./SkeletonCard.css"; // Optional, if you want separate styles

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-img" />
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-price" />
      <div className="skeleton skeleton-likes" />
    </div>
  );
};

export default SkeletonCard;
