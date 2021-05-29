var Game;

//currencies
var pretzelBank = 0;
var totalPretzelCount = 0;
var upgradeTokens = 0;
var totalUpgradeTokens = 0;
var upgradeTokenPrice = 1000000;

//stats
var PPC = 1;
var PPS = 0;
var highestPPS = 0;
var buildingUpgrades = 0;

//clickers
var clickerAmount = 0;
var slapperAmount = 0;
var clickerBuildAmount = 0;
var clickerPrice = 15;
var slapperPrice = 2;

//grandmas
var grandmaBakerAmount = 0;
var grandmaTwisterAmount = 0;
var grandmaBuildAmount = 0;
var grandmaBakerPrice =  100;
var grandmaTwisterPrice = 5;

//grandpas
var grandpaBakerAmount = 0;
var grandpaTwisterAmount = 0;
var grandpaBuildAmount = 0;
var grandpaBakerPrice = 500;
var grandpaTwisterPrice = 9;
var grandpaBakerSimpMs = 0;
var grandpaTwisterSimpMs = 0;
var grandpaBakerPPS = 5;
var grandpaTwisterPPS = 10;

/**
var upgradeCount = 0;
var achievementCount = 0;

var prestigeCount = 0;
var prestigeMode = 0;
var prestigeChallenge = 0;
var activePrestigePercent = 0;
**/

var beta = false;
var displayGameVersion = 0.05;
var gameVersion = localStorage.getItem('gameVersion');
var BgameVersion = localStorage.getItem('BgameVersion');

/**\\\\\\\\\\\\\\\\\\\\\\\\\\\
 *        SAVE SECTION 
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\*/

function save() {
  if (window.location.href.indexOf('/beta')>-1) beta = true;
  
  if (beta = true) Bsave();
  else if (beta = false) Nsave();
  else console.log('Error 001: SAVE ERROR - Something happened with the beta save check!')
};
function Nsave() {
  localStorage.setItem('gameVersion', displayGameVersion);

  localStorage.setItem('pretzelBank', pretzelBank);
  localStorage.setItem('totalPretzelCount', totalPretzelCount);
  localStorage.setItem('upgradeTokens', upgradeTokens);
  localStorage.setItem('totalUpgradeTokens', totalUpgradeTokens);

  localStorage.setItem('highestPPS', highestPPS);

  localStorage.setItem('clickerAmount', clickerAmount);
  localStorage.setItem('slapperAmount', slapperAmount);

  localStorage.setItem('grandmaBakerAmount', grandmaBakerAmount);
  localStorage.setItem('grandmaTwisterAmount', grandmaTwisterAmount);

  localStorage.setItem('grandpaBakerAmount', grandpaBakerAmount);
  localStorage.setItem('grandpaTwisterAmount', grandpaTwisterAmount);
  console.log('Game Saved!');
};
function Bsave() {
  localStorage.setItem('BgameVersion', displayGameVersion);

  localStorage.setItem('BpretzelBank', pretzelBank);
  localStorage.setItem('BtotalPretzelCount', totalPretzelCount);
  localStorage.setItem('BupgradeTokens', upgradeTokens);
  localStorage.setItem('BtotalUpgradeTokens', totalUpgradeTokens);
  
  localStorage.setItem('BhighestPPS', highestPPS);
  
  localStorage.setItem('BclickerAmount', clickerAmount);
  localStorage.setItem('BslapperAmount', slapperAmount);
  
  localStorage.setItem('BgrandmaBakerAmount', grandmaBakerAmount);
  localStorage.setItem('BgrandmaTwisterAmount', grandmaTwisterAmount);
  
  localStorage.setItem('BgrandpaBakerAmount', grandpaBakerAmount);
  localStorage.setItem('BgrandpaTwisterAmount', grandpaTwisterAmount);
  console.log('Game Saved!');
};
/**\\\\\\\\\\\\\\\\\\\\\\\\\\\
 *       LOAD SECTION
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\*/

