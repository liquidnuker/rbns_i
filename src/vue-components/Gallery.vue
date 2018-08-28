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
    <!-- vcModal1 -->
    <!-- dont show if currentItems not yet ready -->
    <div v-if="isModalReady" :class="{
      'bs4modal vcmodal_hide': !modalVisible,
      'bs4modal vcmodal_show':  modalVisible}"
      id="bs4modal_bg"
      data-backdrop="static" tabindex="-1" role="dialog"
      aria-labelledby="bs4modal_title" aria-hidden="true"
      @click="closeMainModal($event)">
      <div class="bs4modal-dialog bs4modal-md" role="document">
        <div :class="{
          'bs4modal-content': !vcModal1_animateEntry,
          'bs4modal-content animated bounceIn': vcModal1_animateEntry}">
          <div class="bs4modal-header">
            <h2 class="bs4modal-title" v-if="currentItems[currentIndex].id !== undefined">
            {{ currentItems[currentIndex].id }}
            </h2>
            <button type="button" class="btn btn_modal_close" data-dismiss="bs4modal" aria-label="Close" @click="toggleModal(false)">
            <span aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/></svg>
            </span>
            </button>
          </div>
          <div class="bs4modal-body">
            <span v-if="!isModalImgReady">spinner</span>
            <img v-else :src="'src/img/categories/' + currentCategory + '/' + currentItems[currentIndex].img +
            '.jpg'" :alt="currentItems[currentIndex].description"
            :title="currentItems[currentIndex].description">
          </div>
          <div class="bs4modal-footer">
            <button type="button" class="btn btn_modal_prevnext" data-dismiss="bs4modal" @click="flipModalIndex('prev')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
            Prev</button>
            <button type="button" class="btn btn_modal_prevnext"
            @click="flipModalIndex('next')">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- end vcModal1 -->
    <div class="col-sm-12 gallery panel_container">
      <!-- breadcrumb -->
      <div class="row">
        <span class="breadcrumb">
          <a href="#/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg></a>
          <a href="#/">Home</a>
          &gt;&nbsp;Gallery
        </span>
      </div>
      <!-- /end breadcrumb -->
      <!--begin panel1-->
      <div class="panel">
        <header class="panel_heading">
          <h2 class="title--centered">Galleries</h2>
          <summary>
          <h3 class="title--centered">
          Enjoy masterpieces lorem ipsum dolor sit amet...
          </h3>
          </summary>
          <hr class="hr--primary">
        </header>
        <div class="panel_body">
          <div class="row bonsai_gallery">
            <nav class="col-sm-3 bonsai_filter">
              <!--side filter-->
              <h4>Species</h4>
              <ul class="bonsai_species" v-for="i in navCategories">
                <li>
                  <a @click="filterSpecies(i)" 
                   @keyup.enter="filterSpecies(i)" tabindex="0">{{ capitalize(i) }}</a>
                </li>
              </ul> 
              <h4>Value:</h4>
              <ul class="bonsai_value">
                <li tabindex="0"><a>5</a></li>
                <li tabindex="0"><a>4</a></li>
                <li tabindex="0"><a>3</a></li>
                <li tabindex="0"><a>2</a></li>
                <li tabindex="0"><a>1</a></li>
              </ul>
              <!--end side filter-->
            </nav>
            <div class="row col-sm-9 gallery">
              <!-- page controls -->
              <div class="jspager1_holder">
                
                <nav class="jspager1">
                  <!-- page selector/firstlast/page buttons -->
                  <!-- page selector -->
                  <aside class="jspager1_totalpagesholder">
                    <label for="jspager1_select">Page:</label>
                    <p id="jspager1_currentpage"></p>
                    <select id="jspager1_select" name="jspager1_select" class="jspager1_select" tabindex="0" v-model="currentPage"
                      @change="pageJump($event.target.value)">
                      <option v-for="i in totalPages" :value="i">{{ i }}</option>
                    </select>
                    <p id="jspager1_totalpages">of {{ totalPages }}</p>
                  </aside>
                  <!-- /page selector -->
                  <!-- firstlast -->
                  <aside class="jspager1_prevnextholder">
                    <!-- first -->
                    <button id="jspager1_first" class="btn btn_first" tabindex="0" @click="showItems(1)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                    <span>First</span>
                    </button>
                    <!-- prev -->
                    <button id="jspager1_prev" class="btn btn_prev" tabindex="0" @click="flip()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                    <span>Prev</span>
                    </button>
                    <!-- next -->
                    <button id="jspager1_next" class="btn btn_next" tabindex="0" @click="flip('next')">
                    <span>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                    </button>
                    <!-- last -->
                    <button id="jspager1_last" class="btn btn_last" tabindex="0" @click="showItems(totalPages)">
                    <span>Last</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                    </button>
                  </aside>
                  <!-- /firstlast -->
                  
                  <!-- page buttons -->
                  <aside id="jspager1_pagebtnholder" class="jspager1_pagebtnholder"
                    aria-atomic="true" aria-live="polite" aria-relevant="additions">
                    <template v-for="(i, index) in buttonSet">
                    <a v-if="i === currentPage"
                      class="jspager1_pagebtn jspager1_pagebtn--active" tabindex="0"
                      :aria-posinset="currentPage" :aria-setsize="buttonSet.length" aria-selected="true"
                    @click="showItems(i)">{{ i }}</a>
                    <a v-else class="jspager1_pagebtn" tabindex="0"
                      :aria-posinset="index + 1" @click="showItems(i)">
                      {{ i }}
                    </a>
                    </template>
                  </aside>
                  <!-- /page buttons -->
                  
                  <!-- jump to page/perpage -->
                  <!-- jump to page -->
                  <aside class="jspager1_jumptopageholder">
                    <label for="jspager1_jump">jump to page:&nbsp;</label>
                    <input type="tel" name="jspager1_jump" id="jspager1_jump" class="jspager1_jump" placeholder="" tabindex="0"
                    :value="toPage" v-model="toPage" @keyup.enter= "pageJump(toPage)" />
                    <button id="jspager1_jumpbtn" class="btn" tabindex="0"
                    @keyup.enter= "pageJump(toPage)" @click= "pageJump(toPage)">Go</button>
                  </aside>
                  <!-- /jump to page -->
                  
                  <!-- perpage -->
                  <aside class="jspager1_perpageholder">
                    <label for="jspager1_perpage">perPage:&nbsp;</label>
                    <select id="jspager1_perpage" name="jspager1_perpage"
                      class="jspager1_perpage" tabindex="0" v-model="perPage"
                      @change="changePerPage($event.target.value)">
                      <option v-for="i in perPageItems" :value="i">{{ i }}</option>
                    </select>
                  </aside>
                  <!-- /perpage -->
                </nav>
              </div>
              <!-- /page controls -->
              <div class="row col-sm-12">
                <div class="galleryContainer">
                  <!-- grid for rwd -->
                  <ul v-for="(i, index) in itemList" class="col-xs-12 col-sm-4 col-lg-3 gridder">
                    <li class="ajaxbox" :aria-posinset="index + 1" :aria-setsize="itemList.length">
                      <span v-if="!isThumbsReady">spinner</span>
                      <img v-else :src="'src/img/categories/' + currentCategory + '/' + i.img + '_thumb.jpg'" :alt="i.id"
                      :title="i.id"
                      @click="launchModal(i.id)"><br>
                      <p>{{ i.id }} Value{{ i.value }}</p>
                    </li>
                  </ul>
                  <!-- close grid -->
                </div>
              </div>
              <footer class="row col-sm-12">
                <!--bottom controls-->
                <div class="gallery-listing-paginator">
                </div>
                <!--bottom controls-->
              </footer>
            </div>
          </div>
        </div>
      </div>
      <!--/panel1-->
    </div>
    </main>
    <!--/panel container-->
  </div>
  <!-- /.container -->
