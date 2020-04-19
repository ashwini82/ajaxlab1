//button 1 Get all posts//

$(".button1").click(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',function(content){
   content.forEach(function(){
  	var p = $('<p></p>');
  	p.text(JSON.stringify(content));
	 	$('body').append(p);
  })
})
});
//button2 get post of id10//
$(".button2").click(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id: 10},function(content){
  content.forEach(function(){
  	var p = $('<p></p>');
  	p.text(JSON.stringify(content));
	 	$('body').append(p);
  })
})
})


//button3 get comments from post of #14//
$(".button3").click(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', {id: 14},function(comments){
	 comments.forEach(function(){
	 	var p = $('<p></p>');
	 	p.text(JSON.stringify(comments));
	 	$('body').append(p);
	 })

})
})


//button 4 getall posts from user with id 2//
$(".button4").click(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id: 2},function(content){
	content.forEach(function(){
		var p = $('<p></p>');
		p.text(JSON.stringify(content));
		$('body').append(p);
})
})
})

//button 5 create new post //

$(".button5").click(function(){
	var postTitle ="This is new post.";
$.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{title:postTitle},
	function(data){

		var p = $('<p></p>');
		p.text(JSON.stringify(data));
		$('body').append(p);
})
})



//button 6 Replace the post with #14//
$(".button6").click(function(){
$.ajax({
	method: 'PUT',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
	data: {
		userId: 1,
		title: "New Post",
		body: "New post added"
	},
	complete: function(response){
		//console.log(response.responseJSON);
		var p =$('<p></p>')
		p.text(JSON.stringify(response));
		$('body').append(p);
	}
})
})

//button 7 Update the post with #14//

$(".button7").click(function(){
$.ajax({
	method: 'PATCH',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
	data: {
	
		title: "Patch it",
	},
	complete: function(response){
		//console.log(response.responseJSON);
		var p = $('<p></p>')
		p.text(JSON.stringify(response));
		$('body').append(p);
	}
})
})


//button 8 Delete the post with #14
$(".button8").click(function(){
$.ajax({
	method: 'DELETE',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',

	complete: function(response){
		//console.log(response.responseJSON);
		var p = $('<p></p>')
		p.text(JSON.stringify(response));
		$('body').append(p);
	}
})
});

// button 9 Display list of posts

$(".button9").click(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',function(content){
   content.forEach(function(){
  	var p = $('<p></p>');
  	p.text(JSON.stringify(content));
	 	$('body').append(p);
  })
})
});




//button 10 Display all the comments//






//button 11 Display a link to all posts//