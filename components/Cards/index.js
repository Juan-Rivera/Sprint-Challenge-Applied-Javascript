// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

/*
data{
    "articles":{
        "javascript":[
          0  card1{"headline":"ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects","authorPhoto":"./assets/sir.jpg","authorName":"SIR RUFF'N'STUFF"},
          1  card2{"headline":"Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences","authorPhoto":"./assets/bones.jpg","authorName":"BONES R. LIFE"},
          2  card3{"headline":"When to Rest, When to Spread: Why There Are Two Meanings Behind '...'","authorPhoto":"./assets/puppers.jpg","authorName":"PUPPER S. DOGGO"},
          3  card4{"headline":"Typescript: Ten Things you Should Know Before Building Your Next Angular Application","authorPhoto":"./assets/sir.jpg","authorName":"SIR RUFF'N'STUFF"}
        ],

        "bootstrap":[
          0  card1{"headline":"Bootstrap 5: Get a Sneak Peak at all the New Features","authorPhoto":"./assets/fido.jpg","authorName":"FIDO WALKSALOT"},
          1  card2{"headline":"UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"},
          2  card3{"headline":"The Hottest New Bootstrap 4 Components Every Developer Needs to Know About","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"}
        ],

        "technology":[
          0  card1{"headline":"AI: What Are the Ethical Ramifications of the Future?","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"},
          1  card2{"headline":"AR or VR: How We Will See the World Through a Digital Lense","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"},
          2  card3{"headline":"Quantum Computing: Where we Are Now, and Where We Will Be Very Soon","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"}
        ],

        "jquery":[
          0  card1{"headline":"History of Javascript Libraries: from jQuery to React","authorPhoto":"./assets/puppers.jpg","authorName":"PUPPER S. DOGGO"},
          1  card2{"headline":"jQuery Animations: When and Where to Use Them, and Not CSS","authorPhoto":"./assets/fido.jpg","authorName":"FIDO WALKSALOT"},
          2  card3{"headline":"Why I Use jQuery in Every Application I Create and Why You Should Too","authorPhoto":"./assets/fido.jpg","authorName":"FIDO WALKSALOT"}
        ],

        "node":[
          0  card1{"headline":"Node.js in 2018: Which Framework? Express, Sails, Hapi?","authorPhoto":"./assets/sir.jpg","authorName":"SIR RUFF'N'STUF"},
          1  card2{"headline":"MongoDB: NoSQL vs. SQL, the Debate Continues..","authorPhoto":"./assets/bones.jpg","authorName":"BONES R. LIFE"}
        ]
    }
}

*/

    let cardC = document.createElement('div');
    let headlineC = document.createElement('div');
    let authorC = document.createElement('div');
    let imgC = document.createElement('div');
    let imgSrc = document.createElement('img');
    let authorN = document.createElement('span');

    cardC.classList.add('card');
    headlineC.classList.add('headline');
    authorC.classList.add('author');
    
    headlineC.textContent = 
    authorN.textContent = 

    cardC.appendChild(headlineC);
    cardC.appendChild(authorC);
    authorC.appendChild(imgC);
    authorC.appendChild(authorN);
    imgC.appendChild(imgSrc);
    
    
