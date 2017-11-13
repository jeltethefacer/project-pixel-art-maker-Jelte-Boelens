// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(heigth, width) {
	console.log(heigth, width)	


	var table = ""

	for(var y = 0; y < heigth; y++ ){
		row = "<tr>" 
		for(var x = 0; x< width; x++){
			row += "<td></td>"
		}
		row += "</tr>"

		table += row
	}


	$("#pixel_canvas").empty()
	$("#pixel_canvas").append(table)



}

function changeColor(){
	$("td").mousedown( function(event){
		switch (event.which){
			case 1:
				var currentColor = $("#colorPicker").val()
				$(this).attr("bgcolor", currentColor)
				break;
			case 3:
				$(this).attr("bgcolor", "white")
				event.preventDefault();
				break;

		}	
		
	})
}


makeGrid(10, 10)
$(changeColor())
$("form").submit(function(form){

	var width = $("#input_width").val()
	var height = $("#input_height").val()
	makeGrid(height, width)
	changeColor()
	form.preventDefault();

})
