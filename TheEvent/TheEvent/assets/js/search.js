document.querySelector('form').addEventListener('submit', async function(event) {
  event.preventDefault();
  var salary = document.getElementById('search-input').value;

  const apiURL = "https://script.google.com/macros/s/AKfycbz8CnuOFNanGvWu04af7jlrDkkL51li7NpiAra9RihN0VS3YkOkGDtiXqsdfqAHH346hQ/exec"
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      "salary": "1000"
    }),
    redirect: 'follow'
  };
  fetch(apiURL, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
    // fetch('https://script.google.com/macros/s/AKfycbxdoQfEo_2RTbIjDb_X_UHIcvtzRNAWjO-rxEaOCCkx-UrUm8tNJt1YNvY1cTHMvBNIAQ/exec', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*'
    //     },
    //     body: JSON.stringify({ salary: salary })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     document.getElementById('result').textContent = JSON.stringify(data);
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    // });
});