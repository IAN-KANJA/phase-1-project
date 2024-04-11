let URL = "https://api.artic.edu/api/v1/artworks/search?q=cats";
function renderOneImages(data) {
  let card = document.createElement("li");
  card.className = "card";
  card.innerHTML = `
 <img   src="${data.thumbnail.lqip}" alt="A bronze lion, deep green and muscular, looks out in the distance from its pedestal in front of the Art Institute of Chicago." width="550" height="562">

 <div class="content">
    <h4>${data.title}</h4>
    <p>${data.alt_text}</p>
    
 </div>
 `;
  document.querySelector("#data-list").appendChild(card);
}

function getAllImages() {
  fetch("http://localhost:3000/data")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((data) => renderOneImages(data));
    });
  console.log("before fetch returns");
}

function intialize() {
  //     getimages()
  //     console.log('after get images')
  getAllImages();
}
intialize();
