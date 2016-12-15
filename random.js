var episodeNumbers = [0, 13, 22, 24, 22, 22, 25, 25, 25, 25, 23];

var s1Titles = ["", "Simpsons Roasting on an Open Fire", "Bart the Genius", "Homer's Odyssey", "There's No Disgrace Like Home", "Bart the General", "Moaning Lisa", "The Call of the Simpsons", "The Telltale Head", "Life on the Fast Lane", "Homer's Night Out", "The Crepes of Wrath", "Krusty Gets Busted", "Some Enchanted Evening"];
var s2Titles = ["", "Bart Gets an \"F\"","Simpson and Delilah","Treehouse of Horror","Two Cars in Every Garage and Three Eyes on Every Fish","Dancin' Homer","Dead Putting Society","Bart vs. Thanksgiving","Bart the Daredevil","Itchy & Scratchy & Marge","Bart Gets Hit by a Car","One Fish, Two Fish, Blowfish, Blue Fish","The Way We Was","Homer vs. Lisa and the 8th Commandment","Principal Charming","Oh Brother, Where Art Thou?","Bart's Dog Gets an \"F\"","Old Money","Brush with Greatness","Lisa's Substitute","The War of the Simpsons","Three Men and a Comic Book","Blood Feud"];
var s3Titles = ["", "Stark Raving Dad","Mr. Lisa Goes to Washington","When Flanders Failed","Bart the Murderer","Homer Defined","Like Father, Like Clown","Treehouse of Horror II","Lisa's Pony","Saturdays of Thunder","Flaming Moe's","Burns Verkaufen der Kraftwerk","I Married Marge","Radio Bart","Lisa the Greek","Homer Alone","Bart the Lover","Homer at the Bat","Separate Vocations","Dog of Death","Colonel Homer","Black Widower","The Otto Show","Bart's Friend Falls in Love","Brother, Can You Spare Two Dimes?"];
var s4Titles = ["", "Kamp Krusty","A Streetcar Named Marge","Homer the Heretic","Lisa the Beauty Queen","Treehouse of Horror III","Itchy & Scratchy: The Movie","Marge Gets a Job","New Kid on the Block","Mr. Plow","Lisa's First Word","Homer's Triple Bypass","Marge vs. the Monorail","Selma's Choice","Brother from the Same Planet","I Love Lisa","Duffless","Last Exit to Springfield","So It's Come to This: A Simpsons Clip Show","The Front","Whacking Day","Marge in Chains","Krusty Gets Kancelled"];
var s5Titles = ["", "Homer's Barbershop Quartet","Cape Feare","Homer Goes to College","Rosebud","Treehouse of Horror IV","Marge on the Lam","Bart's Inner Child","Boy-Scoutz 'n the Hood","The Last Temptation of Homer","$pringfield (or, How I Learned to Stop Worrying and Love Legalized Gambling)","Homer the Vigilante","Bart Gets Famous","Homer and Apu","Lisa vs. Malibu Stacy","Deep Space Homer","Homer Loves Flanders","Bart Gets an Elephant","Burns' Heir","Sweet Seymour Skinner's Baadasssss Song","The Boy Who Knew Too Much","Lady Bouvier's Lover","Secrets of a Successful Marriage"];
var s6Titles = ["", "Bart of Darkness","Lisa's Rival","Another Simpsons Clip Show","Itchy & Scratchy Land","Sideshow Bob Roberts","Treehouse of Horror V","Bart's Girlfriend","Lisa on Ice","Homer Badman","Grampa vs. Sexual Inadequacy","Fear of Flying","Homer the Great","And Maggie Makes Three","Bart's Comet","Homie the Clown","Bart vs. Australia","Homer vs. Patty and Selma","A Star Is Burns","Lisa's Wedding","Two Dozen and One Greyhounds","The PTA Disbands","'Round Springfield","The Springfield Connection","Lemon of Troy","Who Shot Mr. Burns? (Part One)"];
var s7Titles = ["", "Who Shot Mr. Burns? (Part Two)","Radioactive Man","Home Sweet Homediddly-Dum-Doodily","Bart Sells His Soul","Lisa the Vegetarian","Treehouse of Horror VI","King-Size Homer","Mother Simpson","Sideshow Bob's Last Gleaming","The Simpsons 138th Episode Spectacular","Marge Be Not Proud","Team Homer","Two Bad Neighbors","Scenes from the Class Struggle in Springfield","Bart the Fink","Lisa the Iconoclast","Homer the Smithers","The Day the Violence Died","A Fish Called Selma","Bart on the Road","22 Short Films About Springfield","Raging Abe Simpson and His Grumbling Grandson in \"The Curse of the Flying Hellfish\"","Much Apu About Nothing","Homerpalooza","Summer of 4 Ft. 2"];
var s8Titles = ["", "Treehouse of Horror VII","You Only Move Twice","The Homer They Fall","Burns, Baby Burns","Bart After Dark","A Milhouse Divided","Lisa's Date with Density","Hurricane Neddy","El Viaje Misterioso de Nuestro Jomer (The Mysterious Voyage of Homer)","The Springfield Files","The Twisted World of Marge Simpson","Mountain of Madness","Simpsoncalifragilisticexpiala(Annoyed Grunt)cious","The Itchy & Scratchy & Poochie Show","Homer's Phobia","Brother from Another Series","My Sister, My Sitter","Homer vs. the Eighteenth Amendment","Grade School Confidential","The Canine Mutiny","The Old Man and the Lisa","In Marge We Trust","Homer's Enemy","The Simpsons Spin-Off Showcase","The Secret War of Lisa Simpson"];
var s9Titles = ["", "The City of New York vs. Homer Simpson","The Principal and the Pauper","Lisa's Sax","Treehouse of Horror VIII","The Cartridge Family","Bart Star","The Two Mrs. Nahasapeemapetilons","Lisa the Skeptic","Realty Bites","Miracle on Evergreen Terrace","All Singing, All Dancing","Bart Carny","The Joy of Sect","Das Bus","The Last Temptation of Krust","Dumbbell Indemnity","Lisa the Simpson","This Little Wiggy","Simpson Tide","The Trouble with Trillions","Girly Edition","Trash of the Titans","King of the Hill","Lost Our Lisa","Natural Born Kissers"];
var s10Titles = ["", "Lard of the Dance","The Wizard of Evergreen Terrace","Bart the Mother","Treehouse of Horror IX","When You Dish Upon a Star","D'oh-in' in the Wind","Lisa Gets an \"A\"","Homer Simpson in: \"Kidney Trouble\"","Mayored to the Mob","Viva Ned Flanders","Wild Barts Can't Be Broken","Sunday, Cruddy Sunday","Homer to the Max","I'm with Cupid","Marge Simpson in: \"Screaming Yellow Honkers\"","Make Room for Lisa","Maximum Homerdrive","Simpsons Bible Stories","Mom and Pop Art","The Old Man and the \"C\" Student","Monty Can't Buy Me Love","They Saved Lisa's Brain","Thirty Minutes over Tokyo"];

