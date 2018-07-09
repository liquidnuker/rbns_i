<template>
<div>
  <!-- all articles for topic 3 -->
  <header class="articles panel_heading">
    <h2 class="title--centered">Article Heading3</h2>
    <summary>
    <h3 class="title--centered">
    Lorem ipsum dolor sit amet
    </h3>
    </summary>
    <hr class="hr--primary">
  </header>
  <div class="panel_body">
    <!--begin article-->
    <div class="row article_holder">
      <article class="col-sm-12">
        <div class="article_photo--left">
          <img src="src/img/ui/prev/article3.jpg" class="img--responsive" alt="article3" title="article3">
        </div>
        <p class="articles">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iste, reprehenderit quam dolore sit mollitia eius velit minus odit nesciunt enim tempora omnis veniam inventore quaerat ab autem rerum eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nemo laboriosam, accusantium, blanditiis cupiditate voluptas, architecto, aut necessitatibus laborum assumenda explicabo officiis. Aliquam amet quaerat aspernatur itaque perferendis, esse repudiandae.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iste, reprehenderit quam dolore sit mollitia eius velit minus odit nesciunt enim tempora omnis veniam inventore quaerat ab autem rerum eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nemo laboriosam, accusantium, blanditiis cupiditate voluptas, architecto, aut necessitatibus laborum assumenda explicabo officiis. Aliquam amet quaerat aspernatur itaque perferendis, esse repudiandae.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iste, reprehenderit quam dolore sit mollitia eius velit minus odit nesciunt enim tempora omnis veniam inventore quaerat ab autem rerum eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nemo laboriosam, accusantium, blanditiis cupiditate voluptas, architecto, aut necessitatibus laborum assumenda explicabo officiis. Aliquam amet quaerat aspernatur itaque perferendis, esse repudiandae.</p>
      </article>
    </div>
    <!--/end article-->
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
    // console.log("vcArticleSet3.vue mounted");
  },
  methods: {        
  }
}
</script>