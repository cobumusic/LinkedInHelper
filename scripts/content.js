// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
TODO

- trigger hide when loading the page
- trigger hide when scrolling and more jobs appear
- trigger hide when clicking away from a job, maybe?

- save links to viewed jobs; allow that to be viewable

- add an option within hello.html to turn off the plugin and/or re-show hidden job cards

- potential later options to add: 
- hide based on Viewed, Applied, or Promoted
- hide by either removing entirely (style="display:none") or by displaying a blank card instead or by adding a grey overlay
*/


	// chrome.runtime.sendMessage({ action: "getPopupData" }, function(response) {
	  // console.log("Popup data received:", response.data);
	// });  
	
	
console.log("matches.js");

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // console.log("Recv. Send response = " + document.title);
  // sendResponse({ title: document.title });

  // return true;
// });

var hideViewed = true;
var hideApplied = true;
var hideSaved = true;

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 72) {
		//alert('h was pressed');
		hideAll()
    }
});

function hideAll(){


	//MOST IMPORTANT TODO: figure out how to get/set variables between this file and hello.html, so the checkboxes there can be set onload, and so filters here can be set


	//TODO get current state of checkboxes
	// var currHideViewed = document.getElementById("viewedCheckbox").checked;
	// var currHideApplied = document.getElementById("appliedCheckbox").checked;
	// var currHideSaved = document.getElementById("savedCheckbox").checked;
	
	//TODO save state of checkboxes after popup is closed
	
	//alert("hideViewed is " + currHideViewed + ", hideApplied is " + currHideApplied + ", hideSaved is " + currHideSaved);

	//find all DOM elements that are job postings AND that contain "viewed"
	//search within <ul class="scaffold-layout__list-container">
	//or, search for anything with class="job-card-container--clickable"
	var collection = document.getElementsByClassName("job-card-container--clickable");
	for(let card of collection){
		//to clean this up, make it its own function?
		//find with class job-card-list__footer-wrapper
		var footerWrappers = card.getElementsByClassName("job-card-list__footer-wrapper");
		//if the above does exist, see if it contains Viewed or Applied
		if (footerWrappers.length != 0){
			var footerInsides = footerWrappers[0].innerHTML;
			if (
				(footerInsides.includes("Viewed") && hideViewed) 
				|| (footerInsides.includes("Applied") && hideApplied) 
				|| (footerInsides.includes("Saved") && hideSaved) 
			){				
				//hide the job card:
				//get grandparent of card
				var grandparent = card.parentElement.parentElement;
				//add style="display:none" if it doesn't already exist 
				//can do x.style.display = "none";
				grandparent.style.display = "none";
			}
			else {//display otherwise
				var grandparent = card.parentElement.parentElement;
				grandparent.style.display = "block";
			}
		}
		
	}

}