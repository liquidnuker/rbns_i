<template>
<div>
   <!-- all articles for topic 2 -->
  <header class="articles panel_heading">
    <h2 class="title--centered">Article Heading2</h2>
    <summary>
    <h3 class="title--centered">
    Lorem ipsum dolor sit amet
    </h3>
    </summary>
    <hr class="hr--primary">
  </header>
  <section class="panel_body">
    <!--begin article-->
    <div class="row article_holder">
      <div class="col-sm-12">
        <div class="article_photo--left">
          <img src="src/img/news1.jpg" class="img--responsive" alt="article1">
        </div>
        <p class="articles">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iste, reprehenderit quam dolore sit mollitia eius velit minus odit nesciunt enim tempora omnis veniam inventore quaerat ab autem rerum eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nemo laboriosam, accusantium, blanditiis cupiditate voluptas, architecto, aut necessitatibus laborum assumenda explicabo officiis. Aliquam amet quaerat aspernatur itaque perferendis, esse repudiandae.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iste, reprehenderit quam dolore sit mollitia eius velit minus odit nesciunt enim tempora omnis veniam inventore quaerat ab autem rerum eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nemo laboriosam, accusantium, blanditiis cupiditate voluptas, architecto, aut necessitatibus laborum assumenda explicabo officiis. Aliquam amet quaerat aspernatur itaque perferendis, esse repudiandae.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iste, reprehenderit quam dolore sit mollitia eius velit minus odit nesciunt enim tempora omnis veniam inventore quaerat ab autem rerum eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nemo laboriosam, accusantium, blanditiis cupiditate voluptas, architecto, aut necessitatibus laborum assumenda explicabo officiis. Aliquam amet quaerat aspernatur itaque perferendis, esse repudiandae.</p>
      </div>
    </div>
    <!--/end article-->
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
    // console.log("vcArticleSet2.vue mounted");
  },
  methods: {        
  }
}
</script>