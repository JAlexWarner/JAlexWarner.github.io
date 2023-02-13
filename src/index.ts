function toggleDark() {
  document.body.classList.toggle("dark-mode");
}

// function startDarkMode() {
//   document.body.classList.add("dark-mode");
// }

// function startLightMode() {
//   document.body.classList.remove("dark-mode");
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
    let oldelem = document.getElementById("replace-with-navbar") as HTMLElement;
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