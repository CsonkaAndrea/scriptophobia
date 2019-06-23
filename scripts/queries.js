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
    jatekosok.sort();
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
document.querySelector('#oldest').innerHTML = maximumAge();

function maximumAge() {
    var max = calcAge(data[0].szulido);
    for (var i = 0; i < data.length; i++) {
        if (calcAge(data[i].szulido) > max) {
            max = calcAge(data[i].szulido);
        }
    }
    return max;
}

function oregEmber() {
    var max = maximumAge();
    var jatekosok = [];

    for (var i = 0; i < data.length; i++) {
        if (calcAge(data[i].szulido) === max) {
            jatekosok.push({
                lastName: data[i].vezeteknev,
                firstName: data[i].utonev,
                age: maximumAge()
            });
        }
    }
    return jatekosok;
}

function mutasdAzIdoset() {
    var idosek = oregEmber();
    s = '';
    document.querySelector('#legidosebbKor').innerHTML = 'A legidősebb életkor: ' + maximumAge();

    for (i = 0; i < idosek.length; i++) {
        s += '<li>' + idosek[i].lastName + ' ' + idosek[i].firstName + '</li>';
    }
    document.querySelector('#legidosebb').innerHTML = s;
    return s;
}

/* function fiatalEmber() {
    var min = minimumAge();
    var jatekosok = [];

    for (var i = 0; i < data.length; i++) {
        if (calcAge(data[i].szulido) === min) {
            jatekosok.push(data[i].vezeteknev);
            jatekosok.push(data[i].utonev);
            jatekosok.push(minimumAge());
        }
    }
    return jatekosok;
}
console.log(fiatalEmber()); */

function fiatalEmber() {
    var min = minimumAge();
    var jatekosok = [];

    for (var i = 0; i < data.length; i++) {
        if (calcAge(data[i].szulido) === min) {
            jatekosok.push({
                lastName: data[i].vezeteknev,
                firstName: data[i].utonev,
                age: minimumAge()
            });
        }
    }
    return jatekosok;
}


function mutasdAFiatalt() {
    var fiatalok = fiatalEmber();
    s = '';
    document.querySelector('#legfiatalabbKor').innerHTML = 'A legfiatalabb életkor: ' + minimumAge();

    for (i = 0; i < fiatalok.length; i++) {
        s += '<li>' + fiatalok[i].lastName + ' ' + fiatalok[i].firstName + '</li>';
    }
    document.querySelector('#legfiatalabb').innerHTML = s;
    return s;
}

function positions() {
    var posztok = [];
    for (i = 0; i < data.length; i++) {
        if (posztok.indexOf(data[i].poszt) == -1) {
            posztok.push(data[i].poszt)
        }
    }
    return posztok;

}
console.log(positions());

function posztokLista() {
    var posztok = positions();
    var s = '';

    for (i = 0; i < posztok.length; i++) {
        s += '<option value="' + posztok[i] + '">' + posztok[i] + '</option>'
    }
    return s;
}
document.querySelector('#positions').innerHTML = posztokLista();

function posztonkentBontas() {
    var pozicio = document.querySelector('#positions').value
    var players = [];
    for (i = 0; i < data.length; i++) {
        if (data[i].poszt === pozicio) {
            players.push(data[i].klub + ' - ' + data[i].vezeteknev + ' ' + data[i].utonev)
        }
    }
    return players;
}

function listaPosztonkent() {
    var s = '';
    var players = posztonkentBontas().sort();
    document.querySelector('#valami').innerHTML = '';

    for (i = 0; i < players.length; i++) {
        s += '<li>' + players[i] + '</li>'
    }
    document.querySelector('#valami').innerHTML = s;
    return s;
}