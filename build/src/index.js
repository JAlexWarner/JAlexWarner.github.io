"use strict";
// NOTE: Look more into ARIA when we feel confident in all the tabs
// NOTE For self: When trying to figure out LOC of JavaScript, 
//      remember everything we simplified later
function getCookie(name) {
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
    return match ? match[1] : null;
}
function toggleDark() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        // We make everything dark
        document.documentElement.style.setProperty("--bg-color", "#262626");
        document.documentElement.style.setProperty("--current-nav-color", "#9300ff");
        document.cookie = "showLight=false; SameSite=None; Secure";
    }
    else {
        // We make everything light
        document.documentElement.style.setProperty("--bg-color", "white");
        document.documentElement.style.setProperty("--current-nav-color", "#00d4ff");
        document.cookie = "showLight=true; SameSite=None; Secure";
    }
}
const boxicon_link = document.createElement('link');
boxicon_link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
boxicon_link.rel = 'stylesheet';
const arrangement_link = document.createElement('link');
arrangement_link.href = "arrangement.css";
arrangement_link.rel = "stylesheet";
const styles_link = document.createElement('link');
styles_link.href = "styles.css";
styles_link.rel = "stylesheet";
const fa_link = document.createElement('script');
fa_link.src = "https://kit.fontawesome.com/f7d489107a.js";
fa_link.crossOrigin = "anonymous";
document.getElementsByTagName('head')[0].appendChild(boxicon_link);
document.getElementsByTagName('head')[0].appendChild(arrangement_link);
document.getElementsByTagName('head')[0].appendChild(styles_link);
document.getElementsByTagName('head')[0].appendChild(fa_link);
fetch('nav.html')
    .then(res => res.text())
    .then(text => {
    var _a, _b;
    let oldelem = document.getElementById("replace-with-navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    newelem.classList.add("nav-bar");
    if (oldelem == null) {
        throw Error("Couldn't find element with 'replace-with-navbar' id");
    }
    else {
        if (oldelem.parentNode == null) {
            throw Error("Couldn't find parentNode of element with 'replace-with-navbar' id");
        }
        else {
            oldelem.parentNode.replaceChild(newelem, oldelem);
        }
    }
    var navGradientDiv = document.createElement("div");
    navGradientDiv.classList.add("gradient-glow");
    let refNode = document.querySelector(".nav-bar");
    console.log(refNode === null || refNode === void 0 ? void 0 : refNode.nextSibling);
    if ((refNode === null || refNode === void 0 ? void 0 : refNode.nextSibling) != null) {
        document.body.insertBefore(navGradientDiv, refNode === null || refNode === void 0 ? void 0 : refNode.nextSibling);
    }
    else {
        throw Error("Couldn't find nav-bar's next sibling");
    }
    (_a = document.querySelector(".nav-bar")) === null || _a === void 0 ? void 0 : _a.addEventListener("mouseenter", function () {
        console.log("Great Success (mouseenter)");
        // if (document.body.classList.contains("dark-mode")){}
    });
    (_b = document.querySelector(".nav-bar")) === null || _b === void 0 ? void 0 : _b.addEventListener("mouseleave", function () {
        console.log("Great Success (mouseleave)");
        // if (document.body.classList.contains("dark-mode")){}
    });
});
fetch("common_header.html")
    .then(res => res.text())
    .then(text => {
    let oldelem = document.getElementById("replace-with-header");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    newelem.style.paddingBottom = "20px";
    if (oldelem == null) {
        throw Error("Couldn't find element with 'replace-with-header' id");
    }
    else {
        if (oldelem.parentNode == null) {
            throw Error("Couldn't find parentNode of element with 'replace-with-header' id");
        }
        else {
            oldelem.parentNode.replaceChild(newelem, oldelem);
        }
    }
});
var myValue = getCookie("showLight");
if (myValue == null) {
    document.cookie = "showLight=true";
}
else {
    if (myValue == "true") {
        // Leave Light Mode on
    }
    else {
        window.onload = () => {
            toggleDark();
        };
    }
}
// Call Hunter Mr. Dude next time he helps
//# sourceMappingURL=index.js.map