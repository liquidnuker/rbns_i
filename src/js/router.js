import vcRouterView from "../vue-components/RouterView.vue";

Vue.use(VueRouter);

const vcHome = (resolve) => import("../vue-components/Home.vue").then(resolve);
const vcArticles = (resolve) => import("../vue-components/Articles.vue").then(resolve);
const vcArtists = (resolve) => import("../vue-components/Artists.vue").then(resolve);
const vcGallery = (resolve) => import("../vue-components/Gallery.vue").then(resolve);
const vcGlobal404 = (resolve) => import("../vue-components/Global404.vue").then(resolve);

const routes = [{
  path: "/",
  component: vcHome
}, {
  path: "/articles",
  component: vcArticles
}, {
  path: "/artists",
  component: vcArtists
}, {
  path: "/gallery/:species",
  component: vcGallery
},
{
  path: '*',
  component: vcGlobal404
}];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(vcRouterView)
});

export {router};