function load() {
  if (window.location.href.indexOf('/beta')>-1) beta = true;

  if (!gameVersion) {
    errReset();
    save();
    return load();
  }else if (beta === true) {
    var verBox = document.getElementById("beta");
    verBox.style.display = "hidden";

    if (!BgameVersion) {
      errReset();
      return console.log('ERROR 002: LOAD ERROR - No game version was set. Reseting now!');
    }else if (BgameVersion < displayGameVersion) {
      errReset();
      return alert('ERROR 002: LOAD ERROR - A new beta has been posted since this save was created. Your save has been reset. Please play on the main version for a permanant save code.');
    }else if (BgameVersion = displayGameVersion) {
      pretzelBank = localStorage.getItem('BpretzelBank');
      totalPretzelCount = localStorage.getItem('BtotalPretzelCount');
      upgradeTokens = localStorage.getItem('BupgradeTokens');
      totalUpgradeTokens = localStorage.getItem('BtotalUpgradeTokens');

      highestPPS = localStorage.getItem('BhighestPPS');

      clickerAmount = localStorage.getItem('BclickerAmount');
      slapperAmount = localStorage.getItem('BslapperAmount');
      clickerBuildAmount = clickerAmount + slapperAmount;

      grandmaBakerAmount = localStorage.getItem('BgrandmaBakerAmount');
      grandmaTwisterAmount = localStorage.getItem('BgrandmaTwisterAmount');
      grandmaBuildAmount = grandmaBakerAmount + grandmaTwisterAmount;

      grandpaBakerAmount = localStorage.getItem('BgrandpaBakerAmount');
      grandpaTwisterAmount = localStorage.getItem('BgrandpaTwisterAmount');
      grandpaBuildAmount = grandpaBakerAmount + grandpaTwisterAmount;

      return updateAll();
    }else if (BgameVersion > displayGameVersion) {
      errReset();
      return alert('ERROR 002: LOAD ERROR - Your save seems to have been sent from the future... good to know we invented Time Machines! We have reset this save as it is likely to be broken.');
    }
  }else if (beta === false) {
    if (!BgameVersion) {
      errReset();
      return console.log('ERROR 002: LOAD ERROR - No game version was set. Reseting now!');
    }else if (gameVersion >= 0.04) {
      errReset();
      return alert('ERROR 002: LOAD ERROR - You are not allowed to import from this version. Your save has been reset.');
    }else if (gameVersion = displayGameVersion) {
      var verBox = document.getElementById("live");
      verBox.style.display = "none";

      pretzelBank = localStorage.getItem('pretzelBank');
      totalPretzelCount = localStorage.getItem('totalPretzelCount');
      upgradeTokens = localStorage.getItem('upgradeTokens');
      totalUpgradeTokens = localStorage.getItem('totalUpgradeTokens');

      highestPPS = localStorage.getItem('highestPPS');

      clickerAmount = localStorage.getItem('clickerAmount');
      slapperAmount = localStorage.getItem('slapperAmount');
      clickerBuildAmount = clickerAmount + slapperAmount;

      grandmaBakerAmount = localStorage.getItem('grandmaBakerAmount');
      grandmaTwisterAmount = localStorage.getItem('grandmaTwisterAmount');
      grandmaBuildAmount = grandmaBakerAmount + grandmaTwisterAmount;

      grandpaBakerAmount = localStorage.getItem('grandpaBakerAmount');
      grandpaTwisterAmount = localStorage.getItem('grandpaTwisterAmount');
      grandpaBuildAmount = grandpaBakerAmount + grandpaTwisterAmount;

      return updateAll();
    }else if (gameVersion > displayGameVersion) {
      errReset();
      return alert('ERROR 002: LOAD ERROR - Your save seems to have been sent from the future... good to know we invented Time Machines! We have reset this save as it is likely to be broken.');
    }
  }
};

/**\\\\\\\\\\\\\\\\\\\\\\\\\\\
 *       RESET SECTION
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\*/

