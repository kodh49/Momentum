const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
  alert("Title was clicked!");
}

title.addEventListener("click", handleTitleClick);

function handleTitleMouseEnter() {
  title.innerText = "Mouse is here!";
  console.log("Mouse entered!");
}

title.addEventListener("mouseenter", handleTitleMouseEnter);

function handleTitleMouseLeave() {
  title.innerText = "Mouse is gone!";
  console.log("Mouse Left!");
}

title.addEventListener("mouseleave", handleTitleMouseLeave);
