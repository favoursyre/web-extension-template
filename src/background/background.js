//This handles the background file

//Libraries -->

//Commencing the code
chrome.runtime.onInstalled.addListener(() => {
  console.log("I just installed my chrome extension");
});

//This handles the bookmark function
chrome.bookmarks.onCreated.addListener(() => {
  console.log("I just bookmarked a page");
});
