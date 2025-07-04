// Last updated tracker - credit to dannarchy for this code!
// Find the tutorial here (under the Bonus Code header)
// https://dannarchy.com/tut/tut_002

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var site_data = JSON.parse(this.responseText);

        var date_str = site_data.info.last_updated;
        var date_obj = new Date(site_data.info.last_updated);
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        document.getElementById("lastupdate").innerHTML = date_obj.getDate() + " " + months[date_obj.getMonth()] + " " + date_obj.getFullYear();
    }
};
xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=lunarlily", true);
xhttp.send();
// End tracker code


// Script for navigation bar + title + footer
// [PART 1] Establish variables - writing goes in here!
let navbar = `
<center> 
    <a id="navlink" href="/"><img src="/graphics/pin.png" alt="x">  home</a> 
    <a id="navlink" href="/about"><img src="/graphics/pin.png" alt="x">  about</a> 
    <a id="navlink" href="/journal"><img src="/graphics/pin.png" alt="x">  journal</a> 
    <a id="navlink" href="/guestbook"><img src="/graphics/pin.png" alt="x">  guestbook</a>
    <a id="navlink" href="/totw-archive"><img src="/graphics/pin.png" alt="x">  totw archive</a> 
    <a id="navlink" href="/sitemap"><img src="/graphics/pin.png" alt="x">  sitemap</a> 
    <a id="navlink" href="/credits"><img src="/graphics/pin.png" alt="x">  credits</a>
</center>
`;

let title = `
    <div class="text"><img src="/graphics/moonbunny.gif" alt="x"> blooming on the moon <img src="/graphics/moonbunny.gif" alt="x"></div>
`;

let footer = `
    lunarlily was last updated on <span id="lastupdate"></span>    
    <br><br>Layout made by <a href='http://itinerae.neocities.org'>Itinerae (edited by me!)</a>
    <br>Journal built with <a href='https://codeberg.org/cdvr/Zonelots'>Zonelots</a> (based on <a href='https://zonelets.net/'>Zonelets</a>)
`;

// [PART 2] Inserting into page
if (document.getElementById("navigation")) {
    document.getElementById("navigation").innerHTML = navbar;
}

if (document.getElementById("bannertextorimage")) {
    document.getElementById("bannertextorimage").innerHTML = title;
}

if (document.getElementById("footertext")) {
    document.getElementById("footertext").innerHTML = footer;
}




