<template>
<div>
  <!-- container -->
  <div class="container">
    <!--begin stage-->
    <div class="row stage">
      <vcStage 
      :pr-carousel-index="carouselIndex" />
    </div>
    <!--/stage-->
    <!--begin panel container-->
    <main class="row">
    <div class="col-sm-12 panel_container">
      <!--begin panel1-->
      <vcHomeArticle />
      <!--/panel1-->
      <!--begin panel2-->
      <vcHomeGallery />
      <!--/panel2-->
      <!--begin panel3-->
      <vcHomeArtists />
      <!--/panel3-->
    </div>
    </main>
    <!--/panel container-->
  </div>
  <!-- /.container -->
</div>
</template>
<script>
const vcStage = () => import('./vcStage.vue');
const vcHomeArticle = () => import('./vcHomeArticle.vue');
const vcHomeGallery = () => import('./vcHomeGallery.vue');
const vcHomeArtists = () => import('./vcHomeArtists.vue');
export default {
  data () {
    return {   
      // for carousel currentIndex
      carouselIndex: 0
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
    vcStage: vcStage,
    vcHomeArticle: vcHomeArticle,
    vcHomeGallery: vcHomeGallery,
    vcHomeArtists: vcHomeArtists
  },
  mounted: function () {
    
  },
  methods: {        
  }
}
</script>