$( document ).ready(function() {
	console.log( "Ready!");

$("#edit-button").click(function(){
	$(location).attr('href', 'Boardshopedit.html');
	console.log("Clicked");
});

$("#preview-button").click(function(){
	console.log("Preview");
	$(location).attr('href', 'Boardshop.html');
});

$("#new-button").click(function(){
	addNewBoard();
});

getBoards();  //index
getEditBoards(); //on edit

});

var longboards = function(id, brand, length, style, price, bottom_img_url, top_img_url){
	this.id = id;
	this.brand = brand;
	this.length = length;
	this.style = style;
	this.price = price;
	this.bottom_img_url = bottom_img_url;
	this.top_img_url = top_img_url;
}

function getBoards(){
	$.ajax('http://mean.codingcamp.us:8888/jerry/longboards',{method: 'GET'})
	.done(function (data) {
		var newLongboard = [];
		$items = $('#items');
			for (var i = 0, len = data.length; i < len; i++){
			item = data[i];
		
			var div = $('<div>').addClass('item');
			var imageDiv = $('<div>').addClass('item-image');
			imageDiv.append('<img class="bottom" src="' + item.bottom_img_url + '">');
			imageDiv.append('<img class="top" src="' + item.top_img_url + '">');
			div.append(imageDiv);
			var nameDiv = $('<div>').addClass('name').html(item.name);
			div.append(nameDiv);
			var priceDiv = $('<div>').addClass('price').html(item.price);
			div.append(priceDiv);
			$items.append(div);
			console.log(data[i]._id);
		}
	}).fail(function () {
		console.log('error');
});
}

function getEditBoards(){
	$.ajax('http://mean.codingcamp.us:8888/jerry/longboards',{method: 'GET'})
	.done(function (data) {
		$items = $('#edit-items');
		for (var i = 0, len = data.length; i < len; i++){
			item = data[i];
		
			var $itemDiv = $('<div>').addClass('item-edit');
			var $form = $('<form>').attr('id', item._div);
			$form.append('<div>Brand:</div>');
			$form.append($('<input type="text" placeholder="Brand:"/>').val(item.brand));
			$form.append('<div>Name:</div>');
			$form.append($('<input type="text" placeholder="Name:"/>').val(item.name));
			$form.append('<div>Length:</div>');
			$form.append($('<input type="number" placeholder="Length:"/>').val(item.length));
			$form.append('<div>Style:</div>');
			$form.append($('<input type="text" placeholder="Style:"/>').val(item.style));
			$form.append('<div>Price: $</div>');
			$form.append($('<input type="text" placeholder="Price:"/>').val(item.price));
			$form.append('<div>Bottom Image:</div>');
			$form.append($('<input type="text" placeholder="Bottom image:"/>').val(item.bottom_img_url));
			$form.append('<div>Top Image:</div>');
			$form.append($('<input type="text" placeholder="Top image:"/>').val(item.top_img_url));
			var $delLink = $('<div><a id="' + item._id+ '" href="" class="delete">Delete</a></div>');
			var $button = $('<input />', { id: item._id, type: 'submit', value: 'Save'});
			$form.append($delLink);
			$form.append($button);
			$itemDiv.append($form);
			$items.append($itemDiv);

			$delLink.on('click', function(e){
				e.preventDefault();
				$target = $(e.target)[0];
				deleteBoard($target.id);

			});
			$button.on('click', function(e){
				e.preventDefault();
				$target = $(e.target)[0];
				updateLongboard($target.id);
			});
		}
	}).fail(function () {
		console.log('error');
	});
}

function deleteBoard(id){
	console.log(id);
	$.ajax('http://mean.codingcamp.us:8888/jerry/longboard/' + id,{method: 'DELETE'})
	.done(function (data) {
		console.log(data);
}).fail(function(){
	console.log('error');
});
	$('#edit-items').html('');
	getEditBoards();
	//location.reload();
}

function addNewBoard(){
	$items = $('#edit-items');
		item = new longboards();
		
		var $itemDiv = $('<div>').addClass('item-edit');
		var $form = $('<form>').attr('id', item._div);
		$form.append('<div>Brand:</div>');
		$form.append($('<input type="text" placeholder="Brand:"/>').val(item.brand));
		$form.append('<div>Name:</div>');
		$form.append($('<input type="text" placeholder="Name:"/>').val(item.name));
		$form.append('<div>Length:</div>');
		$form.append($('<input type="number" placeholder="Length:"/>').val(item.length));
		$form.append('<div>Style:</div>');
		$form.append($('<input type="text" placeholder="Style:"/>').val(item.style));
		$form.append('<div>Price: $</div>');
		$form.append($('<input type="text" placeholder="Price:"/>').val(item.price));
		$form.append('<div>Bottom Image:</div>');
		$form.append($('<input type="text" placeholder="Bottom image:"/>').val(item.bottom_img_url));
		$form.append('<div>Top Image:</div>');
		$form.append($('<input type="text" placeholder="Top image:"/>').val(item.top_img_url));
		var $delLink = $('<div><a id="' + item._id+ '" href="" class="delete">Delete</a></div>');
		var $button = $('<input />', { id: item._id, type: 'submit', value: 'Save'});
		$form.append($delLink);
		$form.append($button);
		$itemDiv.append($form);
		$items.append($itemDiv);

		$delLink.on('click', function(e){
			e.preventDefault();
			$target = $(e.target)[0];
			deleteBoard($target.id);

		});
		$button.on('click', function(e){
			e.preventDefault();
			$target = $(e.target)[0];
			createLongboard($target.id);
		});
	}

function updateLongboard (id){
	$.ajax('http://mean.codingcamp.us:8888/jerry/longboard/' + id,{method: 'PUT'})
	.done(function (data) {
		console.log(data);
	}).fail(function(){
		console.log('error');
	});
		$('#edit-items').html('');
		getEditBoards();
	//location.reload();
	}
}

function createLongboard (id){

}