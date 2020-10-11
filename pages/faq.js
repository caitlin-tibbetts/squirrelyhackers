import Link from "next/link";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import ChatBot from "../components/ChatBot";


export default () => (
  <Layout>
    <section id="banner" className="major">
      <div className="inner">
        <div className="content">
          <h2>What is Grant Routes?</h2>
          <h4>Grant Routes is an all-in-one platform that aims to assist women entrepreneurs and small business owners in growing their businesses by providing easy access to resources, mentorships, and capital opportunities.</h4>
        </div>
      </div>
    </section>
  </Layout>
  
  <Layout>
    <section id="banner" className="major">
      <div className="inner">
        <div className="content">
          <h2>Where can I find resources and talk to mentors and investors?</h2>
          <h4>Click on the chat icon on the bottom right of the screen to talk to Granite, our friendly chatbot. Granite can help answer your business questions, redirect you to informative articles and grant opportunities, and connect you directly to mentors and investors.</h4>
        </div>
      </div>
    </section>
  </Layout>
);
