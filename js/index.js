document.addEventListener("DOMContentLoaded", function() {

    // slå dig løs her... 

    //eksempel på at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))

let body = document.querySelector("body")
let favicon = document.createElement("link");
body.append(favicon);
// Slut favicon

let hero__section = document.querySelector(".hero");
// hero__section.setAttribute("class","hero__main");

hero__section.innerHTML = `
// <nav class="hero__top"></nav>
// <img src="${hero.image}" alt="${hero.headline}">
// <div class="hero__kort">
<h1>${hero.headline}</h1>
 <p>${hero.copy}</p>
// </div>
`;

    let services_section = document.querySelector(".services");
    services.forEach((service) => {
    let card = document.createElement("section");
    card.setAttribute("class", "services__card");
    let billede = document.createElement("img");
    let title = document.createElement("h2");
    let kort_tekst = document.createElement("p");
    let kort_link = document.createElement("a");
  
    billede.src = service.illustration;
    title.textContent = service.headline;
    kort_tekst.textContent = service.text;
    kort_link.textContent = service.linktext;
//   let list = document.createElement("ul");
//   service.headline.forEach((nyTekst) => {
//     let listItem = document.createElement("li");
//     listItem.textContent = nyTekst;
//     list.append(listItem);
//   });
    card.append(billede);
    card.append(title);
    card.append(kort_tekst);
    card.append(kort_link);
//   card.append(list);
    services_section.append(card);
});

advantages.forEach((adv) => {
    let card = document.createElement("section");
    card.setAttribute("class", "services__card");
    let billede = document.createElement("img");
    let title = document.createElement("h2");
    let kort_tekst = document.createElement("p");
    let kort_link = document.createElement("a");
  
    billede.src = service.illustration;
    title.textContent = service.headline;
    kort_tekst.textContent = service.text;
    kort_link.textContent = service.linktext;
//   let list = document.createElement("ul");
//   service.headline.forEach((nyTekst) => {
//     let listItem = document.createElement("li");
//     listItem.textContent = nyTekst;
//     list.append(listItem);
//   });
    card.append(billede);
    card.append(title);
    card.append(kort_tekst);
    card.append(kort_link);
//   card.append(list);
    services_section.append(card);
});


// let hero_background = `
// background: url(${hero.image});
// background-size: cover;
// `;
// hero__section.style = hero_background;
let footer_section = document.createElement("footer");
document.body.append(footer_section);
footer_section.setAttribute("class","footer");

footer_section.innerHTML = `
// <section class=""></section>
// <div class="hero__kort">
<h1>${hero.headline}</h1>
 <p>${hero.copy}</p>
// </div>
`;



}) // DOMContentLoaded slut