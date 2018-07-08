<template>
<div>
  <div class="col-sm-4 bonsai_stage--bg">
    <img src="src/img/ui/stage/vcbonsai_logo1.svg" alt="bonsai logo">
  </div>
  <div class="col-sm-8">
    <!--begin right side-->
    <div class="row bonsai_stage--right">
      <img src="src/img/ui/stage/carousel_bonsai_front.png" class="img--responsive" alt="bonsai">
    </div>
    <!--begin carousel_holder -->
    <div class="carousel_holder">
      <!-- begin carousel1-04 -->
      <div class="carousel1-04">
        <div class="carousel1-04_content" id="carousel1-04_content">
        </div>
      <nav id="carousel1-04_pagination" class="carousel1-04_pagination"></nav>
      <div class="row carousel1-04_prevnext">
        <span id="carousel1_04_previous" class="carousel1_04_previous">
          <!-- chevron left -->
          <svg xmlns="http://www.w3.org/2000/svg" class="carousel1_04_chevron"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </span>
        <span id="carousel1_04_next" class="carousel1_04_next">
          <!-- chevron right -->
          <svg xmlns="http://www.w3.org/2000/svg" class="carousel1_04_chevron"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </span>
      </div>
    </div>
    <!-- end carousel1-04 -->
  </div>
  <!-- end carousel_holder -->
  <!-- end right side-->
</div>
</div>
</template>
<script>
import {carouselItems} from "../js/carouselitems.js";
import Carousel1_04 from "../js/carousel1-04.js";
export default {
data() {
return {
}
},
watch: {},
props: [
"prCarouselIndex"
],
components: {
},
mounted: function () {
this.activateCarousel();
},
methods: {
activateCarousel: function () {
let C4 = new Carousel1_04({
dataSrc: carouselItems,
cIndex: this.prCarouselIndex,
mainItemContainer: "carousel1-04_content",
navPrevious: "carousel1_04_previous",
navNext: "carousel1_04_next",
itemHolderClass: "carousel1_04_items",
item_active: " carousel1_04_items--active",
item_inActive: "carousel1_04_items",
pageBtnClass: "carousel1_04_pagebuttons",
pageBtn_active: " carousel1_04_pagebuttons--active",
pageBtn_inActive: "carousel1_04_pagebuttons"
});
C4.init();
}
}
}
</script>