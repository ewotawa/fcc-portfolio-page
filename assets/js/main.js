let projects = [
  [
    "Willie McGee",
    "I created this project for my freeCodeCamp Responsive Web Design Tribute Page assignment. The page functionality features HTML and CSS. The content profiles my favorite baseball player.",
    "https://ewotawa.github.io/willie-mcgee/",
    "https://codepen.io/ewotawa/full/WNwroBV"
  ],
  [
    "Will Tom Eat It?",
    "I created this project for my freeCodeCamp Responsive Web Design Build a Survey Form assignment. The page functionality features HTML and CSS. The content celebrates the Will Tom Eat It? segment on the tastytrade network.",
    "https://ewotawa.github.io/fcc-form/",
    "https://codepen.io/ewotawa/full/bGppvoP"
  ],
  [
    "Jack's Lanterns",
    "I created this project for my freeCodeCamp Responsive Web Design Build a Product Landing Page assignment. The page functionality features HTML and CSS. Halloween is my favorite holiday.",
    "https://ewotawa.github.io/fcc-product-landing-page/",
    "https://codepen.io/ewotawa/full/PoNNMGo"
  ],
  [
    "The SeaMonkey Project",
    "I created this project for my freeCodeCamp Responsive Web Design Build a Technical Documentation Page assignment. The page functionality features HTML, CSS, and JavaScript. I've been a fan of The SeaMonkey Project since the application came pre-installed with LXLE, the distribution I installed on my first Linux laptop.",
    "https://ewotawa.github.io/fcc-technical-doc/",
    "https://codepen.io/ewotawa/full/ExKgRBq"
  ]
];

/*
for (i = 0; i < projects.length; i++) {
console.log(projects[i][0]);
}
*/

function addProject(projects) {
for (project in projects) {

  /*
  console.log(project);
  */

  /* create a new element to hold the project */
  let article = document.createElement("article");

  /* add style tags to article */
  article.setAttribute("class", "project-tile");

  /* add header to article */
  let header = document.createElement("h3");
  header.setAttribute("class", "flex-item");
  let headerText = document.createTextNode(projects[project][0]);
  header.appendChild(headerText);
  article.appendChild(header);

  /* add description to article */
  let p = document.createElement("p");
  p.setAttribute("class", "flex-item");
  let pText = document.createTextNode(projects[project][1]);
  p.appendChild(pText);
  article.appendChild(p);

  /* add github link to article */
  let github = document.createElement("a");
  github.setAttribute("class", "flex-item");
  let githubIcon = document.createElement("i");
  githubIcon.setAttribute("class", "fab fa-github");
  github.appendChild(githubIcon);
  let githubText = document.createTextNode(' GitHub');
  github.appendChild(githubText);
  github.setAttribute("href",  projects[project][2]);
  github.setAttribute("target", "_blank");
  article.appendChild(github);

  /* add codepen link to article */
  let codepen = document.createElement("a");
  codepen.setAttribute("class", "flex-item");
  let codepenIcon = document.createElement("i");
  codepenIcon.setAttribute("class", "fab fa-codepen");
  codepen.appendChild(codepenIcon);
  let codepenText = document.createTextNode(' CodePen');
  codepen.appendChild(codepenText);
  codepen.setAttribute("href",  projects[project][3]);
  codepen.setAttribute("target", "_blank");
  article.appendChild(codepen);

  /*
  console.log(article);
  */

  /* add to the DOM */
  var container = document.getElementById("projects");

  /*
  console.log(container);
  */

  container.appendChild(article);
}

}

document.body.onload = addProject(projects);
