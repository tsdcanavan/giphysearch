var urlrequest;
var searchWord;
var offset;

function loadGifs() {
	offset = Math.round(Math.random() * 1000);
	console.log(searchWord);
	urlrequest = "https://api.giphy.com/v1/gifs/search?" +
		"api_key=cfc1851d752e4fffb7e72a7e3e916bb1" +
		"&q=" + searchWord + "&limit=9&offset=" + offset +
		"&rating=G&lang=en";

	$.ajax({
		url: urlrequest,
		method: "get"
	}).done(function (response) {

		console.log(response);
		var results = response.data;

		$("#image-out").empty();

		// add images
		for (var i = 0; i < results.length; i++) {

			var resultDiv = $("<div>");
			var p = $("<p>");
			var resultImg = $("<img>");

			resultDiv.attr("class", "col-md-4 portfolio-item");
			resultDiv.attr("id", "image-id");
			p.text("Rating: " + results[i].rating);
			resultImg.attr("src", results[i].images.fixed_width_still.url);
			resultImg.attr("data-still", results[i].images.fixed_width_still.url);
			resultImg.attr("data-animate", results[i].images.fixed_width.url);
			resultImg.attr("data-state", "still");
			resultImg.attr("alt", results[i].slug);
			resultImg.attr("class", "img-responsive portfolio-item gif");

			resultDiv.append(p);
			resultDiv.append(resultImg);
			$("#image-out").append(resultDiv);
		}
	console.log("click wait");
	$(".gif").on("click", function () {
		console.log("gif clicked");
		var state = $(this).attr("data-state");
		if (state === "still") {
			$(this).attr("data-state", "animate");
			$(this).attr("src", $(this).attr("data-animate"));
		} else {
			$(this).attr("data-state", "still");
			$(this).attr("src", $(this).attr("data-still"));
		}
	});
	});

};

$("#reset-search").on("click", function (event) {
	var resetDiv = $("<div>");
	var resetImg = $("<img>");


	// update tags
	resetImg.attr("src", "https://media.giphy.com/media/3o85xpTdNSwazIr23S/giphy.gif");
	resetImg.attr("alt", "giphy logo");
	resetImg.attr("class", "img-responsive gif");

	resetDiv.append(resetImg);

	$("#image-out").append(resultDiv);

});


$("#add-search").on("click", function (event) {
	event.preventDefault();

	searchWord = $("#giphy-input").val().trim();
	if (searchWord !== "") {
		$("#giphy-input").val("");

		// Add the search to a list of recent searches
		var addButton = $("<button>");
		addButton.text(searchWord);
		addButton.attr("class", "recent-list");
		addButton.attr("value", searchWord);
		$("#recent").prepend(addButton);
		loadGifs();

	}

	$(".recent-list").on("click", function (event) {
		console.log("recent click")
		console.log($(this).attr("value"))
		searchWord = $(this).attr("value");
		loadGifs();
	})
});




