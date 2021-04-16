function webLoad() {
    var bDayName = localStorage.getItem('BdayPerson');
    document.title = 'Happy Birthday ' + bDayName + '!';
    document.getElementById('BDayName').innerHTML = bDayName;

    kf = document.getElementById('kf');
    colorStatus = localStorage.getItem('colorStatus');
    if (colorStatus === true) {
        color1 = localStorage.getItem(color1);
        color2 = localStorage.getItem(color2);
        kf.innerHTML = `
        @@keyframes bounce {
            0% {
              color: ${color1};
            }
            100% {
              color: ${color2};
              top: -20px;
              text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
                0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
                0 50px 25px rgba(0, 0, 0, 0.2);
            }
          }`
    }
};
function resetName() {
    localStorage.removeItem('BdayPerson')
    location.replace('https://bowswa.github.io/experiments/happy-birthday-machine/index.html');
};
window.onload = webLoad();