function reset() {
  resetConfirm = confirm('Are you sure you want to reset? This cannot be undone.')
  
  if (resetConfirm === true) {
    clearInterval(addPPS, 1000);
    //currencies
    pretzelBank = 0;
    totalPretzelCount = 0;
    upgradeTokens = 0;
    totalUpgradeTokens = 0;
    upgradeTokenPrice = 1000000;

    //stats
    PPC = 1;
    PPS = 0;
    highestPPS = 0;
    buildingUpgrades = 0;
    
    //clickers
    clickerAmount = 0;
    slapperAmount = 0;
    clickerBuildAmount = 0;
    clickerPrice = 15;
    
    //grandmas
    grandmaBakerAmount = 0;
    grandmaTwisterAmount = 0;
    grandmaBuildAmount = 0;
    grandmaBakerPrice =  100;
    
    //grandpas
    grandpaBakerAmount = 0;
    grandpaTwisterAmount = 0;
    grandpaBuildAmount = 0;
    grandpaBakerPrice = 500;
    grandpaBakerSimpMs = 0;
    grandpaTwisterSimpMs = 0;
    grandpaBakerPPS = 5;
    grandpaTwisterPPS = 10;

    gameVersion = displayGameVersion;
    updateNormal();
    setInterval(addPPS, 1000);
  }else if (resetConfirm === false) {
    alert('Good Choice M8!');
  }
};
function errReset() {
  clearInterval(addPPS, 1000);
  //currencies
  pretzelBank = 0;
  totalPretzelCount = 0;
  upgradeTokens = 0;
  totalUpgradeTokens = 0;
  upgradeTokenPrice = 1000000;

  //stats
  PPC = 1;
  PPS = 0;
  highestPPS = 0;
  buildingUpgrades = 0;
  
  //clickers
  clickerAmount = 0;
  slapperAmount = 0;
  clickerBuildAmount = 0;
  clickerPrice = 15;
  
  //grandmas
  grandmaBakerAmount = 0;
  grandmaTwisterAmount = 0;
  grandmaBuildAmount = 0;
  grandmaBakerPrice =  100;
  
  //grandpas
  grandpaBakerAmount = 0;
  grandpaTwisterAmount = 0;
  grandpaBuildAmount = 0;
  grandpaBakerPrice = 500;
  grandpaBakerSimpMs = 0;
  grandpaTwisterSimpMs = 0;
  grandpaBakerPPS = 5;
  grandpaTwisterPPS = 10;

  gameVersion = displayGameVersion;
  updateNormal();
  setInterval(addPPS, 1000);
  load();
};

/**\\\\\\\\\\\\\\\\\\\\\\\\\\\
 *       UPDATE SECTION
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\*/

