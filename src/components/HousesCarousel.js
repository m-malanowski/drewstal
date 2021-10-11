// import React, {Component} from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css";
// import postStyles from "./HousesCarousel.module.scss"
// import {StaticQuery, graphql} from "gatsby"
// import {Link} from "gatsby"
//
//
// export default class HousesCarousel extends Component {
//     constructor(props) {
//         super(props);
//         this.nextClick = this.nextClick.bind(this);
//
//         this.state = {
//             currentSlide: ''
//         }
//     }
//
//     nextClick(e) {
//         this.setState({currentSlide: e + 1})
//     }
//
//     render() {
//
//         const settings = {
//             dots: true,
//             infinite: true,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: false,
//             autoplay: true,
//             speed: 1200,
//             autoplaySpeed: 3200,
//             centerMode: true,
//             centerPadding: "23%",
//             pauseOnHover: false,
//             beforeChange: this.nextClick,
//             appendDots: dots => (
//                 <div
//                     style={{
//                         borderRadius: "20px",
//                         padding: "10px",
//                         // marginTop: "140px",
//                         // alignSelf: "flex-end",
//                         top: "12vh",
//                         left: "72vw",
//                         width: "6vw",
//                         bottom: "auto",
//                         height: "27.2vw",
//                         margin: "0 !important",
//                         display: "flex !important",
//                         zIndex: "101 !important",
//                         position: "absolute",
//                         alignItems: "center",
//                         flexDirection: "column",
//                         // pointerEvents: "none",
//                         justifyContent: "center",
//                     }}
//                 >
//                     <ul style={{margin: "0px"}}> {dots} </ul>
//                 </div>
//             ),
//             responsive: [
//                 {
//                     breakpoint: 1350,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                         infinite: true,
//                         dots: true,
//                         centerMode: true,
//                         centerPadding: "18%",
//                     }
//                 },
//                 {
//                     breakpoint: 1024,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                         infinite: true,
//                         dots: true,
//                         centerMode: true,
//                         centerPadding: "15%",
//
//                     }
//                 },
//                 {
//                     breakpoint: 800,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                         dots: true,
//                         centerMode: true,
//                         centerPadding: "10%",
//                         appendDots: dots => (
//                             <div
//                                 style={{
//                                     borderRadius: "20px",
//                                     padding: "10px",
//                                     top: "-10vh",
//                                     // width: "6vw",
//                                     bottom: "auto",
//                                     height: "27.2vw",
//                                     margin: "0 !important",
//                                     display: "flex !important",
//                                     zIndex: "101 !important",
//                                     position: "absolute",
//                                     alignItems: "center",
//                                     flexDirection: "row !important",
//                                     justifyContent: "center",
//                                 }}
//                             >
//                                 <ul style={{margin: "0px"}}> {dots} </ul>
//                             </div>
//                         ),
//                     },
//                 },
//                 {
//                     breakpoint: 500,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                         dots: false,
//                         centerMode: true,
//                         centerPadding: "3%",
//                     }
//                 }
//             ]
//         }
//
//         return (
//             <StaticQuery query={graphql`
//               {
//                   allWordpressPost{
//                     nodes {
//                       id
//                       slug
//                       title
//                       excerpt
//                       featured_media {
//                         source_url
//                         slug
//                       }
//                     }
//                   }
//                 }
//             `}
//                          render={data => (
//                              <div className={postStyles.sectionHouses}>
//                                  <h5 className={postStyles.sectionHousesCounter}>
//                                      {this.state.currentSlide} /{data.allWordpressPost.nodes.length}
//                                  </h5>
//                                  <Slider {...settings} >
//                                      {data.allWordpressPost.nodes.map(node => (
//                                          <div key={node.id} className={postStyles.singleCarousel}>
//                                              <img alt={node.featured_media.slug}
//                                                   src={node.featured_media.source_url}/>
//                                              <h3 className={postStyles.sectionHousesTitle} data-text={node.title}>
//                                                  <Link to={node.slug} className={postStyles.link}>
//                                                      <span data-content={node.title}>{node.title}</span>
//                                                  </Link>
//                                              </h3>
//                                          </div>
//                                      ))}
//                                  </Slider>
//                              </div>
//                          )}
//             />
//
//         );
//     }
// }
