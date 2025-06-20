import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import CountdownTimer from "./CountdownTimer";
import { useState, useEffect } from "react";
import axios from "axios";
import SkeletonCard from "./SkeletonCard";

const ExploreItems = () => {

  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("price_low_to_high");
  const [exploreItems, setExploreItems] = useState([]);
  
  
  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 4);
  };

  const itemsToShow = exploreItems.slice(0, visibleCount);
  
  
    // https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=likes_high_to_low

  // value = "price_low_to_high"  | "price_high_to_low" |  "likes_high_to_low "

  
  const fetchItems = async (selectedFilter) => {
    // setIsLoading(true);
    try {
      const res = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${selectedFilter}`
      );
      setExploreItems(res.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems(filter);
  }, [filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };



  return (
    <>
      <div>
        <select id="filter-items" value={filter} onChange={handleFilterChange} >
          <option value="">Default</option>
          <option
            value="price_low_to_high"
           
          >
            Price, Low to High
          </option>
          <option
            value="price_high_to_low"
            
          >
            Price, High to Low
          </option>
          <option
            value="likes_high_to_low"
            
          >
            Most liked
          </option>
        </select>
      </div>
      {isLoading ? (
        <div className="row">
          {new Array(4).fill(0).map((_, idx) => (
            <div
              key={idx}
              className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4"
            >
              <SkeletonCard />
            </div>
          ))}
        </div>
      ) : (
        itemsToShow.map((item, index) => (
          <div
            key={index}
            className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
            style={{ display: "block", backgroundSize: "cover" }}
          >
            <div className="nft__item">
              <div className="author_list_pp">
                <Link
                  to={`/author/${item.authorId}`}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  <img className="lazy" src={item.authorImage} alt="" />
                  <i className="fa fa-check"></i>
                </Link>
              </div>
              <CountdownTimer endTime={item.expiryDate} />

              <div className="nft__item_wrap">
                <div className="nft__item_extra">
                  <div className="nft__item_buttons">
                    <button>Buy Now</button>
                    <div className="nft__item_share">
                      <h4>Share</h4>
                      <a href="" target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook fa-lg"></i>
                      </a>
                      <a href="" target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter fa-lg"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-envelope fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <Link to={`/item-details/${item.nftId}`}>
                  <img
                    src={item.nftImage}
                    className="lazy nft__item_preview"
                    alt=""
                  />
                </Link>
              </div>
              <div className="nft__item_info">
                <Link to={`/item-details/${item.nftId}`}>
                  <h4>{item.title}</h4>
                </Link>
                <div className="nft__item_price">{`${item.price} ETH`}</div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i>
                  <span>{item.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      <div className="col-md-12 text-center">
        <Link
          to=""
          id="loadmore"
          onClick={handleLoadMore}
          className="btn-main lead"
        >
          Load more
        </Link>
      </div>
    </>
  );
};

export default ExploreItems;



  

  
































// useEffect(() => {
    
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); 
//     return () => clearTimeout(timer);
//   }, []);



   







  