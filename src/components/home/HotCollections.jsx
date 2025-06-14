import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import "./HotCollections.css"; // For custom skeleton styles
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import SkeletonHotCard from "./SkeletonHotCard";



const HotCollections = () => {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const { authorId } = useParams();


  const nftUrl = `https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`;



  const fetchCollections = async () => {
    try {
      const res = await axios.get(nftUrl);
      

      setCollections(res.data);
    } catch (err) {
      console.error("Error fetching collections:", err);
    } finally {
      setIsLoading(false);
    }
  };





  useEffect(() => {
     setTimeout(() => {
       fetchCollections();

     },)

    }, []);


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };



















  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          <div>
            
          <Slider {...settings}>
            {isLoading? new Array(4).fill(0).map((_,index) => (
              <div key={index}><SkeletonHotCard /></div> 
            )): collections.map((item, index) => (
              <div className=" nftbox" key={index}>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <Link to={`/item-details/${item.nftId}`}>
                      <img
                        src={item.nftImage}
                        className="lazy img-fluid"
                        alt="NFT"
                      />
                    </Link>
                  </div>
                  <div className="nft_coll_pp">
                    <Link to={`/author/${item.authorId}`}>
                      <img
                        className="lazy pp-coll"
                        src={item.authorImage}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="nft_coll_info">
                    <>
                      <Link to="/explore">
                        <h4>{item.name || "Pinky Ocean"}</h4>
                      </Link>
                      <span>{item.code || "ERC-192"}</span>
                    </>
                  </div>
                </div>
              </div>
            ))}
           </Slider>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;

// import React from "react";
// import { Link } from "react-router-dom";
// import AuthorImage from "../../images/author_thumbnail.jpg";
// import nftImage from "../../images/nftImage.jpg";

// const HotCollections = () => {

//   return (
//     <section id="section-collections" className="no-bottom">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="text-center">
//               <h2>Hot Collections</h2>
//               <div className="small-border bg-color-2"></div>
//             </div>
//           </div>
//           {new Array(4).fill(0).map((_, index) => (
//             <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
//               <div className="nft_coll">
//                 <div className="nft_wrap">
//                   <Link to="/item-details">
//                     <img src={nftImage} className="lazy img-fluid" alt="" />
//                   </Link>
//                 </div>
//                 <div className="nft_coll_pp">
//                   <Link to="/author">
//                     <img className="lazy pp-coll" src={AuthorImage} alt="" />
//                   </Link>
//                   <i className="fa fa-check"></i>
//                 </div>
//                 <div className="nft_coll_info">
//                   <Link to="/explore">
//                     <h4>Pinky Ocean</h4>
//                   </Link>
//                   <span>ERC-192</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HotCollections;
