var urlrequest;
var searchWord;
var offset;

$("#reset-search").on("click", function(event) {
	  var resetDiv=$("<div>");
	  var resetImg = $("<img>");


	  // update tags
	  resetImg.attr("src","https://media.giphy.com/media/3o85xpTdNSwazIr23S/giphy.gif");
	  resetImg.attr("alt","giphy logo");
	  resetImg.attr("class","img-responsive gif");

	  resetDiv.append(resetImg);

      $("#image-out").append(resultDiv);

});

$("#add-search").on("click", function(event) {
  event.preventDefault();

  offset=Math.round(Math.random() * 1000);
  searchWord = $("#giphy-input").val().trim();
  if (searchWord !== "") {
  $("#giphy-input").val("");
  urlrequest = "http://api.giphy.com/v1/gifs/search?" + 
				"api_key=cfc1851d752e4fffb7e72a7e3e916bb1" +
				"&q=" + searchWord + "&limit=9&offset=" + offset +
				"&rating=G&lang=en";

  $.ajax({
  	url:urlrequest,
  	method:"get"
  }).done(function(response) {

	console.log(response);
    var results=response.data;

    $("#image-out").empty();

    // add images
	for (var i = 0; i < results.length; i++) {
	  if (((i+1)%3)===0) {
      $("#image-out").append(resultDiv);
       }


	  // create tags
	  var resultDiv=$("<div>");
	  var p = $("<p>");
	  var resultImg = $("<img>");


	  // update tags

	  p.text("Rating: " + results[i].rating);
	  resultImg.attr("src",results[i].images.fixed_width_still.url);
	  resultImg.attr("data-still",results[i].images.fixed_width_still.url);
	  resultImg.attr("data-animate",results[i].images.fixed_width.url);
	  resultImg.attr("data-state","still");
	  resultImg.attr("alt",results[i].slug);
	  resultImg.attr("class","img-responsive portfolio-item gif");

	  resultDiv.append(p);
	  resultDiv.append(resultImg);

	  }

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

   }

  });


