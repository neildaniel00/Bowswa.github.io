function checkPass() {
  var pass = document.getElementById('user').value;
  if (!pass === 'Happy Birthday Opsy!') {
    return redirect();
  }else if (pass === 'Happy Birthday Opsy!') {
    localStorage.setItem('RRPassed', true);
    location.replace('https://bowswa.github.io/home.html');
  }
};
function redirect() {
    location.replace('https://www.youtube.com/watch?v=d1YBv2mWll0');
};