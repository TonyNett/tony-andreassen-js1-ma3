// QUESTION 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

async function getData() {
  
  const response = await fetch(url);

  const answer = await response.json();

  console.log(answer.results);
}



getData();
