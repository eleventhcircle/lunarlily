const imageArray = new Array();
imageArray[0] = "/graphics/ffxivads/ffxiv_ad_blm.jpg";
imageArray[1] = "/graphics/ffxivads/ffxiv_ad_pld.jpg";
imageArray[2] = "/graphics/ffxivads/ffxiv_ad_rpr.jpg";
imageArray[3] = "/graphics/ffxivads/ffxiv_ad_sch.jpg";

if (document.getElementById("ffxivad")) {
    var number = Math.floor(Math.random()*imageArray.length);
    document.getElementById("ffxivad").innerHTML = '<a href="https://freetrial.finalfantasyxiv.com/na/"><img src="' + imageArray[number] + '" alt="A fanmade banner advertising the free trial for MMORPG Final Fantasy XIV" class="nodeco"/></a>'
}