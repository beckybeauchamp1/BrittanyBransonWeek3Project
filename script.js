// Nice! Awesome job creating an array of objects.

var faces_array = [
  starryNight = {
    title: "Starry Night",
    image: "images/starrynight.jpg"
  },
  girlPearl = {
    title: "Girl With A Pearl Earring",
    image: "images/pearl.jpg"
  },
  sunflower = {
    title: "Sunflowers",
    image: "images/sunflower.jpg"
  },
  lilly = {
    title: "Lilly",
    image: "images/lilly.jpg"
  },
  george = {
    title: "Sunday Afternoon",
    image: "images/george.jpg"
  },
  monaLisa = {
    title: "Mona Lisa",
    image: "images/mona.jpg"
  }
];

function shuffle(array)
// watch out for indentation here, it should be indented to the right.
{
  // what does m represent?
  // Also, what is t and i?
  var m = array.length, t, i;
  while (m > 0)
  // watch out for indentation
  {
	i = Math.floor(Math.random() * m--);
	t = array[m];
	array[m] = array[i];
	array[i] = t;
  }
  return array;
}

function createCard(cardIndex, card) {
  var cardElement = document.createElement("div"); //create an element

  // I don't think you need to separate "divs" for one card. You could fake a front and back
  // Also, I would abstract this into a separate function, for example I might:

//   function createDivs(){
//     var front = document.createElement("div"); //creates a new div that will become the front
//     var back = document.createElement("div"); //creates a new div that will become back
//     cardElement.appendChild(front); //adding the front to the cardElement
//     cardElement.appendChild(back);//adding the back to the cardElement
//     document.getElementById("memory_board").appendChild(cardElement); //append the element to the memory board
//     cardElement.setAttribute("id", cardIndex);
//     cardElement.classList.add("card");//adding a class to cardElement
//     front.classList.add("card_front");//adding a class to the front
//     back.classList.add("card_back");//adding a class to the back
//     back.style.background = "url('"+ card.image +"')";
//
// }

  var front = document.createElement("div"); //creates a new div that will become the front
  var back = document.createElement("div"); //creates a new div that will become back
  cardElement.appendChild(front); //adding the front to the cardElement
  cardElement.appendChild(back);//adding the back to the cardElement
  document.getElementById("memory_board").appendChild(cardElement); //append the element to the memory board
// watch out for indentation here:
    cardElement.setAttribute("id", cardIndex);
    cardElement.classList.add("card");//adding a class to cardElement
    front.classList.add("card_front");//adding a class to the front
    back.classList.add("card_back");//adding a class to the back
    back.style.background = "url('"+ card.image +"')";
}

// I might place my global variables at the top of the script.js. It's not necesary but helps for reading your code

var cards = document.getElementsByClassName("card");

function addEventListener() {
  for (var i = 0; i < cards.length; i++ ) {
    cards[i].addEventListener("click", flipCard); //going through each card and adding a click event
  }
}

// I am not familiar with .concat, but I don't understand the point necessarily to do this and the
// shuffle function below

var card_set = faces_array.concat(faces_array); //setting up a blank array
console.log("card_set ct", card_set.length)
console.log("card_set", card_set); //the card_set without quotes will produce, instead of a string of information, directly the card_set

var shuffledDeck = shuffle(card_set);

for (var i = 0; i < shuffledDeck.length; i++) { //for loop through the card_set array
  createCard(i, shuffledDeck[i]); //create a card for each object in the card_set array. which will give us unique elements, but duplicate cards
}

var flipCard = function() {
      //this is the call back function. add the event listener to EACH card. it will ONLY happen if a user clicks on an indiviudal card. The context of what you're clicking on changes.
      var clicked_card = this.id; //grabbing the id of the card that was clicked
      console.log(clicked_card); //looping through the card set array
      for (var i = 0; i < card_set.length; i++) {
        if (i == clicked_card) { //comparing the id of the card that was clicked to its position in the array
          document.getElementById(clicked_card).childNodes[0].style.background = "transparent"; //using the id defined to find the card thats been clicked. then, using the card we find its front child and turn its background transparent (its acting as a window to the image, eventually)
          console.log("you clicked me!");
        }
      }
  }

addEventListener();
