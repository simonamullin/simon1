/* WEATHER APP

//pseudo code

//Receive Input Data (formula)
//Write function that does:
	Takes Temp in Celcius
	Multiplies the temp by 1.8 and adds 32
	T(°F) = T(°C) × 1.8 + 32

Create temperature variable for our new data and place it on the page

*Temperature variable
*Use conditionals if/else to change background color of page

*/

$('button').on('click', americanize);

function americanize() {
	//prevent form from submitting
	event.preventDefault();	
	var tempCel = $('input').val();
	console.log(tempCel);
	convertTemp(tempCel);
}

function convertTemp(num) {
	var newTemp = num * 1.8 + 32;
	console.log(newTemp)	
	updateHtmlTemp(newTemp);

	if(newTemp < 40) {
		$("body").css("background-color", "blue");
	} else if (newTemp < 60) {
		$("body").css("background-color", "orange");	
	} else if (newTemp < 80) {
		$("body").css("background-color", "red");
	} else {
		$("body").css("background-color", "purple");
	}
}

function updateHtmlTemp(num) {
	$('.tempFahrenheit').html(num);
	$('input').val('');
}
