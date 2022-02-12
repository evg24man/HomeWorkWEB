// Закрытие главного меню-------------------------------------------------
const menuIcon = document.querySelector('#menu-icon');
const menu = document.querySelector('#menu');
const closeIcon = document.querySelector('#close-icon');

menuIcon.addEventListener("click", function () {
	menu.classList.toggle('_hide-burger-menu');
});
closeIcon.addEventListener("click", function () {
	menu.classList.add('_hide-burger-menu');
});
//--------------------------------------------------------------------------

// Откр-Закр блок с фильтром характеристик одежды
const button = document.querySelector('#click-button');
const sizeFilter = document.querySelector('#size-filter');

button.addEventListener("click", function () {
	sizeFilter.classList.toggle('input-block-hide');
});
//----------------------------------------------------------------------

// Блок с фильтром одежды ----------------------------------------------
const filterButton = document.querySelector('#filter-button');
const filterBlock = document.querySelector('#filter-block');
const filterButtonHide = document.querySelector('#filter-button-hide');

filterButton.addEventListener("click", function () {
	filterBlock.classList.remove('_hide-filter');
});
filterButtonHide.addEventListener("click", function () {
	filterBlock.classList.add('_hide-filter');
});
//--------------------------------------------------------------------------

// Категории Фильтра ------------------------------------------------------
const category = document.querySelectorAll("[data-name='filter-category']");

category.forEach(function (item) {
	item.addEventListener("click", function () {
		this.nextElementSibling.classList.toggle('_hide-sub-category');
	})
})