// Select color input
var colorPicker = document.querySelector("input#colorPicker");

// Select size input
var gridHeightInput = document.querySelector("#inputHeight");
var gridWidthInput = document.querySelector("#inputWidth");

// When size is submitted by the user, call makeGrid()
document.querySelector("#sizePicker").addEventListener("submit", function(e) {
  e.preventDefault();
  makeGrid();
});

function makeGrid() {
  var table = document.querySelector("#pixelCanvas");
  table.innerHTML = "";
  for(var i = 0; i < gridHeightInput.value; i++) {
    var tr = document.createElement("tr");
  	for(var j = 0; j < gridWidthInput.value; j++) {
    	var td = document.createElement("td");
      	tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  table.addEventListener("click", draw);
}

function draw(e) {
	 if(e.target.nodeName === "TD") e.target.style.backgroundColor = colorPicker.value;
}