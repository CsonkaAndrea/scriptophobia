function milyenKlubok() {
    var klubok = [];

    for (var i = 0; i < data.length; i++) {
        if (klubok.indexOf(data[i].klub) == -1) {
            klubok.push(data[i].klub)
        }

    }
    klubok = klubok.sort();
    return klubok;
}

function drawUnorderedList(melyikHalmaz) {
    var s = "";

    for (var i = 0; i < melyikHalmaz.length; i++) {
        s += '<li class="csapatok">' + melyikHalmaz[i] + '</li>';
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
        if (data[i].magyar === true && data[i].kulfoldi === false) {
            hunPlayersCount += 1;
        }
    }
    return hunPlayersCount;
}
document.querySelector("#hunPlayers").innerHTML = hunPlayers();

function foreignPlayers() {
    var foreignPlayersCount = 0;

    for (var i = 0; i < data.length; i++) {
        if (data[i].magyar === false && data[i].kulfoldi === true) {
            foreignPlayersCount += 1;
        }
    }
    return foreignPlayersCount;
}
document.querySelector('#foreignPlayers').innerHTML = foreignPlayers();

function doublePlayers() {
    var doublePlayersCount = 0;

    for (var i = 0; i < data.length; i++) {
        if (data[i].magyar === true && data[i].kulfoldi === true) {
            doublePlayersCount += 1;
        }
    }
    return doublePlayersCount;
}
document.querySelector('#doublePlayers').innerHTML = doublePlayers();


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

function AvgAge() {
    var osszeg = 0;
    var darab = data.length;
    var atlag = 0;
    for (var i = 0; i < data.length; i++) {
        osszeg += calcAge(data[i].szulido);
    }
    atlag = osszeg / darab;
    return atlag;
}
document.querySelector('#avgAge').innerHTML = parseInt(AvgAge()) + ' év';

function legertekesebbJatekos() {
    var legdragabb = data[0].ertek;
    var dragaJatekos = [];

    for (var i = 0; i < data.length; i++) {
        if (legdragabb < data[i].ertek) {
            legdragabb = data[i].ertek;
        }
    }
    for (var i = 0; i < data.length; i++) {
        if (legdragabb === data[i].ertek) {
            dragaJatekos.push({
                lastName: data[i].vezeteknev,
                firstName: data[i].utonev,
                value: data[i].ertek
            });
        }
    }
    return dragaJatekos;
}

function mutasdALegdragabbat() {
    var dragaPlayers = legertekesebbJatekos();
    var s = '';

    for (var i = 0; i < dragaPlayers.length; i++) {
        s += dragaPlayers[i].lastName + ' ' + dragaPlayers[i].firstName + ', az értéke: ' + dragaPlayers[i].value + ' millió HUF.';
    }
    return s;
}
document.querySelector('#mostExpensive').innerHTML = mutasdALegdragabbat();

function cheapestPlayers() {
    var cheapest = data[0].ertek;
    var olcsoPlayers = [];

    for (var i = 0; i < data.length; i++) {
        if (cheapest > data[i].ertek) {
            cheapest = data[i].ertek;
        }
    }
    for (var i = 0; i < data.length; i++) {
        if (cheapest === data[i].ertek) {
            olcsoPlayers.push({
                lastName: data[i].vezeteknev,
                firstName: data[i].utonev,
                value: data[i].ertek
            });
        }
    }
    return olcsoPlayers;
}

function mutasdALegolcsobbat() {
    var olcsoPlayers = cheapestPlayers();
    var s = '';

    for (var i = 0; i < olcsoPlayers.length; i++) {
        s += olcsoPlayers[i].lastName + ' ' + olcsoPlayers[i].firstName + ', az értéke: ' + olcsoPlayers[i].value + ' millió HUF.';
    }
    return s;
}
document.querySelector('#cheapest').innerHTML = mutasdALegolcsobbat();

function minimumAge() {
    var min = calcAge(data[0].szulido);
    for (var i = 0; i < data.length; i++) {
        if (calcAge(data[i].szulido) < min) {
            min = calcAge(data[i].szulido);
        }
    }
    return min;
}

