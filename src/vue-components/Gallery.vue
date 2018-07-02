<template>
<div>
  <!-- container -->
  <div class="container">
    <!--begin menubar2-->
    <nav>
      <vcMenubar />
    </nav>
    <!--end menubar2-->
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
    <div v-if="currentItems" :class="{
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
            <h2 class="bs4modal-title">
              {{ currentItems[currentIndex].id }}
            </h2>
            <button type="button" class="btn btn1-01" data-dismiss="bs4modal" aria-label="Close" @click="toggleModal(false)">
            <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="bs4modal-body">
            <img :src="'src/img/categories/' + currentCategory + '/' + currentItems[currentIndex].img +
      '.jpg'" :alt="currentItems[currentIndex].description">
          </div>
          <div class="bs4modal-footer">
            <button type="button" class="btn btn1-02" data-dismiss="bs4modal" @click="flipModalIndex('prev')">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
            Prev</button>
            <button type="button" class="btn btn1-02" 
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
    <a href="#/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></a>
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
          <section class="row bonsai_gallery">
            <nav class="col-sm-3">
              <!--side filter-->
              <vcGalleryLeftNav1 />
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
          :aria-posinset="currentPage" aria-selected="true"
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
              <section id="gallery-placeholder" class="row col-sm-12">
                <div id="galleryContainer">
                  <!-- grid for rwd -->
                  <div v-for="(i, index) in itemList" class="col-xs-12 col-sm-4 col-lg-3 gridder">
                    <div id="ajaxbox">
                      <img v-if="currentCategory" :src="'src/img/categories/' + currentCategory + '/' + i.img + '_thumb.jpg'" :alt="i.id"
                      @click="setCurrentIndex(i.id)"><br>
                      <p>{{ i.species }} {{ i.value }}</p>
                    </div>
                  </div>
                  <!-- close grid -->
                </div>
              </section>
              <footer class="row col-sm-12">
                <!--bottom controls-->
                <div class="gallery-listing-paginator">
                </div>
                <!--bottom controls-->
              </footer>
            </div>
          </section>
        </div>
      </div>
      <!--/panel1-->
    </div>
    </main>
    <!--/panel container-->
    <!--begin footer2-->
    <footer>
      <vcFooter />
    </footer>
    <!--end footer2-->
  </div>
  <!-- /.container -->
</div>
</template>
<script>
const vcMenubar = () => import('./vcMenuBar.vue');
const vcStage = () => import('./vcStage.vue');
const vcGalleryLeftNav1 = () => import('./vcGalleryLeftNav1.vue');
const vcFooter = () => import('./vcFooter.vue');

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
        modalVisible: true,
        vcModal1_animateEntry: false,

        // for carousel currentIndex
        carouselIndex: 3
      };
    },
    components: {
      vcMenubar: vcMenubar,
      vcFooter: vcFooter,
      vcStage: vcStage,
      vcGalleryLeftNav1: vcGalleryLeftNav1
    },
    mounted: function () {
      this.checkCategory();
    },
    watch: {
      $route: function () {
        this.checkCategory();
      }
    },
    methods: {
      checkCategory: function () {
        // check if category exists before loading json
        let categoryToCheck = this.$route.params.species.toLowerCase();

        if (!itemExists(categoryToCheck, bonsaiCategories)) {
          console.log("404/revert to gallery/defaultItem");
          router.push({
            path: "/gallery/chokkan"
          });
        } else {
          this.currentCategory = categoryToCheck;
          this.loadItems(this.currentCategory);
        }
      },
      loadItems: function (category) {
        const jsonUrl = "./src/js/ajax/" + category + ".json";

        axios_get(jsonUrl)
          .then((response) => {
            this.currentItems = response.data[this.currentCategory];
          })
          .then(() => {
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
        let currentIndex = this.currentIndex;
        let currentItems = this.currentItems;

        if (direction === "next") {
          currentIndex = currentIndex + 1;
          currentIndex = currentIndex % currentItems.length;
          this.currentIndex = currentIndex;  
        } else {
          if (currentIndex === 0) {
            currentIndex = currentItems.length; // go to last
          }
          currentIndex = currentIndex - 1;
          this.currentIndex = currentIndex;
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
      setCurrentIndex: function(id) {
        this.currentIndex = indexFinder("id", id, this.currentItems);

        this.toggleModal(true);
      },
      toggleModal: function(isActive) {
        this.modalVisible = isActive;
      },
      closeMainModal: function(event) {
        if (event.target.id === "bs4modal_bg") {
          this.toggleModal(false);
        }
      },
    }
};
</script>