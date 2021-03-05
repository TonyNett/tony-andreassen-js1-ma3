// QUESTION 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const displayContainer = document.querySelector(".display");

async function getData() {
  
  const response = await fetch(url);

  const answer = await response.json();

  const facts = answer.results;

  // displayContainer.innerHTML = "";

  let html = "";

  for(let i = 0; i < facts.length; i++) {
    
    // html += `${facts[i].name}
    // ${facts[i].rating}    
    // `
        
    html +=
`<div>
   <h2>${facts[i].name}</h2>
   <p>Rating: ${facts[i].rating} </p>
   <p>Number of tags: ${facts[i].tags.length} </p>
</div>
`
    
    console.log(html);

    if (i === 8) {
      break;
    }

    displayContainer.innerHTML = html;
  }




}



getData();
