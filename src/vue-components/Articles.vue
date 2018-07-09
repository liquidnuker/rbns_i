<template>
<div>
  <!-- container -->
  <div class="container">
    <!--begin menubar2-->
    <nav>
      <vcMenubar />
    </nav>
    <!--end menubar2-->
    <!--begin stage-->
    <div class="row stage">
      <vcStage
      :pr-carousel-index="carouselIndex" />
    </div>
    <!--/stage-->
    <!--begin panel container-->
    <main class="row">
    <article class="col-sm-12 panel_container">
      <!-- breadcrumb -->
      <div class="row">
        <span class="breadcrumb">
          <a href="#/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></a>
          <a href="#/">Home</a>
          &gt;&nbsp;Articles
        </span>
      </div>
      <!-- /end breadcrumb -->
      <!-- featured articles -->
      <!--begin panel1-->
      <div class="panel">
        <vcArticleSet1 />
      </div>
      <!--/panel1-->
      <!--begin panel2-->
      <div class="panel">
        <vcArticleSet2 />
      </div>
      <!--/panel2-->
      <!--begin panel3-->
      <div class="panel">
        <vcArticleSet3 />
      </div>
      <!--/panel3-->
    </article>
    </main>
    <!--/panel container-->
    <!--begin footer-->
    <footer>
      <vcFooter />
    </footer>
    <!--end footer-->
  </div>
  <!-- /.container -->
</div>
</template>
<script>
const vcMenubar = () => import('./vcMenuBar.vue');
const vcStage = () => import('./vcStage.vue');
const vcArticleSet1 = () => import('./vcArticleSet1.vue');
const vcArticleSet2 = () => import('./vcArticleSet2.vue');
const vcArticleSet3 = () => import('./vcArticleSet3.vue');
const vcFooter = () => import('./vcFooter.vue');
export default {
  data () {
    return {   
      // for carousel currentIndex
      carouselIndex: 1
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
    vcMenubar: vcMenubar,
    vcFooter: vcFooter,
    vcStage: vcStage,
    vcArticleSet1: vcArticleSet1,
    vcArticleSet2: vcArticleSet2,
    vcArticleSet3: vcArticleSet3
  },
  mounted: function () {
    
  },
  methods: {        
  }
}
</script>