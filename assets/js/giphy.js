var urlrequest;
var addHtml;
var imagesrc;

urlrequest = "http://api.giphy.com/v1/gifs/search?api_key=cfc1851d752e4fffb7e72a7e3e916bb1&q=colors&limit=10&offset=0&rating=G&lang=en"

$.ajax({url:urlrequest,method:"get"}).done(function(response) {
console.log(response.data[1].images.fixed_width_small_still.url)
	  var imgOut=$("<img>");
	  imgOut.attr("class","img-responsive portfolio-item");
	  imgOut.attr("src","response.data[1].images.fixed_width_small_still.url");
//	  addHtml.text("<img class="img-responsive portfolio-item" src="http://placehold.it/200x135" alt="">")
	  $("#image1").html(imgOut);
//	  imagesrc=data[1].images.fixed_width_small_still.url;
//	  console.log(imagesrc);
//      addHtml=$("<img>");
//  	  addHtml.attr("src",imagesrc);
//  	  $("#image2").html(addHtml);
//	  imagesrc=data[2].images.fixed_width_small_still.url;
//	  console.log(imagesrc);
//      addHtml=$("<img>");
//  	  addHtml.attr("src",imagesrc);
//  	  $("#image3").html(addHtml);

	console.log(response);
});