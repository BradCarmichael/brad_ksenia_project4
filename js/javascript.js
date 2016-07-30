// The user has to click on the image and make 1 choice out of 6
// Smoothscroll to next topic
// Once complete, user clicks submit
// Take the information and calculate the answer


$(function() {

	$("form").on("submit", function(event) {
		event.preventDefault();
		var resultMessage = "";
		var resultPhoto = "";
		var resultParagraph = "";
		var userChoices = $('input[type=radio]:checked');
		// var points = $('input[type=radio]:checked').data('points');

		var totalScore = 0;
		for(var i = 0; i < userChoices.length; i = i + 1) {
			// console.log($(userChoices[i]).val());
			totalScore = totalScore + Number($(userChoices[i]).val()) ;
		}

		if(totalScore <= 17) {
			// console.log("You're not cool!");
			resultMessage = "you missed the hip train";
			resultPhoto = "notHipster.jpg";
			resultParagraph = "Well, well, well.  Like the great Phil Collins song Against All Odds you’re not a hipster.  How did this happen?  Where do you live? Where are you from?  You’re not in the least interested in being cool.  How dare you?  No tight jeans?  How dare you?  No trendy music subculture of stinky beards and thrift shop smelling jacket vests?  How dare you? In reality be proud of yourself for not following along.  You have as strong character with great vision of who you are.  Even though you may wear white socks with Birkenstocks, being a hipster is definitely not you!";
		} else if(totalScore <= 29) {
			resultMessage = "You're not as hip as you thought";
			resultPhoto = "midHipster.jpg";
			resultParagraph = "You don’t even know it but your only one pair of black rimmed glasses away from being a full blown Hipster.  Or maybe a new haircut away that looks just like your better half, whatever the gender. Yes you shop at the Gap or American Eagle so you can’t be a hipster right?!  In theory you’re correct but these stores have redden the wave of the hipster counter culture and the cloths you buy from these establishments are as hipster as ever.  You’re actually riding the wave you just don’t have as surfboard. Stay strong. Stay vigilant. Maybe being a hipster isn’t that bad after all.";
	
		} else {
			resultMessage = "you are a definitive hipster!";
			resultPhoto = "hipsterWinner2.png";
			resultParagraph = "You value the counter culture.  You are progressive with your politics. You have a deep appreciation for indie music and tighter than tight jeans.  You love American Apparel and are not at odds with their advertising.  You wish you lived in New York but anywhere town wherever will do.  You reject mainstream consumerism by buying all of their second hand shit at thrift stores.  Your androgynous trendy barber cut or Walmart shag allows you to seamlessly fit into most social demographics. At the end of the day however…You’re still just a Hipster!";
		}

		var finalAnswer = $('<h3>').text(resultMessage);
		$("div.results").append(finalAnswer);

		var finalText = $('<p>').text(resultParagraph);
		$("div.results").append(finalText);

		var finalPhoto = $('<img src="images/' + resultPhoto + '">');
		$("div.results").append(finalPhoto);
	
	});

});
