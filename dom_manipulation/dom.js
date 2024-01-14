const container = document.querySelector("#container");

const content = document.createElement("div");

content.classList.add("content");
content.textContent = "Glory be to Zimzamp";

container.appendChild(content);

const red = document.createElement("p");

red.textContent = "red";
red.style.color = "red";

container.appendChild(red);

const blue = document.createElement("h3");

blue.textContent = "blue h3";
blue.style.color = "blue";

container.appendChild(blue)

const newdiv = document.createElement("div");
newdiv.style.backgroundColor = "pink";
newdiv.style.border = "solid black";

const newh1 = document.createElement("h1");
newh1.textContent = "indiv";

const newp = document.createElement("p");
newp.textContent = "p in div";

newdiv.appendChild(newh1);
newdiv.appendChild(newp);

container.appendChild(newdiv);


