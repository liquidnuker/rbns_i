<template>
<div>
  <section class="home panel">
    <header class="panel_heading">
      <h2 class="title--centered">Artists</h2>
      <h3 class="title--centered">
      Here are the Featured artists of the Month
      </h3>
    </header>
    <article class="row panel_body">
      <!--begin triple news_preview-->
      <section class="col-xs-12 col-sm-4 artists_preview">
        <!--begin news_preview_box-->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 artists_preview_box">
          <a href="#/artists">
            <img src="src/img/ui/prev/artist1.jpg" class="img--responsive" alt="artist1" title="artist1">
          </a>
          <h4>
          <a href="#/artists">Artist Name</a>
          </h4>
          <summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur accusamus iste magnam consectetur esse, quia suscipit veniam enim minima labore, qui</p>
          </summary>
        </div>
        <!--end news_preview_box-->
      </section>
      <section class="col-xs-12 col-sm-4 artists_preview">
        <!--begin news_preview_box-->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 artists_preview_box">
        <a href="#/artists">
                    <img src="src/img/ui/prev/artist2.jpg" class="img--responsive" alt="artist2" title="artist2">
        </a>
          <h4>
          <a href="#/artists">Artist Name</a>
          </h4>
          <summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur accusamus iste magnam consectetur esse, quia suscipit veniam enim minima labore, qui</p>
          </summary>
        </div>
        <!--end news_preview_box-->
      </section>
      <section class="col-xs-12 col-sm-4 artists_preview">
        <!--begin news_preview_box-->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 artists_preview_box">
          <a href="#/artists">
            <img src="src/img/ui/prev/artist3.jpg" class="img--responsive" alt="artist3" title="artist3">
          </a>
          <h4>
          <a href="#/artists">Artist Name</a>
          </h4>
          <summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur accusamus iste magnam consectetur esse, quia suscipit veniam enim minima labore, qui</p>
          </summary>
        </div>
        <!--end news_preview_box-->
      </section>
      <!--/triple news-->
    </article>
  </section>
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

},
methods: {
}
}
</script>