</div>
</template>
<script>
const vcStage = () => import('./vcStage.vue');

import {jsonDir} from "../js/jsondir.js";
import {bonsaiCategories} from "../js/bonsaicategories.js";
import {itemExists} from "../js/itemexists.js";
import {router} from "../js/router.js";
import {axios_get} from "../js/axios_get.js";

import Pager from "../js/pager.js";
import {pageBtns} from "../js/pagebtns.js";
import {indexFinder} from "../js/indexfinder.js";
export default {
  data() {
    return {
        navCategories: "",
        isThumbsReady: null,

        currentCategory: null,
        allItems: "",
        currentItems: "",
        itemList: "", // paginated items

        pg: "",
        perPage: 12,
        perPageItems: [4, 8, 12],
        totalPages: "",
        currentPage: "",
        temp: "", // temp page buttons
        buttonSet: "",

        // for modal
        currentIndex: 0,
        modalVisible: false,
        vcModal1_animateEntry: false,
        isModalReady: false, // prevent undefined modal contents
        isModalImgReady: false, // remove last viewed modal image
        
        // for carousel currentIndex
        carouselIndex: 3
      };
    },
    components: {
      vcStage: vcStage,
    },
    mounted: function () {
      this.navCategories = bonsaiCategories;
      this.checkCategory();
    },
    watch: {
      $route: function () {
        this.checkCategory();
      }
    },
    methods: {
      capitalize: function(value) {
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
      checkCategory: function () {
        // check if category exists before loading json
        let category = this.$route.params.species.toLowerCase();

        if (!itemExists(category, bonsaiCategories)) {
          // console.log("404/revert to gallery/defaultItem");
          router.push({
            path: "/gallery/chokkan"
          });
        } else {
          this.currentCategory = category;
          this.loadItems(this.currentCategory);
        }
      },
      filterSpecies: function(species) {
        router.push({
          path: "/gallery/" + species
        });
      },
      loadItems: function (category) {
        this.isThumbsReady = false;
        const jsonUrl = jsonDir + category + ".json";

        axios_get(jsonUrl)
          .then((response) => {
            this.currentItems = response.data[this.currentCategory];
          })
          .then(() => {
            this.isThumbsReady = true;
            this.activatePager();
          });
      },
      activatePager: function() {
        this.pg = null;
        this.pg = new Pager({
          perPage: this.perPage,
          data: this.currentItems
        });
        this.totalPages = this.pg.getTotalPages();

        this.setPageBtns();
        this.showItems(1);
      },
      showItems: function(num) {
        this.itemList = this.pg.page(num);
        this.currentPage = this.pg.currentPage;

        this.changePageBtns();
      },
      changePerPage: function(perPage) {
        this.perPage = perPage;
        this.activatePager();
      },
      flip: function(direction) {
        if (direction === "next") {
          this.showItems(this.pg.next());
        } else {
          this.showItems(this.pg.prev());
        }
      },
      flipModalIndex: function(direction) {
        console.log("flipModalIndex");
        if (direction === "next") {
          this.currentIndex = this.currentIndex + 1;
          this.currentIndex = this.currentIndex % this.currentItems.length;
        } else {
          if (this.currentIndex === 0) {
            this.currentIndex = this.currentItems.length; // go to last
          }
          this.currentIndex = this.currentIndex - 1;
        }
      },
      setPageBtns: function() {
        this.temp = [];
      for (let i = 0, l = this.pg.getTotalPages(); i < l; i++) {
          this.temp.push(pageBtns(i, l));
        }
      },
      changePageBtns: function() {
        this.buttonSet = this.temp[this.pg.currentPage - 1];
      },
      pageJump: function(page) {
        this.showItems(Number(page));
      }, 
      launchModal: function(id) {
        this.currentIndex = indexFinder("id", id, this.currentItems);
        this.toggleModal(true);
      },
      toggleModal: function(isActive) {
        this.modalVisible = isActive;
        this.isModalImgReady = isActive;
        this.isModalReady = isActive;
      },
      closeMainModal: function(event) {
        if (event.target.id === "bs4modal_bg") {
          this.toggleModal(false);
        }
      },
    }
};
</script>