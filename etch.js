$(document).ready(function(){
	for(var i = 0; i < 16; i++){
		$(".grid").append("<div id='line" + i + "' class='line'></line>");
		
		for(var j=0; j < 16; j++){
			$("#line" + i).append("<div id='square" + i + "_" + j + "' class='square'>"+ i + "-" + j + "</div>");
		}
	}
});
