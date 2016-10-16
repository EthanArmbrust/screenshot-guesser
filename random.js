var episodeNumbers = [0, 13, 22, 24, 22, 22, 25, 25, 25, 25, 23];


var season = getRandomIntInclusive(1,10);
var episode = getRandomIntInclusive(1, episodeNumbers[season]);
var shotNum = getRandomIntInclusive(2, 8);

var imagePath = "./img/Season " + season;

if(season < 10){
	imagePath += "/S0" + season.toString() + "E";}
else imagePath += "/S" + season.toString() + "E";


if(episode < 10){
	imagePath += "0" + episode.toString() + "/shot_0" + shotNum.toString() + ".jpg";
}
else imagePath += episode.toString() + "/shot_0" + shotNum.toString() + ".jpg";

//var sE = "Season " + season.toString() + " Episode " + episode.toString();
//alert(sE);


var shot =  document.createElement("IMG");
	shot.setAttribute("src", imagePath);
	document.body.appendChild(shot);




function getRandomIntInclusive(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;


}
