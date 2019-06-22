//'use strict';

//Kilistázza a csapatok nevét:
function csapatokLekerese() {
    var csapatokListaja = [];

    for (var i = 0; i < data.length; i++) {
        if (csapatokListaja.indexOf(data[i].klub) == -1) { //ha a csapatokListaja nevű tömbünkben nincs még olyan nevű klub, mint az adatbázisban, akkor
            csapatokListaja.push(data[i].klub); //fűzze hozzá a csapatokListaja tömbünkhöz.
        }
    }
    return csapatokListaja;
}
console.log(csapatokLekerese());

//Posztok kilistázása:
function posztokListaja() {
    var posztok = [];

    for (var i = 0; i < data.length; i++) {
        if (posztok.indexOf(data[i].poszt) == -1) {
            posztok.push(data[i].poszt);
        }
    }
    return posztok;
}
console.log(posztokListaja());

//Kilistázza a csapatokat és azon belül a játékosokat és a játékosok minden adatát:
function PlayersByClub() {
    var result = [];
    var clubs = csapatokLekerese();
    var player;

    for (var i = 0; i < clubs.length; i++) {
        result.push({
            name: clubs[i],
            players: []
        });
    }
    for (var i = 0; i < data.length; i++) {

        for (var j = 0; j < data.length; j++) {
            if (result[j].name === data[i].klub) {
                result[j].players.push(data[i]);
                break;
            }
        }
    }
    return result;
}
console.log(PlayersByClub());


// Elkérjük a kiválasztott csapat nevét:
function selection() {
    var kivalasztottCsapatNeve = document.querySelector("#selectedTeam option:checked").innerText;

    //var x = document.getElementById("selectedTeam").selectedIndex;
    //var kivalasztottCsapatNeve = document.getElementsByTagName("option")[x].innerText;

    return kivalasztottCsapatNeve;
}


// Kilistázza a kiválasztott csapat játékosait és a játékosok minden adatát:
function kivalasztottCsapatJatekosai() {
    var jatekosok = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].klub.indexOf(selection()) != -1) {
            jatekosok.push(data[i]);
        }
    }
    return jatekosok;
}


//Megkeresi a kiválasztott csapat első kapusát:
function elsoKapus() {
    var elsoKapus = [];

    for (var i = 0; i < kivalasztottCsapatJatekosai().length; i++) {
        if (kivalasztottCsapatJatekosai()[i].poszt == "kapus") {
            elsoKapus.push(kivalasztottCsapatJatekosai()[i]);
            break;
        }
    }
    return elsoKapus;
}

//Megkeresi a kiválasztott csapat első bal oldali védőjét:
function elsoBaloldaliVedo() {
    var elsoBaloldaliVedo = [];

    for (var i = 0; i < kivalasztottCsapatJatekosai().length; i++) {
        if (kivalasztottCsapatJatekosai()[i].poszt == "bal oldali védő") {
            elsoBaloldaliVedo.push(kivalasztottCsapatJatekosai()[i]);
            break;
        }
    }
    return elsoBaloldaliVedo;
}

//Megkeresi a kiválasztott csapat első középső védőjét:
function elsoKozepsoVedo() {
    var elsoKozepsoVedo = [];

    for (var i = 0; i < kivalasztottCsapatJatekosai().length; i++) {
        if (kivalasztottCsapatJatekosai()[i].poszt == "középső védő") {
            elsoKozepsoVedo.push(kivalasztottCsapatJatekosai()[i]);
            break;
        }
    }
    return elsoKozepsoVedo;
}

//Megkeresi a kiválasztott csapat első védekező középpályását:
function elsoVedekezoKozeppalyas() {
    var elsoVedekezoKozeppalyas = [];

    for (var i = 0; i < kivalasztottCsapatJatekosai().length; i++) {
        if (kivalasztottCsapatJatekosai()[i].poszt == "védekező középpályás") {
            elsoVedekezoKozeppalyas.push(kivalasztottCsapatJatekosai()[i]);
            break;
        }
    }
    return elsoVedekezoKozeppalyas;
}

