$(document).ready(function(){
	create_grid(16);
});

var create_grid = function(max){
	var squareSize = 960/max;
	for(var i = 0; i < max; i++){
		$(".grid").append("<div id='line" + i + "' class='line'></line>");
		
		for(var j=0; j < max; j++){
			$("#line" + i).append("<div id='square" + i + "_" + j + "' class='square'></div>");
		}
	}
	$(".square").css("height", squareSize + "px");
	$(".square").css("width", squareSize + "px");
	console.log(max + "x" + max + "grid has been created");
};

$(document).on("mouseenter", ".square",  function(e){
	$(this).css("background-color", "red");
	console.log(this + "has been colorized");
});
	
$(document).on("click", "#reset", function(e){
	$(".grid").empty();
	var dimension = prompt("How big do you want the grid to be?");
	
	if(isNaN(dimension)) {
		console.log(dimension + " is not a number");
		reset_grid();
	} else {
		create_grid(dimension);
	}
});
