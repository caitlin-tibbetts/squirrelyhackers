import Link from "next/link";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import ChatBot from "../components/ChatBot";
import Typeform from "../components/Typeform.tsx";
import Mentors from "../components/Mentors";

export default () => (
  <Layout>
    <section id="banner" className="major">
      <div className="inner">
        <div className="content">
            <h1>Meet our Mentors</h1>
            <Mentors />
            <Link href="/mentors-apply">Apply Now!</Link>
        </div>
      </div>
    </section>
  </Layout>
);