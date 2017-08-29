var urlrequest;
var searchWord;
var offset;


$(document).onload(function() { 
$("#add-search").on("click", function(event) {
  event.preventDefault();

  offset=Math.round(Math.random() * 1000);
  searchWord = $("#giphy-input").val().trim();
  $("#giphy-input").val("");
	// Add the search to a list of recent searches
	
	
	urlrequest = "http://api.giphy.com/v1/gifs/search?" + 
				"api_key=cfc1851d752e4fffb7e72a7e3e916bb1" +
				"&q=" + searchWord + "&limit=15&offset=" + offset +
				"&rating=G&lang=en";

  $.ajax({url:urlrequest,method:"get"}).done(function(response) {

	console.log(response);
    var results=response.data;

    $("#image-out").empty();

    // setup 5 rows to display the images
	for (var i = 0; i < results.length; i++) {
	  // create tags
	  var resultDiv=("<div>");
	  var p = $("<p>");
	  var resultImg = $("<img>");


	  // update tags
	  // add a row
	  if ((i % 3) === 0 )  {
	  	switch (i) {
	  	  case 3:
	  	  	console.log("row1");
	  	  	console.log(p);
	  		resultDiv.attr("class","col-md-12 row");
	  		resultDiv.attr("id","image-row1");
	  	  	break;
	  	  case 6:
	  	  	console.log("row2");
	  		resultDiv.attr("class","col-md-12 row");
	  		resultDiv.attr("id","image-row2");
	  	  	break;
	  	  case 9:
	  	  	console.log("row3");
	  		resultDiv.attr("class","col-md-12 row");
	  		resultDiv.attr("id","image-row1");
	  	  	break;
	  	  case 12:
	  	  	console.log("row4");
	  		resultDiv.attr("class","col-md-12 row");
	  		resultDiv.attr("id","image-row1");
	  	  	break;
	  	  case 15:
	  	  	console.log("row5");
	  		resultDiv.attr("class","col-md-12 row");
	  		resultDiv.attr("id","image-row1");
	  	  	break;
	  	}
  	  	$("#image-out").append(p);
	  }

	  p.text("Rating: " + results[i].rating);
	  resultImg.attr("src",results[i].images.fixed_width_still.url);
	  resultImg.attr("data-still",results[i].images.fixed_width_still.url);
	  resultImg.attr("data-animate",results[i].images.fixed_width.url);
	  resultImg.attr("data-state","still");
	  resultImg.attr("alt",results[i].slug);
	  resultImg.attr("class","img-responsive portfolio-item gif");

//	  resultDiv.append(p);
	  resultDiv.append(p);
	  resultDiv.append(resultImg);
	    $("#image-out").append(resultDiv);	  	
	  }

	});

  });

console.log("click wait");
$(".gif").on("click", function() {
  console.log("gif clicked");
  var state= $(this).attr("data-state");
  if (state==="still") {
    $(this).attr("data-state","animate");
    $(this).attr("src",$(this).attr("data-animate"));
  } else {
    $(this).attr("data-state","still");
    $(this).attr("src",$(this).attr("data-still"));
  }
});

});
