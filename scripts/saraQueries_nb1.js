function CalculateAge(szulido) {
    var age = -99;
    var dtToday = new Date();
    var dtBirthDate = new Date(szulido);
    age = dtToday.getFullYear() - dtBirthDate.getFullYear();
    return age;
}

/*function OrderBy() {
    for (var i = 0; i < PlayersByClubs.length - 1; i++) {
        for (var j = 0; j < PlayersByClubs[i].players.length-1; j++) {
            for (var k = 0; k < PlayersByClubs[i].players.length; k++) {
                if(PlayersByClubs[i].players[j].vezeteknev>PlayersByClubs[i].players[k].vezeteknev){
                    var temp=[PlayersByClubs[i].players[j].vezeteknev,PlayersByClubs[i].players[k].vezeteknev]
                    PlayersByClubs[i].players[j].vezeteknev=temp[1];
                    PlayersByClubs[i].players[k].vezeteknev=temp[0];
                }
            }
        }
    }
}*/

function PlayersByClubs() {
    var clubs = [];
    var player = 0;
    var playersByClubs = [];
    for (var i = 0; i < data.length; i++) {
        if (clubs.indexOf(data[i].klub) == -1) {
            clubs.push(data[i].klub);
        }
    }
    for (var i = 0; i < clubs.length; i++) {
        playersByClubs.push({
            name: clubs[i],
            players: []
        });
    }
    for (var i = 0; i < data.length; i++) {
        player = data[i];
        for (var j = 0; j < playersByClubs.length; j++) {
            if (playersByClubs[j].name === data[i].klub) {
                playersByClubs[j].players.push(player);
                break;
            }
        }
    }
    return playersByClubs;
}

function DrowGroupBy() {
    document.querySelector('#csoportositasKlubbonkent').innerHTML = '';
    for (var i = 0; i < PlayersByClubs().length; i++) {
        document.querySelector('#csoportositasKlubbonkent').innerHTML += "<li id='clubName'>" + 'Klub: ' + PlayersByClubs()[i].name + "</li>" + "<br>";
        for (var j = 0; j < PlayersByClubs()[i].players.length; j++) {

            document.querySelector('#csoportositasKlubbonkent').innerHTML += "<li>" + PlayersByClubs()[i].players[j].vezeteknev + ' ' + PlayersByClubs()[i].players[j].utonev + "</li>";
        }
        document.querySelector('#csoportositasKlubbonkent').innerHTML += "<br>";
    }
}



function PlayersWithName() {
    var result = [];
    var playerNameInput = document.querySelector('#playerName');
    var playerName = playerNameInput.value;

    for (var i = 0; i < data.length; i++) {
        if (data[i].vezeteknev == playerName) {
            result.push(data[i]);
        }
    }
    if (playerName == '') {
        alert('Adj meg egy nevet!');
    }
    return result;
}

function DrawSomething() {
    document.querySelector("#jatekosFelsorolas").innerHTML = '';
    for (var i = 0; i < PlayersWithName().length; i++) {
        document.querySelector("#jatekosFelsorolas").innerHTML += "<li>" + 'Neve: ' + PlayersWithName()[i].vezeteknev + ' ' + PlayersWithName()[i].utonev + ', születési ideje: ' + PlayersWithName()[i].szulido + ', csapata:  ' + PlayersWithName()[i].klub + ', posztja: ' + PlayersWithName()[i].poszt + "</li>";

    }
}


function YoungestPlayer() {
    var youngest = '';
    var min = CalculateAge(data[0].szulido);
    for (var i = 0; i < data.length; i++) {
        if (CalculateAge(data[i].szulido) < min) {
            min = CalculateAge(data[i].szulido);
            youngest = data[i].vezeteknev + ' ' + data[i].utonev + ', ' + min + ' éves';
        }
    }

    alert('A legfiatalabb játékos: ' + youngest);
}




function OldestPlayer() {
    var oldest = [];
    var max = CalculateAge(data[0].szulido);
    for (var i = 0; i < data.length; i++) {
        if (max < CalculateAge(data[i].szulido)) {
            max = CalculateAge(data[i].szulido);
            oldest = data[i].vezeteknev + ' ' + data[i].utonev + ', ' + max + ' éves';;
        }
    }
    alert('A legidősebb játékos: ' + oldest);
}

function AverageAge() {
    var avg = 0;
    var sum = 0;
    var count = 0;
    for (var i = 0; i < data.length; i++) {
        count++;
        sum += CalculateAge(data[i].szulido);


    }
    avg = (sum / count).toFixed(2);
    alert('Az átlag életkor: ' + avg + ' év');
}