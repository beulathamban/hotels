var gallery = document.getElementById("images");
wellington();

/*
==========================
		Wellington
==========================

*/
function wellington(){
var hotels=[
	{	
		name:"Rainbow Hotel",
		price: 90,
		image: "image/hotel1.jpg"

	},
	{	
		name:"Sunrise Hotel",
		price: 70,
		image: "image/hotel2.jpg"

	},
	{	
		name:"Grand Palm Hotel",
		price: 110,
		image: "image/hotel3.jpg"

	},
	{	
		name:"West Plaza Hotel",
		price: 95,
		image: "image/hotel4.jpg"

	},
	{	
		name:"Nomads Accomodation",
		price: 100,
		image: "image/hotel5.jpg"

	},
	{	
		name:"Holiday Inn",
		price: 125,
		image: "image/hotel6.jpg"

	},
	{	
		name:"Nomads Accomodation",
		price: 100,
		image: "image/hotel5.jpg"

	},
	{	
		name:"Holiday Inn",
		price: 125,
		image: "image/hotel6.jpg"

	},
	{	
		name:"Sunrise Hotel",
		price: 70,
		image: "image/hotel2.jpg"

	}

];
var i;
gallery.innerHTML = " ";
for (i = 0; i < hotels.length; i++){
console.log(hotels[i].image);
gallery.innerHTML += '<div class="image-div"> <h2>' + hotels[i].name + '</h2>' + '<h3> Price: $ '+ hotels[i].price+' </h3> <img src="' + hotels[i].image + '" class="hotel-image" alt="Hotel"> </div>';
	//gallery.innerHTML += "hello" +i;
}
}
document.getElementById("wellington").addEventListener('click', function(){
	console.log("wellington");
	wellington();

});
/*
==========================
		Auckland
==========================

*/
function auckland(){
var hotels=[
	{	
		name:"Seaside Hotel",
		price: 90,
		image: "image/hotel1.jpg"

	},
	{	
		name:"Oceanic Hotel",
		price: 70,
		image: "image/hotel2.jpg"

	},
	{	
		name:"Grand Palm Hotel",
		price: 110,
		image: "image/hotel3.jpg"

	},
	{	
		name:"Pacific Hotel",
		price: 95,
		image: "image/hotel4.jpg"

	},
	{	
		name:"Nomads Accomodation",
		price: 100,
		image: "image/hotel5.jpg"

	},
	{	
		name:"Holiday Homestay",
		price: 125,
		image: "image/hotel6.jpg"

	},
	{	
		name:"Beach Resort",
		price: 100,
		image: "image/hotel5.jpg"

	},
	{	
		name:"Holiday Inn",
		price: 125,
		image: "image/hotel6.jpg"

	},
	{	
		name:"Sunrise Hotel",
		price: 70,
		image: "image/hotel2.jpg"

	}

];
var i;
gallery.innerHTML = " ";
for (i = 0; i < hotels.length; i++){
console.log(hotels.length);
gallery.innerHTML += '<div class="image-div"> <h2>' + hotels[i].name + '</h2>' + '<h3> Price: $ '+ hotels[i].price+' </h3> <img src="' + hotels[i].image + '" class="hotel-image" alt="Hotel"> </div>';
	//gallery.innerHTML += "hello" +i;
}
}
document.getElementById("auckland").addEventListener('click', function(){
	console.log("Auckland");
	auckland();

});

/*
==========================
		Hamilton
==========================

*/

function hamilton(){
var hotels=[
	{	
		name:"Village Hotel",
		price: 90,
		image: "image/hotel1.jpg"

	},
	{	
		name:"Countryside Hotel",
		price: 70,
		image: "image/hotel2.jpg"

	},
	{	
		name:"Farmers Hotel",
		price: 110,
		image: "image/hotel3.jpg"

	},
	{	
		name:"Tourist Hotel",
		price: 95,
		image: "image/hotel4.jpg"

	},
	{	
		name:"Nomads Accomodation",
		price: 100,
		image: "image/hotel5.jpg"

	}
	

];
var i;
gallery.innerHTML = " ";
for (i = 0; i < hotels.length; i++){
console.log(hotels.length);
gallery.innerHTML += '<div class="image-div"> <h2>' + hotels[i].name + '</h2>' + '<h3> Price: $ '+ hotels[i].price+' </h3> <img src="' + hotels[i].image + '" class="hotel-image" alt="Hotel"> </div>';
	//gallery.innerHTML += "hello" +i;
}
}
document.getElementById("hamilton").addEventListener('click', function(){
	console.log("Hamilton");
	hamilton();

});
