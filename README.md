From Brittany:

This project was a bit difficult for me, and so it is not yet complete. If I had a few more days, I know it would be awesome.

I initially began this project while working with Jesse. He, being brilliant, was able to, essentially, compress multiple lines of code into only a few. For example, we began the project by just assigning each card a letter so that we could see their position on my memory card game board in my browser. He was able to walk me through doing this in just JavaScript. Me, being a beginner, was stuck from there on out for a bit. Because he was able to create and assign each card in my game a <div> using just JavaScript (and not HTML), I was confused for quite a while with regards to understanding that I would later need to pull those <divs> (or child class and ids) so that my program could compare two of them later on (and let the user play a game of memory). Unfortunately, this is where I am still stuck. My cards are visible, shuffled, and can now be clicked on (to reveal an image of a famous painting underneath), but cannot be compared.

Another point in the project I became stuck on was shuffling. Initially, I coded my one array of card objects (containing six cards) so that it would go through a loop twice and push the elements on to a new array (thus, producing pairs of the same card/image). This became problematic when it came time to shuffle the array and it's pairs. Every time I would refresh the browser, the cards would change their position on the board, but they remained next to their respective pair. Ultimately, I worked with the instructors to concatenate my original array with/on itself, so that the entire "new" array is shuffled.

One interesting aspect of my project is a solution I worked through with my best friend who is a developer. Since I am not at all familiar with jQuery, and our initial thought was to code a jQuery way in which the cards would do some sort of 3D flip to reveal it's back (the image), we came up with a way to assign each card a front and back, but then make the back transparent. This card back would essentially act as a window, revealing the image of a famous painting.

My next step for this project is to code an if/else function that would compare two cards that are clicked by the user. After they are compared, they are either left alone(if they are the same image), or wiped from the board (if they are not a match). Unfortunately, I've run out of time, but I personally feel I have made HUGE progress even in just 48 hours. I'm very, very thankful for the one-on-one time I've received from my instructors.

USER STORIES

To play this game, a user must be able to:
<!-- Great job with the planning! I know we didn't go over user stories before in class but this is an example of the format I use:
As a <type of user>, I want <some goal> so that <some reason>.   -->

-Render the complete memory board in his/her browser. This is intended to look like an artist's canvas with "mini-paintings" acting as the cards in the game. These cards, however, are blank. An image of a famous painting is hidden beneath.
-A user is notified that he/she must match all of the cards within x amount of guesses. This counter would countdown from x to 0 every time the user clicks a card on the page.
-A user begins the game. He/she clicks two cards at a time with hopes of a match.
  -If the two cards he/she clicks do match (i.e. are both van Gogh's "Starry Night"), the cards remain visible and do not move.
  -If the two cards he/she clicks do NOT match, they are wiped from the board and "turned back over".
-The counter continues to note how many times the user has clicked the board.
-If the user does not match all of the cards within the allotted number of guesses, the board will be wiped clean.
  -the user would be re-directed to a page that alerts him/her of his/her loss.
  -on that page, the user would have the option of playing again.
  -A new board would be created.
  - the game starts again.
If the user does match all of the cards, he/she would be redirected to a page congratulating him/her and his/her win.
  -on that page, the user would have the option of playing again.
  -A new board would be created.