var s8e9AltTitle = "The Mysterious Voyage of Homer";
var s8e9AltTitle2 = "El Viaje Misterioso de Nuestro Jomer";

var s5e10AltTitle = "$pringfield";

var season = 0;
var episode = 0;
var shotNum = 0;

var imagePath = "";
var episodeName = "";
var wrongAnswers = "";

var showEpisodeName = document.createTextNode("");
var giveAnswer = document.createTextNode("");


var score = 0;
var antiScore = 0;
var isAnswered = false;
var hintOn = false;

var skips = 10;


//var sE = "Season " + season.toString() + " Episode " + episode.toString();
//alert(sE);




var shot =  document.createElement("IMG");
	getRandomImage();

	document.getElementById("imageLocation").appendChild(shot);

shot.onerror = function(){getRandomImage();}



	//displayEpisode();
//document.body.appendChild(showEpisodeName);


function getRandomIntInclusive(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;


}



function checkUserInput(){
        var check = document.getElementById("userEpisode").value;
        //document.write(check);

	var responseToUser = "";
	if(hintOn){
		toggleHint();
	}

		if(isAnswered){
			document.getElementById("userEpisode").value = "";
			displaySiteResponse("");
			toggleText("userInputButton");
			if(skips > 0){
			document.getElementById("skipButton").disabled = false;}
			document.getElementById("seasonHint").disabled = false;
			getRandomImage();

		}
		else{

        if((simplifyString(episodeName) == simplifyString(check)) || (simplifyString(s8e9AltTitle) == simplifyString(check) && season == 8 && episode == 9) || (simplifyString(s8e9AltTitle2) == simplifyString(check) && season == 8 && episode == 9) || (simplifyString(s5e10AltTitle) == simplifyString(check) && season == 5 && episode == 10)){
        responseToUser = "Correct!";
				document.getElementById("guessResult").style.color = "#0b842e";
		if(!isAnswered){
			incrementScore();
		}


        }
        else {
			responseToUser = "Wrong! The correct answer is: " + episodeName;
			document.getElementById("guessResult").style.color = "#db5755";
			antiScore++;
			wrongAnswers = wrongAnswers + "X ";
			document.getElementById("wrongAnswer").innerHTML = wrongAnswers;
			document.getElementById("changeYoPadding").style.paddingTop = 0;
			document.getElementById("wrongAnswer").style.paddingBottom = "53px";


		}

		isAnswered = true;

	//responseToUser = check;
		displaySiteResponse(responseToUser);
		toggleText("userInputButton");
		//hider();
		document.getElementById("skipButton").disabled = true;
		document.getElementById("seasonHint").disabled = true;

		if(antiScore == 3){
			document.write("GAME OVER.  Score: " + score);
		}

		//giveAnswer = document.createTextNode(responseToUser);
        //docum ent.body.appendChild(giveAnswer);


		}
}

