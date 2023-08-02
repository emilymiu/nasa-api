var request = new XMLHttpRequest(); 
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var key = "GZGQjZeeGUjT04gC1wafpzlv5AnMf75QcUs5Z7Vc";

// after successful request, retrieve data from the server
function displayInfo() {
  if (request.status == 200 && request.readyState == 4) {
    var response = JSON.parse(request.responseText);
    document.getElementById("date").textContent = response.date;
    document.getElementById("explanation").textContent = response.explanation;
    document.getElementById("title").textContent = response.title;
    document.getElementById("hdurl").src = response.hdurl;
  }
}

// initialize request and send to the server
request.open("GET", url + key);
request.send();

// when request has finished loading, execute the function
request.addEventListener("load", displayInfo);