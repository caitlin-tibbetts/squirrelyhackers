import Link from "next/link";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import ChatBot from "../components/ChatBot";
import Typeform from "../components/Typeform.tsx";

export default () => (
  <Layout>
    <section id="banner" className="major">
      <div className="inner">
        <div className="content">
          <Typeform
            buttonText="Apply to be a mentor!"
            tfLink="https://form.typeform.com/to/OQFrgnRE"
          />
        </div>
      </div>
    </section>
  </Layout>
);