function getRandomImage(){


	//alert("HELLO");
	isAnswered = false;
	 season = getRandomIntInclusive(1,10);
	 //season = getRandomIntInclusive(7,7);
	 episode = getRandomIntInclusive(1, episodeNumbers[season]);
	 //episode = getRandomIntInclusive(10,11);
	 shotNum = getRandomIntInclusive(1, 39);

	 var coinFlip = getRandomIntInclusive(0,1);

	imagePath = "./img/Season " + season;

	if(season < 10){
	imagePath += "/S0" + season.toString() + "E";}
	else imagePath += "/S" + season.toString() + "E";

	if(episode < 10){
	imagePath += "0" + episode.toString() + "/shot_" + shotNum.toString() + ".jpg";
	}
	else imagePath += episode.toString() + "/shot_" + shotNum.toString() + ".jpg";

	shot.setAttribute("src", imagePath);
	//document.getElementById("screenshotImage").src= imagePath;


	switch(season){
	case 1:
	episodeName = s1Titles[episode];
	break;
 	case 2:
        episodeName = s2Titles[episode];
	break;
	case 3:
        episodeName = s3Titles[episode];
	break;
	case 4:
        episodeName = s4Titles[episode];
	break;
	case 5:
        episodeName = s5Titles[episode];
	break;
	case 6:
        episodeName = s6Titles[episode];
	break;
	case 7:
        episodeName = s7Titles[episode];
	break;
	case 8:
        episodeName = s8Titles[episode];
	break;
	case 9:
        episodeName = s9Titles[episode];
	break;
	case 10:
        episodeName = s10Titles[episode];
	break;
}
showEpisodeName = document.createTextNode(episodeName);

if((season == 4 && episode == 18) || (season == 6 && episode == 3) || (season == 7 && episode == 10) || (season == 9 && episode == 11)){
	getRandomImage();
}

}



function simplifyString(stringInput){

	var str = stringInput;

	str = str.replace(/\s+/g, '');
	str = str.replace(":", "");
	str = str.replace(".", "");
	str = str.replace("-", "");
	str = str.replace(/[{()}]/g, '');
	str = str.replace(/[,]+/g, "");
	str = str.replace(/['"]+/g, '');
	str = str.replace(/[&]+/g, 'and');
	str = str.replace(/[1]+/g, 'one');
	str = str.replace(/[2] +/g, 'two');
	str = str.replace("?", '');
	str = str.toUpperCase();
	str = str.replace("THE", "");
	return str;
}

function incrementScore(){
		score++;
	var displayScore = document.getElementById("playerScore");
		displayScore.innerHTML = score.toString();

}


function displaySiteResponse(message){
	var showResponse = document.getElementById("guessResult");
		showResponse.innerHTML = message;

}




function toggleText(button_id)
{
   var el = document.getElementById(button_id);
   if (el.firstChild.data == "Enter")
   {
       el.firstChild.data = "Next";
   }
   else
   {
     el.firstChild.data = "Enter";
   }
}



function hider(){
	var link = document.getElementById('skipButton');
	link.style.visibility = 'hidden';
}

function shower(){
	var link = document.getElementById('skipButton');
	link.style.visibility = 'visible';
}

function enterCheck(e){
	evt = e || window.event;
	if(evt.keyCode == 13){
		checkUserInput();
	}
}
function checkKey(e) {
   // compliant with ie6
       alert(evt.keyCode+' Pressed');
}


function skipper(){
	if(hintOn){
		toggleHint();
	}
	if(skips > 0){
		skips--;
		var el = document.getElementById("skipButton");
		el.firstChild.data = "Skip (" + skips + ")";
		if(skips == 0){
			document.getElementById("skipButton").disabled = true;
		}
		getRandomImage();
	}
}
function toggleHint(coinFlip){
	if(hintOn == false){

		if(season == 1){
			coinFlip = 0;
		}
		if(season == 10){
			coinFlip = 1;
		}

	if(coinFlip == 0){
	document.getElementById("seasonHintText").innerHTML = "  Season: " + season.toString() +  " or " + (season+1).toString();
	}
	else document.getElementById("seasonHintText").innerHTML = "  Season: " + (season-1).toString() +  " or " + season.toString();
}
	else document.getElementById("seasonHintText").innerHTML = "";

	hintOn = !hintOn;

}
