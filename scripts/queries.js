function milyenKlubok() {
    var klubok = [];

    for (var i = 0; i < data.length; i++) {
        if (klubok.indexOf(data[i].klub) == -1) {
            klubok.push(data[i].klub)
        }

    }
    return klubok;
}

function drawUnorderedList(melyikHalmaz) {
    var s = "";

    for (var i = 0; i < melyikHalmaz.length; i++) {
        s += '<li>' + melyikHalmaz[i] + '</li>';
    }

    return s;
}
document.querySelector('#clubs').innerHTML = drawUnorderedList(milyenKlubok());

function klubokJatekosai(melyikKlub) {
    var jatekosok = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].klub === melyikKlub) {
            jatekosok.push(data[i].vezeteknev + ' ' + data[i].utonev)
        }
    }
    return jatekosok;
}

//kiírja console-ra a gomb value-ját
function tellTheClubValue() {
    var club = document.querySelector("#playersOfClubs").value;
    //console.log(club);
    document.querySelector('#playersList').innerHTML = '';
    for (var i = 0; i < klubokJatekosai(club).length; i++) {
        document.querySelector('#playersList').innerHTML += '<li>' + klubokJatekosai(club)[i] + '</li>';
    }
    return club;
}
//console.log(klubokJatekosai('Vasas FC'));

function hunPlayers() {
    var hunPlayersCount = 0;

    for (var i = 0; i < data.length; i++) {
        if (data[i].magyar === true) {
            hunPlayersCount += 1;
        }
    }
    return hunPlayersCount;
}
document.querySelector("#hunPlayers").innerHTML = hunPlayers();

function foreignPlayers() {
    var allPlayers = data.length;
    var foreignPlayersCount = data.length - hunPlayers();

    return foreignPlayersCount;
}
document.querySelector('#foreignPlayers').innerHTML = foreignPlayers();

/*function avgAgeOfPlayers () {
    var sumOfAge = 0;
    var allPlayers = data.length;

    for (var i = 0; i < data.length; i++) {
        sumOfAge += data.length[i].
    }
}*/

function calcAge(szulido) {
    var age = -99;
    var dtToday = new Date();
    var dtBirthDate = new Date(szulido);
    age = dtToday.getFullYear() - dtBirthDate.getFullYear();

    return age;
}

function minimumAge() {
    var min = calcAge(data[0].szulido);
    for (var i = 0; i < data.length; i++) {
        if (calcAge(data[i].szulido) < min) {
            min = calcAge(data[i].szulido);
        }
    }
    return min;
}
document.querySelector('#youngest').innerHTML = minimumAge();

function maximumAge() {
    var max = calcAge(data[0].szulido);
    for (var i = 0; i < data.length; i++) {
        if (calcAge(data[i].szulido) > max) {
            max = calcAge(data[i].szulido);
        }
    }
    return max;
}
console.log(maximumAge());