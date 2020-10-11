import Link from "next/link";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import ChatBot from "../components/ChatBot";

<style>
/*FAQS*/
.faq_question {
    margin: 0px;
    padding: 0px 0px 5px 0px;
    display: inline-block;
    cursor: pointer;
    font-weight: bold;
}
</style>

export default () => (
  <Layout>
    <section id="banner" className="major">
      <div className="inner">
        <div className="content">
          <div class="faq_question">Question goes here</div>
          hi
        </div>
      </div>
    </section>
  </Layout>
);
