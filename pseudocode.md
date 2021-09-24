# The goal of this project is state management.
## The objectives:
- use html to render text in the app. 
- use bootstrap to style the text and make buttons.
- text and design mobile so that it could fit any size. It is easier to go bigger than go smaller. 
- create a button that is labled "GO" that takes the app to the "beginning state."
- create a button that returns the app to its pre- beggining state. 
- create multiple next buttons that send the app into the next states in chronological order. 
- a reveal button that links to the last state. 

## The buttons I need: goBtn, nextBtn, resetBtn, revealBtn.
- goBtn: starts 
- nextBtn: next page
- resetBtn: back to main page.
- revealBtn: shows up if page 5 is visible and is the link between page 5 and page 6. 

## Home Page
- Displays "big text"
- displays a "go button"

### go button
- sends the game to the next page.
- hides big text 
- replaces the big text with another string from big text.
- displays "next button"
- displays little text

`Init
go button is clicked: calls a function that:
1. hides the text from home page.
2. replaces the big text with "new text"
3. makes a "next button" pop up.
4. makes the "little text" appear.`
