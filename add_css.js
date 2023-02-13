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