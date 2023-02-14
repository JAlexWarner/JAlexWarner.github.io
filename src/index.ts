// NOTE: Look more into ARIA when we feel confident in all the tabs

// Let's get the longest text in the link text strings

let link_text_array = Array.from(document.querySelectorAll("link-text"));
let link_text_lengths = link_text_array.map(x => x.textContent? x.textContent.length : 0);

function toggleDark() {
  document.body.classList.toggle("dark-mode");
}

// function startDarkMode() {
//   document.body.classList.add("dark-mode");
// }

const boxicon_link = document.createElement('link');
boxicon_link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
boxicon_link.rel = 'stylesheet';

const arrangement_link = document.createElement('link');
arrangement_link.href = "arrangement.css";
arrangement_link.rel = "stylesheet";

const styles_link = document.createElement('link');
styles_link.href = "styles.css";
styles_link.rel = "stylesheet";

document.getElementsByTagName('head')[0].appendChild(boxicon_link);
document.getElementsByTagName('head')[0].appendChild(arrangement_link);
document.getElementsByTagName('head')[0].appendChild(styles_link);

fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.getElementById("replace-with-navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    newelem.classList.add("nav-bar");

    if (oldelem == null){
      throw Error("Couldn't find element with 'replace-with-navbar' id");
    }
    else {
      if (oldelem.parentNode == null){
        throw Error("Couldn't find parentNode of element with 'replace-with-navbar' id");
      }
      else {
        oldelem.parentNode.replaceChild(newelem,oldelem);
      }
    }
})

fetch("common_header.html")
.then(res => res.text())
.then(text => {
  let oldelem = document.getElementById("replace-with-header");
  let newelem = document.createElement("div");
  newelem.innerHTML = text;
  newelem.style.paddingBottom = "20px";

  if (oldelem == null){
    throw Error("Couldn't find element with 'replace-with-header' id");
  }
  else {
    if (oldelem.parentNode == null){
      throw Error("Couldn't find parentNode of element with 'replace-with-header' id");
    }
    else {
      oldelem.parentNode.replaceChild(newelem,oldelem);
    }
  }
})

const textAddEvent = new Event("textAdd", {
  bubbles: false,
  cancelable: true,
  composed: false
})

var nav_bar_element = document.querySelector(".nav-bar");

document.querySelectorAll(".growing-text").forEach(item => {
  item.addEventListener("mouseover", function(){
    build_text(item)
  })
})

function build_text(textElement: Element) {
    const full_word = textElement.textContent;
    
    if (full_word == null) {
      throw Error("word is null")
    }
    else {
      textElement.textContent = "";
      for (var i=0; i< full_word.length; i++) {
      textElement.textContent = textElement.textContent + full_word[0]
      }
}
}