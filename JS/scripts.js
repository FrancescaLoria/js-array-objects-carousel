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
//console.log("gamesArray", gamesArray);

let currentIndex = 0;
// mi aggancio al mio elemento dell'html
const thumbnailsElement = document.querySelector(".thumbnails");

//ciclo il mio array con un foreach(metodo degli array)
gamesArray.forEach((game, index) => {
	console.log("game", game);
	// devo concatenare (+=) l'immagine corrente alle precedenti
	thumbnailsElement.innerHTML += `<div id="${index}" class="thumb">
<img src="${game.url}" alt="" />
</div>`;
});

const setCurrentGame = (index) => {
	document.getElementById("main-img").src = gamesArray[index].url;
	titleElem.innerHTML = gamesArray[index].titolo;
	paragrElem.innerHTML = gamesArray[index].descrizione;
};

const bottomArrow = document.querySelector(".bottom-arrow");
const topArrow = document.querySelector(".arrow-up");
const titleElem = document.querySelector(".title");
const paragrElem = document.querySelector(".description");

const thumbsElements = document.getElementsByClassName("thumb");

const changeImgDown = () => {
	if (currentIndex < gamesArray.length - 1) {
		currentIndex++;
		setCurrentGame(currentIndex);
	} else {
		currentIndex = 0;
		setCurrentGame(currentIndex);
	}
};

const changeImgUp = () => {
	if (currentIndex > 0) {
		currentIndex--;
		setCurrentGame(currentIndex);
	} else {
		currentIndex = gamesArray.length - 1;
		setCurrentGame(currentIndex);
	}
};

bottomArrow.addEventListener("click", changeImgDown);
topArrow.addEventListener("click", changeImgUp);

const clickThumb = (element) => {
	//Ho aggiunto in fase di crezione al posto dell'attributo id l'indice dell'oggetto. Quando clicco l'elemento, mi prendo il valore dell'id, lo salvo nel currentIndex e setto i dati del gioco corrente
	currentIndex = element.getAttribute("id");
	setCurrentGame(currentIndex);
};
// 1dato che thumbelement è un HTMLcollection ho dovuto farlo diventare un array (...) <-- prendendo tutti i suoi elementi, altrimjenti non mi avrebbe accettato il foreach che è un metodo degli array ( grazie intenet)

//2 Devo passare il this alla mia arrow function, perchè altrimenti se provo ad invocare this nella mia arrow function, mi punta all'oggetto Window
[...thumbsElements].forEach((thumb) => {
	thumb.addEventListener("click", function () {
		clickThumb(this);
	});
});
