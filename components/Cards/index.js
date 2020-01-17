// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(articles){
    //console.log("I am in createCard()."); 
    var card = document.createElement("div"); 
    var headLineDiv = document.createElement("div"); 
    var authorDiv = document.createElement("div");
    var imgDiv = document.createElement("div"); 
    var img = document.createElement("img"); 
    var span = document.createElement("span");

    card.classList.add("card"); 
    headLineDiv.classList.add("headline");  
    authorDiv.classList.add("author"); 
    imgDiv.classList.add("img-container");
   
    headLineDiv.textContent = articles.headline; 
    img.setAttribute("src", articles.authorPhoto);
    span.textContent = ("By " + articles.authorName);

    card.appendChild(headLineDiv); 
    imgDiv.appendChild(img);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(span); 
    card.appendChild(authorDiv);

    //console.log("cards div: " + card); 
    return card; 
}

    axios.get("https://lambda-times-backend.herokuapp.com/articles")
      .then(function (response) {
        // return response;
        for(var article in response.data.articles){
            response.data.articles[article].forEach(function(card){
                document.querySelector(".cards-container").appendChild(createCard(card));  
            });
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("finally"); 
      });