function webLoad() {
    var bName = localStorage.getItem('BdayPerson');
    document.title = 'Happy Birthday ' + bName + '!'
    document.getElementById('bName').innerHTML = bName
}
window.onload = webLoad();