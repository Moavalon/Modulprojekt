function toggle(selected) {

    for (let i = 1; i <= 4; i++) {
        if (i == selected){
            switch (selected) {
                case 1:
                    logo1.style.border = "5px solid blue";
                    titleIcon.innerHTML = "Einsetzen";
                    titleText.innerHTML = "Gold abbauen und Einheiten spielen";
                    descriptionText.innerHTML = "Im Laufe des Spiels erhältst du passives Gold, das du zum Platzieren deiner Einheiten benötigst. Allerdings könnte am Ende über Sieg oder Niederlage entscheiden, welcher Spieler schneller Schatztruhen erobert oder zusätzliches Gold durch Abbau erwirtschaftet."
                    break;
                case 2:
                    logo2.style.border = "5px solid blue";
                    titleIcon.innerHTML = "Erobern";
                    titleText.innerHTML = "Beherrsche das Schlachtfeld";
                    descriptionText.innerHTML = "Erobert Ziele wie Wachtürme und Versammlungssteine, die ihr anschließend nutzen könnt, um Minis näher am nächsten Ziel einzusetzen. Kontrolle über die Karte ist der Schlüssel zum Sieg!";
                    break;
                case 3:
                    logo3.style.border = "5px solid blue";
                    titleIcon.innerHTML = "Überlegen";
                    titleText.innerHTML = "Strategien für jede Situation";
                    descriptionText.innerHTML = "Nutzt im Kampf verschiedenste Mini-Fähigkeiten zu Eurem Vorteil. Flugtruppen sind stark gegen Nahkampftruppen. Belagerungstruppen verursachen Bonusschaden gegen Wachtürme. Und immer so weiter. Meistert die Fähigkeiten Eurer Minis, um Erfolg zu haben, und erlernt Talente, um sie noch weiter zu verbessern!";
                    break;
                case 4:
                    logo4.style.border = "5px solid blue";
                    titleIcon.innerHTML = "Bezwingen";
                    titleText.innerHTML = "Besiege den gegnerischen Boss";
                    descriptionText.innerHTML = "Eure Minis marschieren auf gegnerische Anführer zu und versuchen, sie zu bezwingen. Unterstützt eure eingesetzten Truppen mit mächtigen Zaubern und führt sie zum Sieg.";
                    break;
                }
            } else {
                document.getElementById(`logo${i}`).style.border = "5px solid transparent";
            }
    }

    
}