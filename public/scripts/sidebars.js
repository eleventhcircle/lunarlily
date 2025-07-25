// Script file for left and right sidebar boxes

// [PART 1] Establish variables - writing goes here!
// Left side boxes
let featurebox = `
<div class="small-title"><img src="/graphics/bnew.gif" alt="x" style="margin-left:2px;"> What's new?</div>
<strong>16 July 2025:</strong> added some <a href="https://bootlegdomain.neocities.org/home" target="_blank">goofy ads</a> for world famous MMORPG Final Fantasy XIV, updated about page with a link to my new Anilist account
`;

let currentlybox = `
<div class="small-title"><img src="/graphics/bflower.png" alt="x" style="margin-left:2px;"> currently...</div>
<center><iframe src="https://free.timeanddate.com/clock/i9ykbgcf/n197/fn8/fs12/fc333/ftb/pl0/pr0/pb0/ts1" frameborder="0" width="101" height="14"></iframe></center>
<strong>eating</strong> grapes :]
<br><strong>playing</strong> Bravely Default (AGAIN)
<br><strong>watching</strong> <a href="https://www.youtube.com/watch?v=Bdj14_jdumI" target="_blank">be your own algorithm</a>, by pagemelt
<br><strong>reading</strong> Secrets of the Silent Witch (Isora Matsuri)
<br><strong>listening to</strong> <span id="song"></span>
<br><strong>thinking about</strong> phainon of aedes elysiae
<br><strong>wishing for</strong> more rain...
`;

let linksbox = `
<div class="small-title"><img src="/graphics/bflower.png" alt="x" style="margin-left:2px;"> off-site links</div>
<a href="https://bsky.app/profile/eleventhcircle.bsky.social">bluesky</a>
<br><a href="https://bunflora.tumblr.com/">tumblr</a>
<br><a href="https://neocities.org/site/lunarlily">neocities profile</a>
<br><a href="https://www.last.fm/user/eleventhcircle">last.fm</a>
`;

let todobox = `
<div class="small-title"><img src="/graphics/bflower.png" alt="x" style="margin-left:2px;"> to-do list</div>
<ul>
    <li>some sort of 2025 media list?</li>
    <li>make a page for my ocs goddamn!!!</li>
    <li>dark mode...</li>
    <li>figure out how to make the site fully responsive</li>
    <li>also improve accessibility</li>
</ul>
`;

// Right side boxes
let statusbox = `
<div class="small-title"><img src="/graphics/bflower.png" alt="x" style="margin-left:2px;"> status</div>
<div id="statuscafe"><div id="statuscafe-username"></div><div id="statuscafe-content"></div></div>
`;

let counterbox = `
<div class="small-title"><img src="/graphics/bflower.png" alt="x" style="margin-left:2px;"> People watching</div>
<center>
You are traveler number <strong><span id="hitcount"></span></strong>.
<br>Lucky you!
</center>
`;

let webringsbox = `
<div class="small-title"><img src="/graphics/bflower.png" alt="x" style="margin-left:2px;"> webrings</div>
Maybe some webrings will go here someday...
`;

let linkbackbox = `
<div class="small-title"><img src="/graphics/bflower.png" alt="x" style="margin-left:2px;"> link back button :]</div>
<center>
    <img src="/graphics/lunarlily88x31.gif" style="height: 31px; width: 88px;"> <br> 
    <textarea style="width: 165px; height: 40px;"><a href="https://lunarlily.neocities.org/" target="_blank"><img src="https://github.com/eleventhcircle/lunarlily/blob/public/graphics/lunarlily88x31.gif" alt="lunarlily">
    </textarea>
</center>
<p>If you'd like to be neighbors, leave a message in the guestbook :]</p>
`;

let rssbox = `
<div class="small-title"><img src="/graphics/bflower.png" alt="x" style="margin-left:2px;"> RSS feed</div>
Coming soon!
`;

// [PART 2] Inserting into page
// Left side
if (document.getElementById("featurebox")) {
    document.getElementById("featurebox").innerHTML = featurebox;
}

if (document.getElementById("currentlybox")) {
    document.getElementById("currentlybox").innerHTML = currentlybox;
}

if (document.getElementById("linksbox")) {
    document.getElementById("linksbox").innerHTML = linksbox;
}

if (document.getElementById("todobox")) {
    document.getElementById("todobox").innerHTML = todobox;
}

// Right side
if (document.getElementById("statusbox")) {
    document.getElementById("statusbox").innerHTML = statusbox;
}

if (document.getElementById("counterbox")) {
    document.getElementById("counterbox").innerHTML = counterbox;
}

if (document.getElementById("webringsbox")) {
    document.getElementById("webringsbox").innerHTML = webringsbox;
}

if (document.getElementById("linkbackbox")) {
    document.getElementById("linkbackbox").innerHTML = linkbackbox;
}

if (document.getElementById("rssbox")) {
    document.getElementById("rssbox").innerHTML = rssbox;
}