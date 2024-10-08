/**
 * @jest-environment jsdom
 */

const { expect } = require('@jest/globals');
const $ = require('jquery');

const {
  onNextButtonClicked,
  onPreviousButtonClicked,
  getCurrentIndex,
  LIKE_NUMBERS,
  IMAGE_TITLES,
  IMAGES,
  updateKittyInfo,
} = require('./script');

describe('tests Rate My Kitties app', () => {
  // global.window = window;
  // global.$ = $;

  let kittyTitle;
  let likeNumber;
  let myBannerElement;
  let previousButton;
  let nextButton;

  function setUp() {
    // Set up our document body
    document.body.innerHTML =
      '<div>' +
      '  <img id="my-banner" src=""/>' +
      '  <button id="previous-button" />' +
      '  <button id="next-button" />' +
      '  <p id="kitty-title" class="card-text"></p>' +
      '  <p id="like-number" class="card-text"></p>';
    ('</div>');

    kittyTitle = $('#kitty-title');
    likeNumber = $('#like-number');
    myBannerElement = $('#my-banner');
    previousButton = $('#previous-button');
    nextButton = $('#next-button');
  }

  beforeEach(() => {
    setUp();
  });

  test("should update the title to the 2nd kitty image's", () => {
    updateKittyInfo(1);
    expect(kittyTitle.prop('innerHTML')).toBe(IMAGE_TITLES[1]);
  });

  test("should update the like number to the 2nd kitty image's", () => {
    updateKittyInfo(1);
    expect(parseInt(likeNumber.prop('innerHTML'))).toBe(LIKE_NUMBERS[1]);
  });

  test("should update the image to the 2nd kitty image's", () => {
    updateKittyInfo(1);
    expect(myBannerElement.prop('src').endsWith(IMAGES[1])).toBe(true);
  });

  test('should update the image index to 1 when clicking on the Next button', () => {
    let currentIndex = getCurrentIndex();
    onNextButtonClicked();
    expect(getCurrentIndex()).toBe(currentIndex + 1);
  });

  test('should update the image index to 0 when clicking on the Previous button', () => {
    let currentIndex = getCurrentIndex();
    onPreviousButtonClicked();
    expect(getCurrentIndex()).toBe(currentIndex - 1);
  });
});
