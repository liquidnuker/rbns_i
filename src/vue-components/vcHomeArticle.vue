<template>
<div>
  <div class="home panel">
    <header class="panel_heading">
      <h2 class="title--centered">The Ancient Art of Bonsai</h2>
      <h3 class="title--centered">
      A series of articles by the Featured Article
      </h3>
    </header>
    <article class="row panel_body">
      <!--begin triple news_preview-->
      <div class="col-xs-12 col-sm-4 news_preview">
        <!--begin news_preview_box-->
        <div class="col-xs-12 col-sm-12 news_preview_box">
          <a href="#/articles">
            <img src="src/img/ui/prev/article1.jpg" class="img--responsive" alt="article1" title="article1">
          </a>
          <date>August 16</date>
          <h4>Article title1</h4>
          <summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur accusamus iste magnam consectetur esse, quia suscipit veniam enim minima labore, qui</p>
          </summary>
        </div>
        <!--end news_preview_box-->
      </div>
      <div class="col-xs-12 col-sm-4 news_preview">
        <!--begin news_preview_box-->
        <div class="col-xs-12 col-sm-12 news_preview_box">
          <a href="#/articles">
            <img src="src/img/ui/prev/article2.jpg" class="img--responsive" alt="article2" title="article2">
          </a>
          <date>August 16</date>
          <h4>Article title2</h4>
          <summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur accusamus iste magnam consectetur esse, quia suscipit veniam enim minima labore, qui</p>
          </summary>
        </div>
        <!--end news_preview_box-->
      </div>
      <div class="col-xs-12 col-sm-4 news_preview">
        <!--begin news_preview_box-->
        <div class="col-xs-12 col-sm-12 news_preview_box">
          <a href="#/articles">
            <img src="src/img/ui/prev/article3.jpg" class="img--responsive" alt="article3" title="article3">
          </a>
          <date>August 16</date>
          <h4>Article title3</h4>
          <summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur accusamus iste magnam consectetur esse, quia suscipit veniam enim minima labore, qui</p>
          </summary>
        </div>
        <!--end news_preview_box-->
      </div>
      <!--/end triple news prev-->
    </article>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {   

    }
  },
  watch: {
  // : function () {
  // }
  },
  props: [
    "prName1"
  ],
  components: {
  },
  mounted: function () {
    // console.log("vcHomeArticlePreview.vue mounted");
  },
  methods: {        
  }
}
</script>