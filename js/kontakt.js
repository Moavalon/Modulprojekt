function download() {
    var geschlecht = document.getElementById('Geschlecht').value;
    var vorname = document.getElementById('Vorname').value;
    var nachname = document.getElementById('Nachname').value;
    var email = document.getElementById('Email').value;
    var betreff = document.getElementById('Betreff').value;
    var mitteilung = document.getElementById('Mitteilung').value;
    var spamschutz = document.getElementById('Spamschutz').value;

    var content = "Geschlecht: " + geschlecht + "\nVorname: " + vorname + "\nNachname: " + nachname +
        "\nE-Mail: " + email + "\nBetreff: " + betreff + "\nMitteilung: " + mitteilung;

    if (spamschutz == "12") {
        var blob = new Blob([content], { type: 'text/plain' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'Kontaktformular.txt';
        a.textContent = 'Download Kontaktformular';
        document.getElementById('downloadLink').appendChild(a);
    } else {
        alert("Spamschutz: Falsche Antwort!");
    }

    var a = document.createElement('a');

}