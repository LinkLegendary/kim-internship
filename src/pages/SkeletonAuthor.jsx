import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonItemDetails = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center">
          <Skeleton height={400} width={400} />
        </div>
        <div className="col-md-6">
          <div className="item_info">
            <h2><Skeleton width={300} /></h2>

            <div className="item_info_counts d-flex gap-3 my-3">
              <Skeleton width={60} height={20} />
              <Skeleton width={60} height={20} />
            </div>

            <p><Skeleton count={3} /></p>

            <div className="d-flex flex-row mb-4">
              <div className="mr40">
                <h6>Owner</h6>
                <div className="item_author d-flex align-items-center">
                  <Skeleton circle width={50} height={50} />
                  <div className="ml-3">
                    <Skeleton width={100} />
                  </div>
                </div>
              </div>
            </div>

            <h6>Creator</h6>
            <div className="item_author d-flex align-items-center mb-4">
              <Skeleton circle width={50} height={50} />
              <div className="ml-3">
                <Skeleton width={100} />
              </div>
            </div>

            <h6>Price</h6>
            <div className="nft-item-price d-flex align-items-center">
              <Skeleton width={30} height={30} />
              <Skeleton width={80} className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonItemDetails;
