<template>
<div>
  <ul class="bonsai_species">
    <li><h4>Species</h4></li>
    <li><a id="all">All</a></li>
    <li><a id="chokkan">Chokkan</a></li>
    <li><a id="fukinagashi">Fukinagashi</a></li>
    <li><a id="hokidachi">Hokidachi</a></li>
    <li><a id="kabudachi">Kabudachi</a></li>
    <li><a id="moyogi">Moyogi</a></li>
    <li><a id="sokan">Sokan</a></li>
    <li><a id="yose-ue">Yose-ue</a></li>
    <li><a id="han-kengai">Han-kengai</a></li>
  </ul>
  <ul class="bonsai_value">
    <li><h4>Value:</h4></li>
    <li><a>5</a></li>
    <li><a>4</a></li>
    <li><a>3</a></li>
    <li><a>2</a></li>
    <li><a>1</a></li>
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
  },
  mounted: function () {
    // console.log("vcGalleryLeftNav1.vue mounted");
  },
  methods: {        
  }
}
</script>