function updateAll() {
  update5sec();
  updateNormal();
  updateVersion();
};
function update5sec() {
  document.title = pretzelBank.toFixed(1) + ' Pretzels';
  pretzelsPSCalc();
};
function updateNormal() {
  updatePretzels();
  updateBuildings();
};
function updatePretzels() {
  document.getElementById('prtzelBank').innerHTML = 'Pretzels: ' + pretzelBank.toFixed(1);
};
function updateBuildings() {
  updateClickers();
  updateGrandmas();
  updateGrandpas();
};
function updateClickers() {
  document.getElementById('clicker_build_amount').innerHTML = clickerBuildAmount + ' Owned';
  document.getElementById('clicker_amount').innerHTML = clickerAmount + ' Owned';
  document.getElementById('slapper_amount').innerHTML = slapperAmount + ' Owned';

  clickerMath = Math.pow(1.25, clickerBuildAmount);
  clickerPrice = 15 * clickerMath;
  clickerPrice = clickerPrice.toFixed(1);
  clickerPrice = parseInt(clickerPrice);
  if (clickerPrice === 666 || clickerPrice === 6666 || clickerPrice === 66666 || clickerPrice === 666666) {
    clickerPrice = clickerPrice + 1;
  }

  document.getElementById('cli_price').innerHTML = clickerPrice + ' Pretzels';
};
function updateGrandmas() {
  document.getElementById('grandma_build_amount').innerHTML = grandmaBuildAmount + ' Owned';
  document.getElementById('grandma_baker_amount').innerHTML = grandmaBakerAmount + ' Owned';
  document.getElementById('grandma_twister_amount').innerHTML = grandmaTwisterAmount + ' Owned';

  grandmaMath = Math.pow(1.25, grandmaBuildAmount);
  grandmaPrice = 100 * grandmaMath;
  grandmaPrice = grandmaPrice.toFixed(1);
  grandmaPrice = parseInt(grandmaPrice);
  if (grandmaPrice === 666 || grandmaPrice === 6666 || grandmaPrice === 66666 || grandmaPrice === 666666) {
    grandmaPrice = grandmaPrice + 1;
  }
  
  document.getElementById('gm_bake_price').innerHTML = grandmaPrice + ' Pretzels';
  grandpaSimpCalc();
};
function updateGrandpas() {
  document.getElementById('grandpa_build_amount').innerHTML = grandpaBuildAmount + ' Owned';
  document.getElementById('grandpa_baker_amount').innerHTML = grandpaBakerAmount + ' Owned';
  document.getElementById('grandpa_twister_amount').innerHTML = grandpaTwisterAmount + ' Owned';

  grandpaMath = Math.pow(1.25, grandpaBuildAmount);
  grandpaPrice = 100 * grandpaMath;
  grandpaPrice = grandpaPrice.toFixed(1);
  grandpaPrice = parseInt(grandpaPrice);
  if (grandpaPrice === 666 || grandpaPrice === 6666 || grandpaPrice === 66666 || grandpaPrice === 666666) {
    grandpaPrice = grandpaPrice + 1;
  }
  
  document.getElementById('gp_bake_price').innerHTML = grandpaPrice + ' Pretzels';
};
function grandpaSimpCalc() {
  grandmaBakerSimpRaw = grandmaBakerAmount;
  grandpaBakerSimpMs = 0;
  
  while (grandmaBakerSimpRaw >= 25) {
    grandmaBakerSimpRaw = grandmaBakerSimpRaw - 25;
    grandpaBakerSimpMs = grandpaBakerSimpMs + 2;
  }
  grandmaTwisterSimpRaw = grandmaTwisterAmount;
  grandpaTwisterSimpMs = 0;
  
  while (grandmaTwisterSimpRaw >= 25) {
    grandmaTwisterSimpRaw = grandmaTwisterSimpRaw - 15;
    grandpaTwisterSimpMs = grandpaTwisterSimpMs + 5;
  }
  pretzelsPSCalc();
};
function updateVersion() {
  if (beta = false) {
    document.getElementById('version').innerHTML = 'Version: ' + displayGameVersion;
  }else if (beta = true) {
    document.getElementById('version').innerHTML = 'Version: ' + displayGameVersion + ' BETA';
  }
};
function pretzelClicked() {
  pretzelBank = pretzelBank + PPC;
  totalPretzelCount = totalPretzelCount + PPC;
  updatePretzels();

  var clickSound = '';
  const math = Math.floor((Math.random() * 7) + 1);
  if (math = 1) {
    clickSound = new Audio('sounds/clickb1.mp3')
  }else if (math = 2) {
    clickSound = new Audio('sounds/clickb2.mp3')
  }else if (math = 3) {
    clickSound = new Audio('sounds/clickb3.mp3')
  }else if (math = 4) {
    clickSound = new Audio('sounds/clickb4.mp3')
  }else if (math = 5) {
    clickSound = new Audio('sounds/clickb5.mp3')
  }else if (math = 6) {
    clickSound = new Audio('sounds/clickb6.mp3')
  }else if (math = 7) {
    clickSound = new Audio('sounds/clickb7.mp3')
  }
  clickSound.play();
};

/**\\\\\\\\\\\\\\\\\\\\\\\\\\\
 *     PretzelsPS SECTION
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\*/

