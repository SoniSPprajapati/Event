document.getElementById("mouse").onclick = function () {
  alert(" mouse clicked");
};

document.getElementById("mouse").addEventListener(
  "click",
  function (e) {
    console.log(e);
    alert("mouse clicked again");
  },
  false
);

propogation- stoPropogation

document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("clicked inside the ul");
  },
  false
);

document.getElementById("mouse").addEventListener(
  "click",
  function (e) {
    console.log("mouse clicked");
    e.stopPropagation();
  },
  false
);

// default prevanr method

document.getElementById("google").addEventListener(
  "click",
  function (e) {
    console.log("google clicked");
    e.preventDefault();
    e.stopPropagation();
  },
  false
);

when we clicked on img, delete img

document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    console.log(e.target.parentNode);
    let removethis = e.target.parentNode;
    removethis.remove();
  },
  false
);
