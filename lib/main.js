// Block pages
var pageMod = require("sdk/page-mod");

// Create a page-mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
    include: ["*.foo.org", "*.bar.com", "*.twitter.com", "*.facebook.com"],
    contentScript: 'document.body.innerHTML = ' +
    ' "<h1>Finish Your Pomodoro first</h1>";'
});


// BUTTON TO REDIRECT TO A PAGE

var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
    id: "mozilla-link",
    label: "Visit Mozillaaab",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"
    },
    onClick: handleClick
});

function handleClick(state) {
    tabs.open("https://developer.mozilla.org/");
}


// TOOLBAR

var { ActionButton } = require('sdk/ui/button/action');
var { Frame } = require("sdk/ui/frame");
var { Toolbar } = require("sdk/ui/toolbar");

var button = ActionButton({
    id: "my-button",
    label: "my-button",
    icon: "./icon-16.png"
});

var frame = new Frame({
    url: "./my-frame.html"
});

var toolbar = Toolbar({
    title: "Player",
    items: [button, frame]
});

