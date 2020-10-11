import Link from "next/link";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import ChatBot from "../components/ChatBot";


export default () => (
  <Layout>
    <section id="banner" className="major">
      <div className="inner">
        <div className="content">
          <p><h2>What is Grant Routes?</h2>
          <h4>Grant Routes is an all-in-one platform that aims to assist women entrepreneurs and small business owners in growing their businesses by providing easy access to resources, mentorships, and capital opportunities.</h4>
          </p>
          <br></br>
  
          <p><h2>Where can I find resources and talk to mentors and investors?</h2>
          <h4>Click on the chat icon on the bottom right of the screen to talk to Granite, our friendly chatbot. Granite can help answer your business questions, redirect you to informative articles and grant opportunities, and connect you directly to mentors and investors.</h4>
          </p>
          <br></br>
  
    
          <p><h2>How can I contribute to Grant Routes?</h2>
          <h4>By signing up to be a mentor and/or an investor, you can share knowledge and capital to support women entrepreneurs and small businesses in their journey to success.</h4>
          </p>
          <br></br>
          <p>
          <h2>What is Granite?</h2>
          <h4>Granite is our friendly chatbot that's always there to offer you assistance in growing your business via resources, captial opportunities, and mentorship connections. Granite is named after the mineral, which is believed to enable one to see the big picture, banish skepticism, and defeat negativity.</h4>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);