function pretzelsPSCalc() {
  var clickerAddMath = 0;
  var slapperAddMath = 0;

  var grandmaBakerAddMath = 0;
  var grandmaTwisterAddMath = 0;

  var grandpaBakerAddMath = 0;
  var grandpaTwisterAddMath = 0;

  if (clickerAmount = 0) return;
  else if (clickerAmount >= 1) {
    clickerAddMath = clickerAmount * .1;
  }else {
    console.log('ERROR 003: CALCULATION ERROR - Clickers did not calculate properly!');
    alert('Please buy or sell a Clicker! An unknown error has occured. Please report in discord if this continues!');
  }
  if (slapperAmount = 0) return;
  else if (slapperAmount >= 1) {
    slapperAddMath = slapperAmount * .2;
  }else {
    console.log('ERROR 003: CALCULATION ERROR - Clicker Slappers did not calculate properly!');
    alert('Please upgrade a Clicker to a Slapper! An unknown error has occured. Please report in discord if this continues!');
  }

  if (grandmaBakerAmount = 0) return;
  else if (GrandmaBakerAmount >= 1) {
    grandmaBakerAddMath = grandmaBakerAmount;
  }else {
    console.log('ERROR 003: CALCULATION ERROR - Grandma Bakers did not calculate properly!');
    alert('Please buy or sell a Grandma Baker! An unknown error has occured. Please report in discord if this continues!');
  }
  if (grandmaTwisterAmount = 0) return;
  else if (grandmaTwisterAmount >= 1) {
    grandmaTwisterAddMath = grandmaTwisterAmount * 1.5;
  }else {
    console.log('ERROR 003: CALCULATION ERROR - Grandma Twisters did not calculate properly!');
    alert('Please upgrade a Grandma Baker to a Grandma Twister! An unknown error has occured. Please report in discord if this continues!');
  }

  if (grandpaBakerAmount = 0) return;
  else if (grandpaBakerAmount >= 1) {
    grandpaBakerPPG = 5 + grandpaBakerSimpMs;
    grandpaBakerAddMath = grandpaBakerAmount * grandpaBakerPPG;
  }else {
    console.log('ERROR 003: CALCULATION ERROR - Grandpa Bakers did not calculate properly!');
    alert('Please buy or sell a Grandpa Baker! An unknown error has occured. Please report in discord if this continues!');
  }
  if (grandpaTwisterAmount = 0) return;
  else if (grandpaTwisterAmount >= 1) {
    grandpaTwisterPPG = 6 + grandpaTwisterSimpMs;
    grandpaTwisterAddMath = grandpaTwisterAmount * grandpaTwisterPPG;
  }else {
    console.log('ERROR 003: CALCULATION ERROR - Grandpa Twisters did not calculate properly!');
    alert('Please upgrade a Grandpa Baker to a Grandpa Twister! An unknown error has occured. Please report in discord if this continues!');
  }

  PPS = clickerAddMath + slapperAddMath + grandmaBakerAddMath + grandmaTwisterAddMath + grandpaBakerAddMath + grandpaTwisterAddMath;
};
function addPPS() {
  if (PPS >= .1) {
    pretzelBank = pretzelBank + PPS;
    totalPretzelCount = totalPretzelCount + PPS;
    updatePretzels();
  }else {
    return;
  }
};

/**\\\\\\\\\\\\\\\\\\\\\\\\\\\
 *   Middle Content SECTION
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\*/

