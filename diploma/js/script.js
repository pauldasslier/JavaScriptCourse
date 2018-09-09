'use strict'
window.addEventListener('DOMContentLoaded', function() {

  let sliderTop = require('./parts/slider_top.js');
  let sliderBottom = require('./parts/slider_bottom.js');
  let modalDesign = require('./parts/modal_design.js');
  let modalGift = require('./parts/modal_gift.js');
  let modalConsult = require('./parts/modal_consult.js');
  let modalScroll = require('./parts/modal_scroll.js');
  let modalTime = require('./parts/modal_time.js');
  let loadImg = require('./parts/load_img.js');
  let getAccordion = require('./parts/accordion.js');

  sliderTop();
  sliderBottom();
  modalDesign();
  modalGift();
  modalConsult();
  modalScroll();
  modalTime();
  loadImg();
  getAccordion();


});