function maximumAge() {
    var max = calcAge(data[0].szulido);
    for (var i = 0; i < data.length; i++) {
        if (calcAge(data[i].szulido) > max) {
            max = calcAge(data[i].szulido);
        }
    }
    return max;
}

/*function maximumAge() {
    var max = calcAge(data[0].szulido);
    for (var i = 0; i < data.length; i++) {
        if (calcAge(data[i].szulido) > max) {
            max = calcAge(data[i].szulido);
        }
    }
    return max;
}
*/

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
    jatekosok.sort();
    return jatekosok;
}

function mutasdAzIdoset() {
    var idosek = oregEmber();
    s = '';
    document.querySelector('#legidosebbKor').innerHTML = 'A legidősebb életkor: ' + maximumAge();

    for (var i = 0; i < idosek.length; i++) {
        s += '<li>' + idosek[i].lastName + ' ' + idosek[i].firstName + '</li>';
    }
    document.querySelector('#legidosebb').innerHTML = s;
    return s;
}


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
    jatekosok.sort();
    return jatekosok;
}


function mutasdAFiatalt() {
    var fiatalok = fiatalEmber();
    s = '';
    document.querySelector('#legfiatalabbKor').innerHTML = 'A legfiatalabb életkor: ' + minimumAge();

    for (var i = 0; i < fiatalok.length; i++) {
        s += '<li>' + fiatalok[i].lastName + ' ' + fiatalok[i].firstName + '</li>';
    }
    document.querySelector('#legfiatalabb').innerHTML = s;
    return s;
}

function positions() {
    var posztok = [];
    for (var i = 0; i < data.length; i++) {
        if (posztok.indexOf(data[i].poszt) == -1) {
            posztok.push(data[i].poszt)
        }
    }
    return posztok;

}
//console.log(positions());

function posztokLista() {
    var posztok = positions();
    var s = '';

    for (var i = 0; i < posztok.length; i++) {
        s += '<option value="' + posztok[i] + '">' + posztok[i] + '</option>'
    }
    return s;
}
document.querySelector('#positions').innerHTML = posztokLista();

function posztonkentBontas() {
    var pozicio = document.querySelector('#positions').value
    var players = [];
    for (var i = 0; i < data.length; i++) {
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

    for (var i = 0; i < players.length; i++) {
        s += '<li>' + players[i] + '</li>'
    }
    document.querySelector('#valami').innerHTML = s;
    return s;
}

function ertekCsokkeno() {
    for (var i = 0; i < data.length - 1; i++) {
        for (var j = i + 1; j < data.length; j++) {
            if (data[i].ertek < data[j].ertek) {
                var tmp = [data[i], data[j]];
                data[i] = tmp[1];
                data[j] = tmp[0];
            }
        }
    }
    return data;
}

function mutasdATopJatekosokat() {
    var topPlayers = [];
    var mindenki = ertekCsokkeno();

    var hossz = ertekCsokkeno().length; // 312, az utolsó elem: 312-1
    var kert = document.querySelector('#topAnyPlayer').value; //mondjuk 4
    var kertSzam = hossz - kert; // 312 - 4 = 308

    for (var i = 0; i < data.length - kertSzam; i++) {
        topPlayers.push({
            lastName: data[i].vezeteknev,
            firstName: data[i].utonev,
            value: data[i].ertek,
            klub: data[i].klub
        });
    }
    /*console.log(hossz);
    console.log(kert);
    console.log(kertSzam);
    console.log(topPlayers);
    */
    return topPlayers;
}

function drawTopPlayers() {
    var topPlayers = mutasdATopJatekosokat();
    var s = '';

    for (var i = 0; i < topPlayers.length; i++) {
        s += '<li>' + topPlayers[i].lastName + ' ' + topPlayers[i].firstName + ', az értéke: ' + topPlayers[i].value + ' millió HUF.' + ' (' + topPlayers[i].klub + ')';
        '</li>'
    }
    document.querySelector('#topPlayers').innerHTML = s;

    return s;
}

/*fuction mutasdATopJatekosokat () {
    var mindenki = ertekCsokkeno();
    var topPlayers = [];

    for ( var i = 0; i < data)
}
*/