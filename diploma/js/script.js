'use strict'
window.addEventListener('DOMContentLoaded', function() {

  let sliderTop = require('./parts/slider_top.js');
  let sliderBottom = require('./parts/slider_bottom.js');
  let modalDesign = require('./parts/modal_design.js');

  sliderTop();
  sliderBottom();
  modalDesign();

});
