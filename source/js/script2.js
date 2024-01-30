function showTab(tabIndex) {
  // Скрываем все блоки с классом "catalog__list"
  var lists = document.querySelectorAll('.catalog__list');
  for (var i = 0; i < lists.length; i++) {
    lists[i].classList.remove('catalog__list--active');
  }

  // Отображаем только нужный блок
  var selectedTab = document.getElementById('tab' + tabIndex);
  if (selectedTab) {
    selectedTab.classList.add('catalog__list--active');
  }
}
