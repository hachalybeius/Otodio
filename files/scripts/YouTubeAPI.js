//This authenticates the Youtube Data API and loads the Javascript API Library.
function authenticateAPI() {
  //Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyC_SVhOgn8VxxKWQQ6Vk9XZwwp8Z_EgCS4',
  }).then(function() {
    //Initialize and make the API request.
    return gapi.client.request({
      'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
    })
  }).then(function(response) {
    console.log(response.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};

function handleClientLoad(){
  gapi.load('client', authenticateAPI);
}




//This code loads the IFrame Player API code asynchronously
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//This function creates an <iframe> (and YouTube player)
//after the API code downloads.

function onYouTubeIframeAPIReady() {
	const player = new YT.Player('player', {
  		height: '90%',
  		width: '90%',
      videoId: 'M7lc1UVf-VE',
  		events: {
    		'onReady': onPlayerReady
  		}
	});
}
//The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}


//TODO login with youtube function(extra)
//TODO pull videos from playlist function
//TODO load video function
//TODO 