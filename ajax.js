//button 1//

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


//button3 get comments from post of #12//
$(".button3").click(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', {id: 12},function(comments){
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



//button 6 Replace the post with #12//




//button 7 Update the title of post with #12//




//button 9
/*$(".button8").click(function(){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{"post_id":
(this).data("id")},)
})*/