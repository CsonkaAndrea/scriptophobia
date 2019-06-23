










function findJatekosByName() {
    var results = [];
    var resultsInput = document.getElementById('txtSearch'); // inputbox
    var playerName = resultsInput.value; // beírt érték, amit keresek

    for (var i = 0; i < data.length; i++) {
        if (data[i].utonev == playerName) {
            results.push(data[i])
        }
        // console.log('Név: ' + results[0].vezeteknev+ ' ' + results[0].utonev);
    }
    return results;
}

function drawSomething() {
    document.querySelector("#jatekosFelsorolas").innerHTML = ''; // mindig üres lesz

    for (var i = 0; i < findJatekosByName().length; i++) {
        document.querySelector("#jatekosFelsorolas").innerHTML += "<li>" + findJatekosByName()[i].vezeteknev + ' ' + findJatekosByName()[i].utonev + ' ' + findJatekosByName()[i].szulido + "</li>";
    }
}

//
function findJatekosByVezName() {
    var results = [];
    var resultsInput = document.getElementById('vezNevSearch'); // inputbox
    var playerName = resultsInput.value; // beírt érték, amit keresek

    for (var i = 0; i < data.length; i++) {
        if (data[i].vezeteknev == playerName) {
            results.push(data[i])
        }
        // console.log('Név: ' + results[0].vezeteknev+ ' ' + results[0].utonev);
    }
    return results;
}

function drawSomethingVezName() {
    document.querySelector("#vezNevJatekosFelsorolas").innerHTML = ''; // mindig üres lesz

    for (var i = 0; i < findJatekosByVezName().length; i++) {
        document.querySelector("#vezNevJatekosFelsorolas").innerHTML += "<li>" + findJatekosByVezName()[i].vezeteknev + ' ' + findJatekosByVezName()[i].utonev + ' ' + findJatekosByVezName()[i].szulido + "</li>";
    }
}