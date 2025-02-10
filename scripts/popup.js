// document.addEventListener('keydown', function(event) {
	// console.log("hello");
// });
console.log("hello");
// console.log(document.getElementById("viewedCheckbox").checked);

// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  // console.log("Send");
  // chrome.tabs.sendMessage(tabs[0].id, "message", (response) => {
    // console.log("Recv response = " + response.title);
    // console.log("Recv response = ");
    // document.getElementById("title").innerText = response.title;
  // });
// });

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // if (message.action === "getPopupData") {
    // const data = document.getElementById("appliedCheckbox").innerHTML;
    // sendResponse({ data: data });
  // }
  // return true;  // keep the message channel open for the response
// });