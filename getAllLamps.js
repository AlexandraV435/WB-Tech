let lamps = [];

function createTemp(lamps, i) {
  return `
    <div class='big-lamp l ${lamps[i].isDarkMode ? 'hasDark' : 'hasntDark'}''
    id='${lamps[i].name}')' onmouseleave='nohov()' onmouseover='hov(${i}, "${lamps[i].name}")' onclick='inf(${lamps[i].height},
      ${lamps[i].width}, ${lamps[i].weight}, "${lamps[i].material}", "${lamps[i].electrification}",
      "${lamps[i].image}", "${lamps[i].name}", ${lamps[i].id})'><img class='lamp-img' id='${i}' src=${lamps[i].image}
       height='73px' width='23px''></div>
  `
}

async function allLamps() {
  let response = await fetch('https://private-anon-cf3faaf56c-lampshop.apiary-mock.com/lamps');
  let result = await response.json();
  result.forEach((item, i) => {
    lamps.push(item)
  });
  for (let i = 0; i < lamps.length; i++) {
    let lampList = document.querySelector('.LampList');
    lampList.innerHTML += createTemp(lamps, i)
  };
  inf(lamps[0].height, lamps[0].width, lamps[0].weight, lamps[0].material,
    lamps[0].electrification, lamps[0].image, lamps[0].name)
};
allLamps();
