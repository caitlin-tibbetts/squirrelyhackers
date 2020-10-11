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
        caption: "Caitlin Tibbetts"
      },
      {
        src: "../static/images/nicole.jpg",
        thumbnail:
          "../static/images/nicole.jpg",
        thumbnailWidth: 720,
        thumbnailHeight: 960,
        caption: "Nicole Daigle"
      },

      {
        src: "../static/images/kim.jpg",
        thumbnail:
        "../static/images/kim.jpg",
        thumbnailWidth: 960,
        thumbnailHeight: 956,
        caption: "Kim-Nhi Ngo"
      },
      {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail:
          "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 640,
        thumbnailHeight: 424,
        caption: "Samridhi Ganguly"
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
