const baseHtml = document.querySelector('.spreadsheets--item.js-base');
const spreadsheets = document.querySelector('.spreadsheets');
const apiURL = 'https://script.google.com/macros/s/AKfycbz8CnuOFNanGvWu04af7jlrDkkL51li7NpiAra9RihN0VS3YkOkGDtiXqsdfqAHH346hQ/exec';


document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('search-button').addEventListener('click', async function () {
    var searchInput = document.getElementById('search-input').value;

    // フィルター処理を行う
    const filteredData = await filterData(searchInput);
    
    // フィルター後のデータを表示
    renderData(filteredData);
  });
});


function renderData(data) {
  // データを表示する前に既存のデータをクリア
  spreadsheets.innerHTML = '';
  console.log(data);

  data.forEach(entry => {
    const copy = baseHtml.cloneNode(true);
    copy.classList.remove('js-base');
    copy.querySelector('.spreadsheets--type').textContent = entry.type;
    copy.querySelector('.spreadsheets--title').textContent = entry.title;
    copy.querySelector('.spreadsheets--description').textContent = entry.description;
    copy.querySelector('.spreadsheets--wage').textContent = entry.wage;
    copy.querySelector('.spreadsheets--time').textContent = entry.time;
    copy.querySelector('.spreadsheets--members').textContent = entry.members;
    copy.querySelector('.spreadsheets--place').textContent = entry.place;
    copy.querySelector('.spreadsheets--terms').textContent = entry.terms;

    spreadsheets.appendChild(copy);
  });
}

function loadData() {
  fetch(apiURL)
    .then(response => response.json())
    .then(data => renderData(data));
}

loadData();


async function filterData(searchValue) {
  const response = await fetch(apiURL);
  const data = await response.json();

  // 検索値と一致するデータのみを抽出
  const filteredData = data.filter(entry => entry.wage == searchValue);
  return filteredData;
}

