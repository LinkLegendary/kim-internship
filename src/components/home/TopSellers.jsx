import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import axios from "axios";
import SkeletonTopSellers from "./SkeletonTopSellers";


const TopSellers = () => {


    const [topSellers, setTopSellers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchTopSellers = async() => {

      try {
         const res = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers`)
      console.log(res.data);
      setTopSellers(res.data)
  //  console.log(...topSellers);
    
      } catch (err) {
        console.error("Error fetching collections:", err);
      }
     
 };
    
 useEffect(() => {
  let isMounted = true;

  const timeout = setTimeout(() => {
    fetchTopSellers().then(() => {
      if (isMounted) {
        setIsLoading(false);
      }
    });
  }, );

  return () => {
    isMounted = false;       // prevent state updates
    clearTimeout(timeout);   // cancel timeout if component unmounts
  };
}, []);

  







  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {isLoading ? new Array(12).fill(0).map((_, index) => (<SkeletonTopSellers key={index} topSellers={topSellers}/>)): 
              topSellers.map((item, index) => (
                <li key={index}>
                  <div className="author_list_pp">
                    <Link to={`/author/${item.authorId}`}>
                      <img
                        className="lazy pp-author"
                        src={item.authorImage}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to="/author">{item.authorName}</Link>
                    <span>{`${item.price} ETH`}</span>
                  </div>
                </li>
              ))
              
              }

              



            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
