<template>
<div class="row menubar2">
  <!-- place something on left side/ or use flexbox -->
  <ul class="row">
    <li class="col-xs-12 menubar2_mainItem">
      <a href="#/">Home</a>
    </li>
    <li class="col-xs-12 menubar2_mainItem">
      <a href="#/articles">Articles</a>
    </li>
    <li class="col-xs-12 menubar2_mainItem">
      <a href="#/artists">Artists</a>
    </li>
    <li class="col-xs-12 menubar2_mainItem">
      <a href="#/gallery/tomeru">Gallery</a>
    </li>
    <li class="col-xs-12 menubar2_mainItem">
      <a href="">Contact</a>
    </li>
  </ul>
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
    // Menubar: vcMenubar
  },
  mounted: function () {
    // console.log("vcMenubar.vue mounted");
  },
  methods: {        
  }
}
</script>