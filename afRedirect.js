function redirect() {
  var check = localStorage.getItem('RRpassed');
  if (check = true) {
    return;
  }else {
    location.replace('https://bowswa.github.io/april_fools.html');
  }
};
window.onload = redirect();