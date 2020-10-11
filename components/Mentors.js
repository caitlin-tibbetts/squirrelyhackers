import Link from "next/link";
import Gallery from "react-grid-gallery";
import React, { Component } from "react";

class Mentors extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const IMAGES = [
      {
        src: "../static/images/IMG_20200814_134836.jpg",
        thumbnail:
        "../static/images/IMG_20200814_134836.jpg",
        thumbnailWidth: 400,
        thumbnailHeight: 300,
        caption: "Caitlin Tibbetts - Senior in Computer Science at the University of Texas at Dallas, not skilled in business, but wants to be one day"
      },
      {
        src: "../static/images/nicole.jpg",
        thumbnail:
          "../static/images/nicole.jpg",
        thumbnailWidth: 720,
        thumbnailHeight: 960,
        caption: "Nicole Daigle - Junior in Computer Science at the University of Texas at Dallas, minoring in Business Administration. Enthusiastic about women in STEM and business and the convergence of the fields"
      },

      {
        src: "../static/images/kim.jpg",
        thumbnail:
        "../static/images/kim.jpg",
        thumbnailWidth: 960,
        thumbnailHeight: 956,
        caption: "Kim-Nhi Ngo - Sophomore at UT Dallas, computer science major, creates content for and manages the social media for UTD Comet Life (> 6k followers)"
      },
      {
        src: "../static/images/IMG_3266.jpg",
        thumbnail:
          "../static/images/IMG_3266.jpg",
        thumbnailWidth: 640,
        thumbnailHeight: 424,
        caption: "Samridhi Ganguly - Freshman majoring in Computer Science, a team-player and committed to making people’s lives easier, effective, and efficient"
      },
    ];
    return (
      <div style={{height:"100%", width:"100%"}}>
        <Gallery images={IMAGES} lightboxWidth={1536} thumbnailWidth={1000}/>
      </div>
    )
  }
}

export default Mentors;
