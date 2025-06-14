
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SkeletonAuthor from './SkeletonAuthor'

const Author = () => {
  const { authorId } = useParams();
  const [authorData, setAuthorData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAuthorData = async () => {
    try {
      const res = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`
      );
      console.log(res.data);
      
      setAuthorData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching author:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchAuthorData();
    }, );
  }, [authorId]);

  

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">

          {isLoading? <SkeletonAuthor /> 
          
          : (

            <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={authorData.authorImage} alt={authorData.name} />

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          {authorData.name}
                          <span className="profile_username">@{authorData.tag}</span>
                          <span id="wallet" className="profile_wallet">
                            {authorData.address}
                          </span>
                          <button
                            id="btn_copy"
                            title="Copy Text"
                            onClick={() =>
                              navigator.clipboard.writeText(authorData.address)
                            }
                          >
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">
                        {authorData.followers} followers
                      </div>
                      <Link to="#" className="btn-main">
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems authorData={authorData}/>
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

export default Author;













































// import AuthorBanner from "../images/author_banner.jpg";
// import AuthorItems from "../components/author/AuthorItems";
// import { Link } from "react-router-dom";
// import AuthorImage from "../images/author_thumbnail.jpg";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";


// const Author = () => {

//   const { authorId } = useParams();
//   const  [authorList, setAuthorList] =useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const fetchAuthorData = async () => {
//      try {

//       const res = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`)
      
//       setAuthorList(res.data);
//       setIsLoading(false);
      
      
//      } catch (error) {
//       console.error("Error fetching author:", error)
//      }

//   };

//    useEffect(() => {
  
//     setTimeout(() => {
//      fetchAuthorData()

//     },2000)

//    },[authorId])


   



       
//     return (

      
//     <div id="wrapper">
//       <div className="no-bottom no-top" id="content">
//         <div id="top"></div>

//         <section
//           id="profile_banner"
//           aria-label="section"
//           className="text-light"
//           data-bgimage="url(images/author_banner.jpg) top"
//           style={{ background: `url(${AuthorBanner}) top` }}
//         ></section>

//         <section aria-label="section">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="d_profile de-flex">
//                   <div className="de-flex-col">
//                     <div className="profile_avatar">
//                       <img src={AuthorImage} alt="" />

//                       <i className="fa fa-check"></i>
//                       <div className="profile_name">
//                         <h4>
//                           Monica Lucas
//                           <span className="profile_username">@monicaaaa</span>
//                           <span id="wallet" className="profile_wallet">
//                             UDHUHWudhwd78wdt7edb32uidbwyuidhg7wUHIFUHWewiqdj87dy7
//                           </span>
//                           <button id="btn_copy" title="Copy Text">
//                             Copy
//                           </button>
//                         </h4>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="profile_follow de-flex">
//                     <div className="de-flex-col">
//                       <div className="profile_follower">573 followers</div>
//                       <Link to="#" className="btn-main">
//                         Follow
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-12">
//                 <div className="de_tab tab_simple">
//                   <AuthorItems />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Author;
