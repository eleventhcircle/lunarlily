// Credit to dannarchy for basically all of the code below for the hit counter!
// Find the tutorial here:
// https://dannarchy.com/tut/tut_002

{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var site_data = JSON.parse(this.responseText);
      var num_arr = site_data.info.views.toString().split("");
      var num_str = "";
      for (i = 0; i < num_arr.length; i++) {
        num_str += num_arr[i];
        if ( (num_arr.length-1 - i) % 3 == 0 && (num_arr.length-1 - i) != 0 ) {num_str += ",";}
      }
      document.getElementById("hitcount").innerHTML = num_str;
    }
  };
  xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=lunarlily", true);
  xhttp.send();
}

// last.fm last played - credit to biancarosa!
// code modified slightly from example 1, which can be found here:
// https://github.com/biancarosa/lastfm-last-played/blob/main/examples/example1.html

{
let lastfmuser = "eleventhcircle";
let lastfmurl = "https://lastfm-last-played.biancarosa.com.br/" + lastfmuser + "/latest-song";
let lastfmsong = document.querySelector("#song");

fetch(lastfmurl)
  .then(function (response) {
    return response.json()
  }).then(function (json) {
    lastfmsong.innerHTML = "<a href='" + json["track"]["url"] + "'> " + json["track"]["name"] + " - " + json["track"]["artist"]["#text"] + "</a>";
  });
}
