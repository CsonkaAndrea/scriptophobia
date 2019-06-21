'use strict';

// Kilistázza a csapatok nevét:
function csapatokLekerese() {
    var csapatokListaja = [];

    for (var i = 0; i < data.length; i++) {
        if (csapatokListaja.indexOf(data[i].klub) == -1) { //ha a csapatokListaja nevű tömbünkben nincs még olyan nevű klub, mint az adatbázisban, akkor
            csapatokListaja.push(data[i].klub); //fűzze hozzá a csapatokListaja tömbünkhöz.
        }
    }
    return csapatokListaja;
}
//console.log(csapatokLekerese());

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
function selected() {
    var kivalasztottCsapatNeve = document.querySelector('#dropdownlist option:checked').innerText;
    return kivalasztottCsapatNeve;
}


//Kilistázza a kiválasztott csapat játékosait és a játékosok minden adatát:
function kivalasztottCsapatJatekosai() {
    var jatekosok = [];
    
    for (var i = 0; i < data.length; i++) {
        if (data[i].klub.indexOf(selected()) != -1) {
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


document.querySelector("#kapus").innerHTML = elsoKapus()[0].vezeteknev;
document.querySelector("#baloldalivedo").innerHTML = elsoBaloldaliVedo()[0].vezeteknev;

















//Kilistázza egy adott csapat játékosait és a játékosok minden adatát:
// function adottCsapatJatekosai(csapatNeve) {
//     var jatekosok = [];

//     for (var i = 0; i < data.length; i++) {
//         if (data[i].klub.indexOf(csapatNeve) != -1) {
//             jatekosok.push(data[i]);
//         }
//     }
//     return jatekosok;
// }
// //console.log(adottCsapatJatekosai('Debrecen'));

//Lekérdezzük a kiválasztott csapat kapusát:
// function kapusKivalasztottCsapatbol() {
    //     var kapus;
    
    //     for (var i = 0; i < data.length; i++) {
        //         if (data[i].klub.indexOf(selected()) != -1) {
            //             kapus = data[i].klub.vezeteknev;
            //         }
            //     }
            //     return kapus;
            // }
            // console.log(kapusKivalasztottCsapatbol());
            
            
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