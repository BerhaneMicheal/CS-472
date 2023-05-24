document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.querySelector("#search-button");
  const inputBox = document.querySelector("#input-box");
  const resultList = document.querySelector("#result");

  const printData = (data) => {
      resultList.innerHTML = '';
      data.forEach(item => {
          let liElement = document.createElement('li');
          liElement.innerHTML = `<span class="wordtype">${item.wordtype}</span>::${item.definition}`;
          resultList.appendChild(liElement);
      });
  };

  searchBtn.addEventListener('click', () => {
      let word = inputBox.value;
      console.log(word);
      fetch(`http://localhost:3000/search/${word}`)
          .then(response => response.json())
          .then(printData)
          .catch(console.error);
  });
});
