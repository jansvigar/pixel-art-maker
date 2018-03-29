// Select color input
var colorPicker = document.querySelector("#colorPicker");
var pickedColor = "#000";
colorPicker.addEventListener("change", function(e) {
  pickedColor = e.target.value;
});

// Select size input
var gridHeightInput = document.querySelector("#inputHeight");
var gridWidthInput = document.querySelector("#inputWidth");

// When size is submitted by the user, call makeGrid()
document.querySelector("#sizePicker").addEventListener("submit", function(e) {
  e.preventDefault();
  makeGrid(gridHeightInput.value, gridWidthInput.value);
});

function makeGrid(width, height) {
  var table = document.querySelector("#pixelCanvas");
  clearCanvas(table);
  for(var i = 0; i < height; i++) {
    var tr = document.createElement("tr");
  	for(var j = 0; j < width; j++) {
    	var td = document.createElement("td");
      	tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  table.addEventListener("click", draw, true);
}

function clearCanvas(table) {
  	table.removeEventListener("click", draw);
	table.innerHTML = "";
}

function draw(e) {
  	e.stopPropagation();
	e.target.style.backgroundColor = pickedColor;
}