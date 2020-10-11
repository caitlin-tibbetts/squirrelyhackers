import Link from "next/link";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import ChatBot from "../components/ChatBot";

<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>

<script>
 $(document).ready(function() {
 
    $('.faq_question').click(function() {
 
        if ($(this).parent().is('.open')){
            $(this).closest('.faq').find('.faq_answer_container').animate({'height':'0'},500);
            $(this).closest('.faq').removeClass('open');
 
            }else{
                var newHeight =$(this).closest('.faq').find('.faq_answer').height() +'px';
                $(this).closest('.faq').find('.faq_answer_container').animate({'height':newHeight},500);
                $(this).closest('.faq').addClass('open');
            }
 
    });
 
});
</script>

<style>
/*FAQS*/
.faq_question {
    margin: 0px;
    padding: 0px 0px 5px 0px;
    display: inline-block;
    cursor: pointer;
    font-weight: bold;
}

.faq_answer_container {
    height: 0px;
    overflow: hidden;
    padding: 0px;
}
</style>

<div class="faq_container">
   <div class="faq">
      <div class="faq_question">Question goes here</div>
           <div class="faq_answer_container">
              <div class="faq_answer">Answer goes here</div>
           </div>        
    </div>
 </div>

export default () => (
  <Layout>
    <section id="banner" className="major">
      <div className="inner">
        <div className="content">
          
        </div>
      </div>
    </section>
  </Layout>
);
