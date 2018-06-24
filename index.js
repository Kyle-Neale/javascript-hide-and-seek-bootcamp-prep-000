function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

// function deepestChild() {
//   return document.querySelector("div#grand-node").children[0].children[0].children[0].children[0];
// }

function deepestChild() {
  var grandNode = document.getElementById("grand-node");
  var divList = grandNode.querySelectorAll("div");
  return divList[3];
}

function increaseRankBy(n) {
  var rankedLi = document.getElementById("app").querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < rankedLi.length; i++) {
    var li = rankedLi[i];
    li.innerHTML = parseInt(li.innerHTML) + n
  }
}