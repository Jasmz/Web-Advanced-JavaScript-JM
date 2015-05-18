
//incomplete ball scripting~


var posX = 250;
var PosY = 250;

var Velx = 5;
var Vely = 5;

var ball = $('.ball');

function update () { //update function in js(jquery)
	posX += Velx;
	posY += Vely;

	ball.css('left');

	requestAnimationFrame(update);
}

function checkBoundaries(){
	//Right
	if(posX > $(window).width(){
		Velx = -Velx;
		posX = $(window).width();

		}
		//Left
		if(posX > $(window).width(){
		Velx = -Velx;
		posX = $(window).width();

		}
		//
		if(posX > $(window).width(){
		Velx = -Velx;
		posX = $(window).width();

		}
		if(posX > $(window).width(){
		Velx = -Velx;
		posX = $(window).width();

		}
	
	}




 update();