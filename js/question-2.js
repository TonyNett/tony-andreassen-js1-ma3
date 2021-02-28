// QUESTION 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const displayContainer = document.querySelector(".display");

async function getData() {
  
  const response = await fetch(url);

  const answer = await response.json();

  const facts = answer.results;

  displayContainer.innerHTML = "";

  let html = "";

  for(let i = 0; i < facts.length; i++) {
    
    html += `${facts[i].name}
    ${facts[i].rating}
    ${facts[i].tags.length}
    `
            
    
    console.log(html);

    if (i === 7) {
      break;
    }

    displayContainer.innerHTML = html;
  }




}



getData();
