const IMAGES = [
  "images/kitty-1.jpg",
  "images/kitty-2.jpg",
  "images/kitty-3.jpg",
  "images/kitty-4.jpg",
];

const IMAGE_TITLES = [
  "Rum Tum Tugger",
  "Grizabella",
  "Gus",
  "Mr. Mistoffelees",
];

let LIKE_NUMBERS = [
  100,
  200,
  10,
  90,
];

let currentIndex = 0;

// Handles the event when the Next button is clicked.
function onNextButtonClicked() {
  // If we are still not hitting the end of the list yet, increase the index.
  if (currentIndex < IMAGES.length - 1) {
    // TODO: Increases the currentIndex by 1.

    // Update the kitty image with the new index.
    updateKittyInfo(currentIndex);
  }
}

// Handles the event when the Previous button is clicked.
function onPreviousButtonClicked() {
  // If we are still not hitting the beginning of the list yet, decrease the index.
  if (currentIndex > 0) {
    // TODO: Decreases the currentIndex by 1.

    // Update the kitty image with the new index.
    updateKittyInfo(currentIndex);
  }
}

// Updates the kitty's information with the given index. If the index is 1, it means that the 2nd kitty
// is selected, and you should use that index to retrieve the corresponding `IMAGES`, `IMAGE_TITLES` and 
// `LIKE_NUMBERS` defined above.
function updateKittyInfo(index) {
  // TODO: Update the image with the ID "my-banner" with the new image. Hint: Use document.getElementById() to 
  // get the element with the ID "my-banner" and use `src` property to update the `src` of the image.


  // TODO: Update the Title of the image here. Hint: Use `innerHTML` property instead of `src`.


  // TODO: Update the Like number of the image here. Hint: Use `innerHTML` property instead of `src`.

}

// --------------------------------------------------------------
// NOTE: DO NOT CHANGE THE LINES BELOW!!!
// --------------------------------------------------------------

function getCurrentIndex() {
  return currentIndex;
}

// This is to check whether this script is run on the Browser OR in the unit test environment.
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    onNextButtonClicked,
    onPreviousButtonClicked,
    IMAGE_TITLES,
    IMAGES,
    LIKE_NUMBERS,
    updateKittyInfo,
    getCurrentIndex
  };
}