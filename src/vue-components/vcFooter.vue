<template>
<div class="row footer2 container" role="footer">
  <!--begin segment1-->
  <section class="col-sm-12 col-md-6">
    <vcFooterSegment1 />
  </section>
  <!--end segment1-->
  <!--begin segment2-->
  <section class="col-sm-12 col-md-3">
    <vcFooterSegment2 />
  </section>
  <!--end segment2-->
  <!--begin segment3-->
  <section class="col-sm-12 col-md-3">
    <vcFooterSegment3 />
  </section>
  <!--end segment3-->
</div>
</template>
<script>
const vcFooterSegment1 = () => import('./vcFooterSegment1.vue');
const vcFooterSegment2 = () => import('./vcFooterSegment2.vue');
const vcFooterSegment3 = () => import('./vcFooterSegment3.vue');
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
  vcFooterSegment1: vcFooterSegment1,
  vcFooterSegment2: vcFooterSegment2,
  vcFooterSegment3: vcFooterSegment3
},
mounted: function () {
// console.log("vcFooter.vue mounted");
},
methods: {
}
}
</script>