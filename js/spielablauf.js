// Dieses Script dient für eine kleine Änderung in der HTML um eine Einheit "hochzustufen".
// Der Rahmen wird verändert, sobald genügend Sterne erworben wurden und auch Slots werden freigeschaltet.
// Das maximum ist 25
var lvl = 0;
        var endLvl = 3;
        function lvlUp() {
            lvl++;
            lvlZahl.innerHTML = `${lvl} / ${endLvl}`;
            if (lvl == 3 && endLvl == 3) {
                lvl = 0;
                endLvl = 10;
                lvlZahl.innerHTML = `${lvl} / ${endLvl}`;
                lvlBild.style.border = "4px solid green";
                skill1.innerHTML = '<img src="../bilder/big/f1.png">';
            }
            if (lvl == 10 && endLvl == 10) {
                lvl = 0;
                endLvl = 25;
                lvlZahl.innerHTML = `${lvl} / ${endLvl}`;
                lvlBild.style.border = "8px solid blue";
                skill2.innerHTML = '<img src="../bilder/big/f1.png">';
            }
            if (lvl >= 25) {
                lvl = 25;
                lvlZahl.innerHTML = `${lvl} / ${endLvl}`;
                lvlBild.style.border = "12px solid rebeccapurple";
                lvlButton.innerHTML = "MAXIMUM"
                skill3.innerHTML = '<img src="../bilder/big/f1.png">';
            }
        }
