<template>
<div>
  <div v-for="i in artists" class="artists panel">
    <header class="panel_heading">
      <h2 class="title--centered" tabindex="0">{{ i.name }}</h2>
      <h3 class="title--centered">
      {{ i.description }}
      </h3>
      <hr class="hr--primary">
    </header>
    <div class="row panel_body">
      <article class="col-sm-12 row article_holder">
        <div class="article_photo--left">
          <img :src="i.photo" class="img--responsive" :alt="i.photo_caption" :title="i.photo_caption">
          <h4 class="title--centered">{{ i.photo_caption }}</h4>
        </div>
      <blockquote>&quot;{{ i.quote }}&quot;</blockquote>
      <p class="articles">
        {{ i.storyP1 }}
        <br><br>
        {{ i.storyP2 }}
      </p>
    </article>
  </div>
</div>
</div>
</template>
<script>
import {jsonDir} from "../js/jsondir.js";
import {axios_get} from "../js/axios_get.js";
export default {
  data() {
      return {
        artists: ""
      }
    },
    watch: {
      // : function () {
      // }
    },
    props: [
      "prName1"
    ],
    components: {},
    mounted: function () {
      this.loadArtists();
    },
    methods: {
      loadArtists: function() {
        const jsonUrl = jsonDir + "artistsfeatured.json";

        let self = this;
        axios_get(jsonUrl)
        .then(function (response) {
        self.artists = response.data.artists;
        })
        .then(function () {
        // optional
        });
      }
    }
}
</script>