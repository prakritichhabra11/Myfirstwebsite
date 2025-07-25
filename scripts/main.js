// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");

// Update the text content of the <h1> when it's clicked
// myHeading.addEventListener("click", function () {
//   myHeading.textContent = "Hello!";
// });
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc.includes("firefox.jpeg")) {
    myImage.setAttribute("src", "images/donkey.jpeg");
  } else {
    myImage.setAttribute("src", "images/firefox.jpeg");
  }
});
let myButton = document.querySelector("button");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = setUserName;
