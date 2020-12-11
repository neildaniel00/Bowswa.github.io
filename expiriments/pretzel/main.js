var pretzelsStored = 0;
var clickerAmount = 0;

window.onload = autoSave();
function autoSave() {
    load();
    setInterval(save, 60000);
};
function save() {
    localStorage.setItem('pretzelcount', pretzelsStored);
    localStorage.setItem('clickers', clickerAmount);
    alert('Game Saved!');
};
function load() {
    pretzelsStored = localStorage.getItem('pretzelcount');
    clickerAmount = localStorage.getItem('clickers');
    pretzelsStored = parseInt(pretzelsStored);
    clickerAmount = parseInt(clickerAmount);
    document.title = pretzelsStored + ' Pretzels';
    document.getElementById('prtzlcount').innerHTML = 'Pretzels: ' + pretzelsStored;
};
function pretzelClicked() {
    pretzelsStored = pretzelsStored + 1;
    document.title = pretzelsStored + ' Pretzels';
    document.getElementById('prtzlcount').innerHTML = 'Pretzels: ' + pretzelsStored;
};
function buyClicker() {
    clickerAmount = clickerAmount + 1
    if (pretzelsStored < 15) {
        return alert('You do not have enough Pretzels to buy.');
    };
    document.getElementById('clicker').innerHTML = 'Clicker! ' + clickerAmount + ' Owned'
    if (clickerAmount > 0) {
        setInterval(Clicker, 10000);
    };
};
function Clicker() {
    var clickerEarnings = clickerAmount * 1
    pretzelsStored = pretzelsStored + clickerEarnings;
    document.title = pretzelsStored + ' Pretzels'
    document.getElementById('prtzlcount').innerHTML = 'Pretzels: ' + pretzelsStored;
};