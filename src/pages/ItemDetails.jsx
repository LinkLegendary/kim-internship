import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import SkeletonItemDetails from "./SkeletonItemDetails";

// https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=17914494

const ItemDetails = () => {
  const { nftId } = useParams();
  const [detailsData, setDetailsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDetails = async () => {
    try {
      const res = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`
      );
      console.log(res.data);
      setDetailsData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error Fetching Data:", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [nftId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          {isLoading ? (
            <SkeletonItemDetails />
          ) : (
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center">
                  <img
                    src={detailsData.nftImage}
                    className="img-fluid img-rounded mb-sm-30 nft-image"
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <div className="item_info">
                    <h2>{detailsData.title}</h2>

                    <div className="item_info_counts">
                      <div className="item_info_views">
                        <i className="fa fa-eye"></i>
                        {detailsData.views}
                      </div>
                      <div className="item_info_like">
                        <i className="fa fa-heart"></i>
                        {detailsData.likes}
                      </div>
                    </div>
                    <p>{detailsData.description}</p>
                    <div className="d-flex flex-row">
                      <div className="mr40">
                        <h6>Owner</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <Link to={`/author/${detailsData.ownerId}`}>
                              <img
                                className="lazy"
                                src={detailsData.ownerImage}
                                alt=""
                              />
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                          <div className="author_list_info">
                            <Link to={`/author/${detailsData.ownerId}`}>
                              {detailsData.ownerName}
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="de_tab tab_simple">
                      <div className="de_tab_content">
                        <h6>Creator</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <Link to={`/author/${detailsData.creatorId}`}>
                              <img
                                className="lazy"
                                src={detailsData.creatorImage}
                                alt=""
                              />
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                          <div className="author_list_info">
                            <Link to={`/author/${detailsData.creatorId}`}>
                              {detailsData.creatorName}
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="spacer-40"></div>
                      <h6>Price</h6>
                      <div className="nft-item-price">
                        <img src={EthImage} alt="" />
                        <span>{detailsData.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
