var pretzelsStored = 0;
var clickerAmount = 0;
var build1Check = false;
var build1persec = true;

window.onload = processStart();
function processStart() {
    load();
    setInterval(save, 60000);
    setInterval(updateprzlcnt, 5000);
    if (clickerAmount < 10 && build1Check === false) {
        setInterval(Clicker, 10000);
        build1Check = true
        build1persec = false
    };
    if (clickerAmount >= 10 && build1Check === false || build1persec === false) {
        if (build1persec === false) {
            clearInterval(Clicker, 10000);
            build1persec = true;
        };
        setInterval(Clicker, 1000);
        build1Check = true;
    };
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
    document.title = pretzelsStored.toFixed(1) + ' Pretzels';
    document.getElementById('prtzlcount').innerHTML = 'Pretzels: ' + pretzelsStored.toFixed(1);
    document.getElementById('clicker').innerHTML = 'Clicker! ' + clickerAmount + ' Owned'
};
function pretzelClicked() {
    pretzelsStored = pretzelsStored + 1;
    document.getElementById('prtzlcount').innerHTML = 'Pretzels: ' + pretzelsStored.toFixed(1);
};
function buyClicker() {
    if (pretzelsStored < 15) {
        return alert('You do not have enough Pretzels to buy.');
    };
    clickerAmount = clickerAmount + 1
    document.getElementById('clicker').innerHTML = 'Clicker! ' + clickerAmount + ' Owned'
    if (clickerAmount < 10 && clickerAmount >= 1 && build1Check === false) {
        setInterval(Clicker, 10000);
        build1Check = true;
        build1persec = false;
    };
    if (clickerAmount >= 10 && build1Check === false || build1persec === false) {
        if (build1persec === false) {
            clearInterval(Clicker, 10000);
            build1persec = true;
        };
        setInterval(Clicker, 1000);
        build1Check = true;
    };
    pretzelsStored = pretzelsStored - 15;
};
function Clicker() {
    var clickerEarnings = .1
    if (clickerAmount < 10) {
        clickerEarnings = clickerAmount * clickerEarnings * 1;
    };
    if (clickerAmount >= 10) {
        clickerEarnings = clickerAmount * clickerEarnings / 10 * 1;
    }
    pretzelsStored = pretzelsStored + clickerEarnings;
    document.getElementById('prtzlcount').innerHTML = 'Pretzels: ' + pretzelsStored.toFixed(1);
};
function updateprzlcnt() {
    document.title = pretzelsStored.toFixed(1) + ' Pretzels';
}