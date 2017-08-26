var urlrequest;
var addHtml;
var imagesrc;
var searchWord;
var offset;



  $("#add-search").on("click", function(event) {
    event.preventDefault();

	offset=Math.round(Math.random() * 1000);
	searchWord = $("#giphy-input").val().trim();
	$("#giphy-input").val("");
	urlrequest = "http://api.giphy.com/v1/gifs/search?" + 
				"api_key=cfc1851d752e4fffb7e72a7e3e916bb1" +
				"&q=" + searchWord + "&limit=10&offset=" + offset +
				 "&rating=G&lang=en";

$.ajax({url:urlrequest,method:"get"}).done(function(response) {
	  var imgOut=$("<img>");
	  imgOut.attr("class","img-responsive portfolio-item");
	  imgOut.attr("src",response.data[0].images.fixed_width_small_still.url);
	  imgOut.attr("alt","giphy search word colors")
	  $("#image1").html(imgOut);

	  var imgOut=$("<img>");
	  imgOut.attr("class","img-responsive portfolio-item");
	  imgOut.attr("src",response.data[1].images.fixed_width_small_still.url);
	  imgOut.attr("alt","giphy search word colors")
	  $("#image2").html(imgOut);

	  var imgOut=$("<img>");
	  imgOut.attr("class","img-responsive portfolio-item");
	  imgOut.attr("src",response.data[2].images.fixed_width_small_still.url);
	  imgOut.attr("alt","giphy search word colors")
	  $("#image3").html(imgOut);

	console.log(response);
});

  });