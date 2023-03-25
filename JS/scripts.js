// creo array di oggetti
const gamesArray = [
	{
		url: "img/01.webp",
		titolo: "Marvel's Spiderman Miles Morales",
		descrizione:
			"Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
	},
	{
		url: "img/02.webp",
		titolo: "Ratchet & Clank: Rift Apart",
		descrizione:
			"In light of their previous heroics, Ratchet (James Arnold Taylor) and Clank (David Kaye) are celebrated as galactic heroes."
	},
	{
		url: "img/03.webp",
		titolo: "Cyberpunk 2077",
		descrizione:
			"The game begins with the selection of one of three lifepaths for the player character V (Gavin Drea or Cherami Leigh): Nomad, Streetkid, or Corpo."
	},
	{
		url: "img/04.webp",
		titolo: "Stray",
		descrizione:
			"While a group of four stray cats trek through the ruins of an abandoned facility, one becomes separated from the others after falling into a chasm leading to an unpopulated underground city."
	},
	{
		url: "img/05.webp",
		titolo: "Marvel's Avengers",
		descrizione:
			"Kamala attends a celebration event called 'Avengers Day' which unveils the Avengers' second headquarters in San Francisco and their own Helicarrier called the Chimera."
	}
];
console.log("gamesArray", gamesArray);

let currentIndex = 0;
// mi aggancio al mio elemento dell'html
const thumbnailsElement = document.querySelector(".thumbnails");

//ciclo il mio array con un foreach(metodo degli array)
gamesArray.forEach((game) => {
	console.log("game", game);
	// devo concatenare (+=) l'immagine corrente alle precedenti
	thumbnailsElement.innerHTML += `<div class="thumb">
<img src="${game.url}" alt="" />
</div>`;
});

const bottomArrow = document.querySelector(".bottom-arrow");

const changeImg = () => {
	currentIndex++;
	console.log(gamesArray[currentIndex].url);
	document.getElementById("main-img").src = gamesArray[currentIndex].url;
};

bottomArrow.addEventListener("click", changeImg);
