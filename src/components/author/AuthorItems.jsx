import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import { useParams } from "react-router-dom";


const AuthorItems = ({authorData}) => {

  


  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {authorData.nftCollection?.length > 0 ? 
           authorData.nftCollection.map((item, index) => {

            console.log("item:", item);
            // console.log(`/author/${authorData.authorId}`);

   

            return (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <div className="nft__item">
                <div className="author_list_pp">
                {/* <button onClick={() => window.location.href = `/author/${authorData.authorId}`}>
                Go to Author
                  </button> */}


                  <Link to={`/author/${authorData.authorId}`}>
                    <img className="lazy" src={authorData.authorImage || AuthorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
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
                    <h4>{authorData.authorName}</h4>
                  </Link>
                  <div className="nft__item_price">{`${item.price} ETH`}</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
           )})


           : "Data Fetching "}


          


        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
