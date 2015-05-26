//Data

var app = angular.module('cartoonNostalgiaApp');

app.service('modelService', function(){
	this.characterList = [
		{
			name: "Doug Funnie",
			imgURL: "http://www.auditionsfinder.com/wp-content/uploads/2012/10/nick-6.jpg",
			userName: "System"
		},
		{
			name: "Donatello",
			imgURL: "https://p1.eanfind.com/ph_img/first/8/W/0/R/3QO87TR0W8.jpg",
			userName: "System"
		},
		{
			name: "Darkwing Duck",
			imgURL: "http://www.lygwela.com/wp-content/uploads/sites/9/category-darkwing-duck.jpg",
			userName: "System"
		},
		{
			name: "Baloo",
			imgURL: "http://news.doddleme.com/wp-content/uploads/2014/11/Baloo.jpg",
			userName: "System"
		},
		{
			name: "Chip",
			imgURL: "http://majorspoilers.com/wp-content/uploads/2010/12/boom-01-06-11-thumb.jpg",
			userName: "System"
		},
		{
			name: "Bagheera",
			imgURL: "http://www.cornel1801.com/disney/Jungle-Book-1967/characters/Bagheera.jpg",
			userName: "System"
		},
		{
			name: "Eric Cartman",
			imgURL: "http://cdn.pastemagazine.com/www/blogs/lists/2010/05/11/eric_cartman.jpg",
			userName: "System"
		},
		{
			name: "Homer Simpson",
			imgURL: "http://img2.rnkr-static.com/user_node_img/59/1174847/C250/homer-simpson-film-characters-photo-u5.jpg",
			userName: "System"
		},
		{
			name: "Bender",
			imgURL: "http://cdn.pastemagazine.com/www/blogs/lists/2010/05/13/bender.jpg",
			userName: "System"
		},
		{
			name: "Donald Duck",
			imgURL: "http://www.favslist.com/photos/pages/x1/Donald-Duck-2013-5510.jpg",
			userName: "System"
		},
		{
			name: "Hank Hill",
			imgURL: "http://www.obamasoundoff.com/wp-content/uploads/2012/10/HankHill-250x250.png",
			userName: "System"
		},
		{
			name: "Tweek",
			imgURL: "http://vignette1.wikia.nocookie.net/southpark/images/9/9d/Tweek_pic.png/revision/latest?cb=20140804170422",
			userName: "System"
		},
		{
			name: "Simon Chipmunk",
			imgURL: "https://platformthing.files.wordpress.com/2014/02/simon-chipmunk.jpg",
			userName: "System"
		},
		{
			name: "Bart Simpson",
			imgURL: "http://img2.rnkr-static.com/user_node_img/28/546802/C250/bart-simpson-film-characters-photo-u5.jpg",
			userName: "System"
		},
		{
			name: "Popeye",
			imgURL: "http://www.ezvapecanada.com/94-home_default/popeye-candy-smokes.jpg",
			userName: "System"
		},
		{
			name: "Tazmanian Devil",
			imgURL: "http://alooney.weebly.com/uploads/1/6/6/8/16681666/__8055577.png",
			userName: "System"	
		},
		{
			name: "Calvin and Hobbes",
			imgURL: "http://cdn-scraplogo.pearltrees.com/3e/9a/3e9a2fd6d5c2f917ae8b6ef25785ec9d-pearlsquare.jpg?v=2",
			userName: "System"
		},
		{
			name: "Dexter",
			imgURL: "http://tewrestling.net46.net/animationpro/images/dexter.jpg",
			userName: "System"
		},
		{
			name: "Snoopy",
			imgURL: "http://www.how-to-draw-cartoons-online.com/image-files/how-to-draw-snoopy.gif",
			userName: "System"
		},
		{
			name: "Pepe Le Pew",
			imgURL: "http://cdn.pastemagazine.com/www/blogs/lists/2010/05/11/pepe_le_pew.jpg",
			userName: "System"
		},
		{
			name: "Fred Flintstone",
			imgURL: "http://cdn.pastemagazine.com/www/blogs/lists/2010/05/12/fred_flintstone.jpg",
			userName: "System"
		},
		{
			name: "Pikachu",
			imgURL: "http://poplunch.com/wp-content/uploads/2014/05/fiction-9.jpg",
			userName: "System"
		},
		{
			name: "Elmer Fudd",
			imgURL: "https://cdnil0.fiverrcdn.com/photos/656827/original/famous-cartoon-character-elmer-fudd_(1).jpg?1381383291",
			userName: "System"
		},
		{
			name: "Wyle E Coyote",
			imgURL: "https://s-media-cache-ak0.pinimg.com/736x/4e/46/f0/4e46f0e378313d26a51d4cd21e546830.jpg",
			userName: "System"
		},
		{
			name: "Yogi Bear",
			imgURL: "https://s-media-cache-ak0.pinimg.com/736x/21/c0/a9/21c0a94d96348f77ebdaef8ee985cd71.jpg",
			userName: "System"
		},
		{
			name: "Beavis and Butthead",
			imgURL: "https://s-media-cache-ak0.pinimg.com/736x/21/2e/a6/212ea6b13e221350d4bed746777f6a90.jpg",
			userName: "System"
		},
		{
			name: "Krusty the Klown",
			imgURL: "https://s-media-cache-ak0.pinimg.com/736x/f5/16/8f/f5168fd3909801fe3b15ef10abb9d9bb.jpg",
			userName: "System"
		},
		{
			name: "Charlie Brown",
			imgURL: "http://i1.cpcache.com/product_zoom/1486429727/charlie_brown_the_pe_water_bottle.jpg?height=250&width=250&padToSquare=true",
			userName: "System"
		}
	] 
});