//Megkeresi a kiválasztott csapat első jobboldali védőjét:
function elsoJobboldaliVedo() {
    var elsoJobboldaliVedo = [];

    for (var i = 0; i < kivalasztottCsapatJatekosai().length; i++) {
        if (kivalasztottCsapatJatekosai()[i].poszt == "jobb oldali védő") {
            elsoJobboldaliVedo.push(kivalasztottCsapatJatekosai()[i]);
            break;
        }
    }
    return elsoJobboldaliVedo;
}

//Megkeresi a kiválasztott csapat első belső középpályását:
function elsoBelsoKozeppalyas() {
    var elsoBelsoKozeppalyas = [];

    for (var i = 0; i < kivalasztottCsapatJatekosai().length; i++) {
        if (kivalasztottCsapatJatekosai()[i].poszt == "belső középpályás") {
            elsoBelsoKozeppalyas.push(kivalasztottCsapatJatekosai()[i]);
            break;
        }
    }
    return elsoBelsoKozeppalyas;
}

//Megkeresi a kiválasztott csapat jobb oldali középpályását:
function elsoJobbOldaliKozeppalyas() {
    var elsoJobbOldaliKozeppalyas = [];

    for (var i = 0; i < kivalasztottCsapatJatekosai().length; i++) {
        if (kivalasztottCsapatJatekosai()[i].poszt == "jobb oldali középpályás") {
            elsoJobbOldaliKozeppalyas.push(kivalasztottCsapatJatekosai()[i]);
            break;
        }
    }
    return elsoJobbOldaliKozeppalyas;
}

//Megkeresi a kiválasztott csapat jobb oldali középpályását:
function elsoTamadoKozeppalyas() {
    var elsoTamadoKozeppalyas = [];

    for (var i = 0; i < kivalasztottCsapatJatekosai().length; i++) {
        if (kivalasztottCsapatJatekosai()[i].poszt == "támadó középpályás") {
            elsoTamadoKozeppalyas.push(kivalasztottCsapatJatekosai()[i]);
            break;
        }
    }
    return elsoTamadoKozeppalyas;
}

//Kiírja a játékosokat onchange hatására
function irdKiKekBuborekba() {
    document.querySelector("#kapus").innerHTML = "";
    document.querySelector("#baloldalivedo").innerHTML = "";
    document.querySelector("#kozepsovedo").innerHTML = "";
    document.querySelector("#vedekezokozeppalyas").innerHTML = "";
    document.querySelector("#jobboldalivedo").innerHTML = "";
    document.querySelector("#belsokozeppalyas").innerHTML = "";
    document.querySelector("#jobboldalikozeppalyas").innerHTML = "";
    document.querySelector("#tamadokozeppalyas").innerHTML = "";

    document.querySelector("#kapus").innerHTML = elsoKapus()[0].vezeteknev;
    document.querySelector("#baloldalivedo").innerHTML = elsoBaloldaliVedo()[0].vezeteknev;
    document.querySelector("#kozepsovedo").innerHTML = elsoKozepsoVedo()[0].vezeteknev;
    document.querySelector("#vedekezokozeppalyas").innerHTML = elsoVedekezoKozeppalyas()[0].vezeteknev;
    document.querySelector("#jobboldalivedo").innerHTML = elsoJobboldaliVedo()[0].vezeteknev;
    document.querySelector("#belsokozeppalyas").innerHTML = elsoBelsoKozeppalyas()[0].vezeteknev;
    document.querySelector("#tamadokozeppalyas").innerHTML = elsoTamadoKozeppalyas()[0].vezeteknev;
}




















//Lekérdezzük egy tetszőleges csapat kapusát:
// function elsoKapusXCsapatbol(xCsapat) {
//     var firstKapus = [];

//     for (var i = 0; i < data.length; i++) {
//         if (data[i].klub.indexOf(xCsapat) != -1) {
//             for(j=0; j<)

//             firstKapus = data[i].klub.poszt;
//             break;
//         }
//     }
//     return firstKapus;
// }
// console.log(elsoKapusXCsapatbol('Debrecen'));



// function csapatokMegjelenitese() {
//     var s = "";

//     for (var i = 0; i < csapatokLekerese.length; i++) {
//         s += "<option>" + csapatokLekerese[i] + "</option>";
//     }
//     return s;
// }

//document.querySelector("#csapat_1").innerHTML = csapatokMegjelenitese(csapatokLekerese());