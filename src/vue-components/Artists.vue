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
    <!-- begin featured artists -->
    <div class="col-sm-12 panel_container">
      <!-- breadcrumb -->
      <div class="row">
        <span class="breadcrumb">
          <a href="#/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></a>
          <a href="#/">Home</a>
          &gt;&nbsp;Artists
        </span>
      </div>
      <!-- /end breadcrumb -->
      <vcArtistsFeatured />
    </div>
    <!-- end featured artists -->
    </main>
    <!--/panel container-->
    <!--begin footer2-->
    <footer>
      <vcFooter />
    </footer>
    <!--end footer2-->
  </div>
  <!-- /.container -->
</div>
</template>
<script>
const vcMenubar = () => import('./vcMenuBar.vue');
const vcStage = () => import('./vcStage.vue');
const vcArtistsFeatured = () => import('./vcArtistsFeatured.vue');
const vcFooter = () => import('./vcFooter.vue');
export default {
  data () {
    return {
      // for carousel currentIndex
      carouselIndex: 2
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
  vcArtistsFeatured: vcArtistsFeatured
},
mounted: function () {
},
methods: {
}
}
</script>