/**検索フォームを作成する */
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', () => {
  const keyword = searchInput.value;
  console.log(keyword);
});




/**検索対象の要素を定義する */
const searchTargets = document.querySelectorAll('.search-target');








/**検索キーワードを取得する */
searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.trim().toLowerCase();
    console.log(keyword);
  });






/**検索結果を表示する */
const searchResults = document.getElementById('search-results');

function showSearchResult(target) {
  target.style.display = 'block';
}

function hideSearchResult(target) {
  target.style.display = 'none';
}






/**検索条件に合う要素を絞り込む */
function filterSearchResults() {
    searchTargets.forEach((target) => {
      const text = target.textContent.toLowerCase();
      if (text.includes(keyword)) {
        showSearchResult(target);
      } else {
        hideSearchResult(target);
      }
    });
  }

  searchInput.addEventListener('input', filterSearchResults);








/**検索結果がない場合のメッセージを表示する */
function showNoResultsMessage() {
    searchResults.innerHTML = '<p>現在お求めのご条件の求人はございません。</p>';
  }
  
  function clearSearchResults() {
    searchResults.innerHTML = '';
  }






/**検索結果の表示を更新する */
function updateSearchResults() {
    const visibleTargets = Array.from(searchTargets).filter((target) => target.style.display === 'block');
    if (visibleTargets.length === 0) {
      showNoResultsMessage();
    } else {
      clearSearchResults();
    }
  }
  
  searchInput.addEventListener('input', updateSearchResults);






/**検索機能を最適化する */
let timeoutId = null;
const debounceTime = 300;

function debouncedFilterSearchResults() {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(filterSearchResults, debounceTime);
}

searchInput.addEventListener('input', debouncedFilterSearchResults);

