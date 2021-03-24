function webLoad() {
    var bDayName = localStorage.getItem('BdayPerson');
    document.title = 'Happy Birthday ' + bDayName + '!'
    document.getElementById('bName').innerHTML = bDayName
}
function resetName() {
    localStorage.removeItem('BdayPerson')
    location.replace('https://bowswa.github.io/experiments/happy-birthday-machine/index.html');
}
window.onload = webLoad();