function clearMid() {
  document.getElementById("middleContent").innerHTML = " ";
};
function midSectionUpdates() {
  updateLog =
  '<span class="close"><button onclick="clearMid()">&times;</button></span>'+
  '<p class="warning">Please report any bugs in the <a href="https://discord.gg/RqSwaQTZn4" target="_blank">Discord.</a></p>'+
  '<br>'+
  '<p class="update-name">Stats O\' Ramma</p>'+
  '<p class="update-disc">5/18/2021 0.05 RELEASE</p>'+
  '<p class="update-bullet">Updated the style of the page to flow better on all divices.</p>'+
  '<p class="update-bullet">Changed how the Setting, Stats, and Updates buttons display things.</p>'+
  '<p class="update-bullet">Cleaned up a lot of the code. This should help reduce chance of bugs upon updates.</p>'+
  '<p class="update-bullet">Separated Live and Beta save storage. DO NOT reset browser data to keep your save.</p>'+
  '<p class="update-bullet">Added a backend beta version detection system. This should help reduce bugs upon pushing to a live version.</p>'+
  '<p class="update-bullet">Fixed Grandma Bakers saying "cookie" in their description... Yeah I did that...</p>'+
  '<p class="update-bullet">Fixed a bunch of other things.</p>'+
  '<p class="update-bullet">Moved all settings buttons into the settings menu.</p>'+
  '<p class="update-bullet">Added three not-so-new buildings. Currently disabled due to issues.</p>'+
  '<p class="update-bullet">Added a new currency. Currently disabled due to issues.</p>'+
  '<p class="update-bullet">Many shadow patches to style changes will be in order. Things don\'t look right enough yet.'+
  '<br>'+
  '<p class="update-name">Ole\' Gyzers\' Club</p>'+
  '<p class="update-disc">3/22/2021 0.04 BETA</p>'+
  '<p class="update-bullet">Separated the Beta and Live data storage in your LocalStorage. You should still import properly from the previous linked version.</p>'+
  '<p class="update-bullet">Added Grandpas to the game in full. This is a BETA so you might experience some bugs at first.</p>'+
  '<p class="update-bullet">Cleaned up some code.</p>'+
  '<p class="update-bullet">Worked on the other versions Tab.</p>'+
  '<p class="update-bullet">As of 4/16/2021 I have finally fixed the last bug with this update. It was a simple hard to notice typo...</p>'+
  '<br>'+
  '<p class="update-name">I said a Broom-Sweepa-Broom!</p>'+
  '<p class="update-disc">2/18/2021 0.03 BETA</p>'+
  '<p class="update-bullet">Lots of styling improvements. This is the final layout I will use.</p>'+
  '<p class="update-bullet">Fixed a bug where PPS(pretzels per second) would not re-calculate on time.</p>'+
  '<p class="update-bullet">Fixed my games page link.</p>'+
  '<p class="update-bullet">Fixed the Grandma Baker Description saying "cookie"... Yeah I did that.</p>'+
  '<p class="update-bullet">Moved the Save, Load, And reset buttons into the settings button.</p>'+
  '<p class="update-bullet">Added fancy beta verson detection to add a BETA tag next to the version number.</p>'+
  '<p class="update-bullet">Beta version detection also affects the Other Versions tab.</p>'+
  '<br>'+
  '<p class="update-name">Bug Fix V1</p>'+
  '<p class="update-bullet">Fixed pretzel click bug.</p>'+
  '<p class="update-bullet">Moved PPS(Pretzels Per Second) to a new calculation.</p>'+
  '<p class="update-bullet">Fixed pretzel bank storage.</p>'+
  '<p class="update-bullet">Fixed an issue with updating how many Grandmas you have in some cases.</p>'+
  '<p class="update-bullet">Fixed an issue with gramdma prices not updating in some cases.</p>'+
  '<p class="shadow-bullet">Many shadow patches fixing bugs created in this update and adding styling.</p>'+
  '<br>'+
  '<p class="update-name">New Waste of Time</p>'+
  '<p class="update-bullet">Released Game</p>'+
  '<p class="update-disc">Well, is this a waste of my time? I had a couple hours to spend.</p>';
  document.getElementById("middleContent").innerHTML = updateLog;
};
function midSectionSettings() {
  settings = 
    '<span class="close"><button onclick="clearMid()">&times;</button></span>'+
    '<div>'+
      '<button class="loader buttons" onclick="load()">Load</button>'+
      '<button class="loader buttons" onclick="save()">Save</button>'+
      '<button class="loader buttons" onclick="reset()">Reset</button>'+
    '</div>';
  document.getElementById("middleContent").innerHTML = settings;
};
function midSectionStats() {
  statsDisplay =
    '<span class="close"><button onclick="clearMid()">&times;</button></span>'+
    '<p>Stats display is currently disabled due to issues.! Dont worry! They are still being tracked!</p>';
  document.getElementById("middleContent").innerHTML = statsDisplay
};

