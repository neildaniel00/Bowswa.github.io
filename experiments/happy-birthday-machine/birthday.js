function webLoad() {
    var bName = localStorage.getItem('BdayPerson');
    document.title = 'Happy Birthday ' + bName + '!'
    document.getElementById('bName').innerHTML = bName
}
function resetName() {
    localStorage.removeItem('BdayPerson')
    location.replace('https://bowswa.github.io/experiments/happy-birthday-machine/index.html');
}
window.onload = webLoad();