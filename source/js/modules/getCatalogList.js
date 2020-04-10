'use strict';

(function () {
  let catalogButton = document.querySelector('.header-bottom__button');
  let catalogList = document.querySelector('.catalog-list');
  let mainColumn = document.querySelector('.main__column');

  catalogButton.addEventListener('click' , function() {
    catalogButton.classList.toggle('js-btn-active');
    catalogList.classList.toggle('js-active');
    mainColumn.classList.toggle('js-active');
  })
})();
