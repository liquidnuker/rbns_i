export default class Carousel1_04 {
  constructor(opts) {
    this.items = opts.dataSrc;
    this.cIndex = opts.cIndex;
    this.mainItemContainer = opts.mainItemContainer;
    this.itemContainer = [];
    this.itemHolderClass = opts.itemHolderClass;

    this.navPrevious = opts.navPrevious;
    this.navNext = opts.navNext;
    this.item_active = opts.item_active;
    this.item_inActive = opts.item_inActive;

    // for pageButtons
    this.pageBtnClass = opts.pageBtnClass;
    this.pageButtons = [];
    this.activePageButton = 0;
    this.pageBtn_active = opts.pageBtn_active;
    this.pageBtn_inActive = opts.pageBtn_inActive;
  }

  // prototypes
  init() {
    this.addEvents();
    this.showItems();
  }

  addEvents() {
    document.getElementById(this.navPrevious).addEventListener("click", () => {
      this.prevItem();
    });

    document.getElementById(this.navNext).addEventListener("click", () => {
      this.nextItem();
    });
  }

  showItems() {
    let items = this.items;

    for (let i = 0; i < items.length; i++) {
      // main items
      const itemHolder = document.createElement("div");
      itemHolder.className = this.itemHolderClass;
      itemHolder.innerHTML = `<div class="row">
      <img src='src/img/carousel/${items[i].imgSrc}.jpg'>
      </div>
      <div class="row carousel1-04_description">
      <p>${items[i].description}</p>
      </div>`;
      this.itemContainer.push(itemHolder);

      // page buttons
      const pageButtonItems = document.createElement("div");
      pageButtonItems.className = this.pageBtnClass;
      pageButtonItems.addEventListener("click", () => this.customPage(i));
      document.getElementById("carousel1-04_pagination").appendChild(pageButtonItems);
      this.pageButtons.push(pageButtonItems);
    }

    // default
    this.setActiveItems(this.cIndex);
  }

  setActiveItems(index) {
    let activeItem = index;
    let itemContainer = this.itemContainer;
    let pageButtons = this.pageButtons;
    let activePageButton = this.activePageButton;

    itemContainer[activeItem].className += this.item_active;

    pageButtons[activeItem].className += this.pageBtn_active;
    pageButtons[activeItem].setAttribute("aria-selected", true);

    if (activePageButton !== activeItem) {
      itemContainer[activePageButton].className = this.item_inActive;

      pageButtons[activePageButton].className = this.pageBtn_inActive;
      pageButtons[activePageButton].setAttribute("aria-selected", false);

      // set current activePageButton
      this.activePageButton = activeItem;
    }
    this.refresh();
  }

  prevItem() {
    if (this.cIndex === 0) {
      this.cIndex = this.items.length; // go to last
    }
    this.cIndex = this.cIndex - 1;
    this.setActiveItems(this.cIndex);
  }

  nextItem() {
    this.cIndex = this.cIndex + 1;
    this.cIndex = this.cIndex % this.items.length; // go to first
    this.setActiveItems(this.cIndex);
  }

  customPage(num) {
    this.cIndex = num;
    this.setActiveItems(this.cIndex);
  }

  refresh() {
    document.getElementById(this.mainItemContainer).appendChild(this.itemContainer[this.cIndex]);
  }
}

