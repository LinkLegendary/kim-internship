import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import SkeletonCard from "./SkeletonCard";
import Slider from "react-slick";

import "./NewItems.css"
import "./HotCollections.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";












const NewItems = () => {


const [nfts, setNfts] = useState([]);
const [loading, setLoading] = useState(true);



const fetchItems = async() => {

  try {const res = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems`)

     setNfts(res.data);
   
    
  } catch (error) {
    console.error("Error fetching items:", error)
  }finally{
    setLoading(false);
  }
     
     };

     

useEffect(() => {
 setTimeout(() => {
 fetchItems()

 },3000)

},[])


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};
  








  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>




  <Slider {...settings}>       
  {loading
    ? new Array(8).fill(0).map((_, index) => (
        <div key={index}>
          <SkeletonCard />
        </div>
      ))
    : nfts.map((item, index) => (
        <div key={index}>
          <div className="nft__item">
            <div className="author_list_pp">
              <Link
                to={`/author/${item.authorId}`}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={`Creator: ${item.authorName || "Unknown"}`}
              >
                <img
                  className="lazy"
                  src={item.authorImage || AuthorImage}
                  alt=""
                />
                <i className="fa fa-check"></i>
              </Link>
            </div>

            <div className="de_countdown">{item.time || "5h 30m 32s"}</div>

            <div className="nft__item_wrap">
              <div className="nft__item_extra">
                <div className="nft__item_buttons">
                  <button>Buy Now</button>
                  <div className="nft__item_share">
                    <h4>Share</h4>
                    <a href="#" target="_blank" rel="noreferrer">
                      <i className="fa fa-facebook fa-lg"></i>
                    </a>
                    <a href="#" target="_blank" rel="noreferrer">
                      <i className="fa fa-twitter fa-lg"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <Link to={`/item-details/${item.nftId}`}>
                <img
                  src={item.nftImage || nftImage}
                  className="lazy nft__item_preview"
                  alt=""
                />
              </Link>
            </div>

            <div className="nft__item_info">
              <Link to={`/item-details/${item.nftId}`}>
                <h4>{item.title || "Pinky Ocean"}</h4>
              </Link>
              <div className="nft__item_price">{item.price || "3.08 ETH"}</div>
              <div className="nft__item_like">
                <i className="fa fa-heart"></i>
                <span>{item.likes || 69}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

     </Slider>



          
        </div>
      </div>
    </section>
  );
};

export default NewItems;


































// import React from "react";
// import { Link } from "react-router-dom";
// import AuthorImage from "../../images/author_thumbnail.jpg";
// import nftImage from "../../images/nftImage.jpg";

// const NewItems = () => {
//   return (
//     <section id="section-items" className="no-bottom">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="text-center">
//               <h2>New Items</h2>
//               <div className="small-border bg-color-2"></div>
//             </div>
//           </div>
//           {new Array(4).fill(0).map((_, index) => (
//             <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
//               <div className="nft__item">
//                 <div className="author_list_pp">
//                   <Link
//                     to="/author"
//                     data-bs-toggle="tooltip"
//                     data-bs-placement="top"
//                     title="Creator: Monica Lucas"
//                   >
//                     <img className="lazy" src={AuthorImage} alt="" />
//                     <i className="fa fa-check"></i>
//                   </Link>
//                 </div>
//                 <div className="de_countdown">5h 30m 32s</div>

//                 <div className="nft__item_wrap">
//                   <div className="nft__item_extra">
//                     <div className="nft__item_buttons">
//                       <button>Buy Now</button>
//                       <div className="nft__item_share">
//                         <h4>Share</h4>
//                         <a href="" target="_blank" rel="noreferrer">
//                           <i className="fa fa-facebook fa-lg"></i>
//                         </a>
//                         <a href="" target="_blank" rel="noreferrer">
//                           <i className="fa fa-twitter fa-lg"></i>
//                         </a>
//                         <a href="">
//                           <i className="fa fa-envelope fa-lg"></i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   <Link to="/item-details">
//                     <img
//                       src={nftImage}
//                       className="lazy nft__item_preview"
//                       alt=""
//                     />
//                   </Link>
//                 </div>
//                 <div className="nft__item_info">
//                   <Link to="/item-details">
//                     <h4>Pinky Ocean</h4>
//                   </Link>
//                   <div className="nft__item_price">3.08 ETH</div>
//                   <div className="nft__item_like">
//                     <i className="fa fa-heart"></i>
//                     <span>69</span>
//                   </div>
//                 </div>
//               </div>

//             </div>



//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewItems;
