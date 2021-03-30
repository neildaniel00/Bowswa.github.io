function checkPass() {
  var pass = document.getElementById('user').value;
  if (pass = 'Happy Birthday Opsy!') {
    localStorage.setItem('RRPassed', true);
    location.replace('https://bowswa.github.io/index.html');
  }else {
    return;
  }
};
function redirectOne() {
    localStorage.setItem('COne', true);
    location.replace('https://www.youtube.com/watch?v=d1YBv2mWll0');
}
function winLoad() {
  var check1 = localStorage.getItem('COne');
  var element = document.getElementsByClassName('one');
  if (check1 = true) {
    element.style.display = 'none';
  }else {
    return;
  }
}