/**\\\\\\\\\\\\\\\\\\\\\\\\\\\
 * Building Purchasing Things
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\*/

function buyClicker() {
  if (pretzelBank < clickerPrice) {
      return;
  }else if (pretzelBank >= clickerPrice) {
      pretzelBank = pretzelBank - clickerPrice;
      clickerAmount = clickerAmount + 1;
      clickerBuildAmount = clickerBuildAmount + 1;
      updateClickers();
      updatePretzels();
      pretzelsPSCalc();
  }else {
      alert('Huh. Unknown Error. Please report this with your browser console logs.', 'If you do not know how do do this, please do not close your game until you do.');
  }
};
function sellClicker() {
  if (clickerBuildAmount < 1) {
      return alert('Why are ya tryna sell nothing ya nerd?');
  }else if (clickerBuildAmount >= 1) {
      clickerSellPrice = clickerPrice / 5;
      clickerAmount = clickerAmount - 1;
      clickerBuildAmount = clickerBuildAmount - 1;
      pretzelBank = pretzelBank + clickerSellPrice;
      updateClickers();
      updatePretzels();
      pretzelsPSCalc();
  }else {
      alert('Huh. Unknown Error. Please report this with your browser console logs.', 'If you do not know how do do this, please do not close your game until you do.');
  }
};
function buyGrandma() {
  if (pretzelBank < grandmaBakerPrice) {
      return;
  }else if (pretzelBank >= grandmaBakerPrice) {
      pretzelBank = pretzelBank - grandmaBakerPrice
      grandmaBakerAmount = grandmaBakerAmount + 1;
      grandmaBuildAmount = grandmaBuildAmount + 1;
      updateGrandmas();
      updatePretzels();
      pretzelsPSCalc();
  }else {
      alert('Huh. Unknown Error. Please report this with your browser console logs.', 'If you do not know how do do this, please do not close your game until you do.');
  }
};
function sellGrandma() {
  if (grandmaBuildAmount < 1) {
      return alert('Why are ya tryna sell nothing ya nerd?');
  }else if (grandmaBbuildAmount >= 1) {
      grandmaSellPrice = grandmaBakerPrice / 5;
      grandmaBakerAmount = grandmaBakerAmount - 1;
      grandmaBuildAmount = grandmaBuildAmount - 1;
      pretzelBank = pretzelBank + grandmaSellPrice;
      updateGrandmas();
      updatePretzels();
      pretzelsPSCalc();
  }else {
      alert('Huh. Unknown Error. Please report this with your browser console logs.', 'If you do not know how do do this, please do not close your game until you do.');
  }
};
function buyGrandpa() {
  if (pretzelBank < grandpaBakerPrice) {
      return;
  }else if (pretzelBank >= grandpaBakerPrice) {
      pretzelBank = pretzelBank - grandpaBakerPrice;
      grandpaBakerAmount = grandpaBakerAmount + 1;
      grandpaBuildAmount = grandpaBuildAmount + 1;
      updateGrandpas();
      updatePretzels();
      pretzelsPSCalc();
  }else {
      return alert('Huh. Unknown Error. Please report this with your browser console logs.', 'If you do not know how do do this, please do not close your game until you do.')
  }
};
function sellGrandpa() {
if (grandpaBuildAmount < 1) {
  return alert('Why are tryna sell nothing ya nerd?!');
}else if (grandpaBuildAmount >= 1) {
  grandpaSellPrice = grandpaBakerPrice / 5;
  grandpaBakerAmount = grandpaBakerAmount - 1;
  grandpaBuildAmount = grandpaBuildAmount -1;
  pretzelBank = pretzelBank + grandpaSellPrice;
  updateGrandpas();
  updatePretzels();
  pretzelsPSCalc();
}
};

/**\\\\\\\\\\\\\\\\\\\\\\\\\\\
 *            Start
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\*/

function processStart() {
  load();
  setInterval(save, 60000);
  setInterval(update5sec, 5000);
  setInterval(addPPS, 1000)
};
window.onload = processStart();