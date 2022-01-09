console.log("CONSOLE: script loaded");

$(".btnActiveEffect").click(function () {
    console.log("Send DATA");
    const showScore = $("#score");
    var score = 0

    var firstName = $('#firstName').val().toLowerCase();
    var lastName = $('#lastName').val().toLowerCase();
    var surnom = $('#surnom').val().toLowerCase();
    var instaUsername = $('#instaUsername').val().toLowerCase();
    var snapUsername = $('#snapUsername').val().toLowerCase();
    var sang = $('#sang').val().toLowerCase();
    var redou = $('#redou').val().toLowerCase();
    var bv = $('#bv').val().toLowerCase();
    var redou = $('#redou').val().toLowerCase();
    var mail = $('#mail').val().toLowerCase();
    var couleur = $('#couleur').val().toLowerCase();
    var potter = $('#potter').val().toLowerCase();
    var hobbit = $('#hobbit').val().toLowerCase();
    var serie = $('#serie').val().toLowerCase();
    var lgbt = $('#lgbt').val().toLowerCase();
    var restau = $('#restau').val().toLowerCase();
    var dent = $('#dent').val().toLowerCase();
    var num = $('#num').val().toLowerCase();
    var lgbt = $('#lgbt').val().toLowerCase();
    var sport = $('#sport').val().toLowerCase();
    var saison = $('#saison').val().toLowerCase();


    if (firstName == "aurelien" || firstName == "aurélien") {
        score = score + 1
    }
    if (lastName == "delmas") {
        score = score + 1
    }
    if (surnom == "aurel" || surnom == "auré" || surnom == "croc'aurel" || surnom == "doudou") {
        score = score + 1
    }
    if (instaUsername == "aureldel_") {
        score = score + 1
    }
    if (snapUsername == "auau_dede") {
        score = score + 1
    }
    if (sang == "1") {
        score = score + 1
    }
    if (redou == "1") {
        score = score + 1
    }
    if (bv == "1") {
        score = score + 1
    }
    if (mail == "delmas.aurelien27@gmail.com") {
        score = score + 1
    }
    if (couleur == "orange") {
        score = score + 1
    }
    if (potter == "1") {
        score = score + 1
    }
    if (hobbit == "1") {
        score = score + 1
    }
    if (serie == "altered carbon" || serie == "narcos" || serie == "black mirror") {
        score = score + 1
    }
    if (lgbt == "1") {
        score = score + 1
    }
    if (restau == "1") {
        score = score + 1
    }
    if (dent == "1") {
        score = score + 1
    }
    if ($('#flexRadioDefault3').is(':checked')) {
        score = score + 1
    }
    if (num == "0674848750") {
        score = score + 1
    }
    if (sport == "1") {
        score = score + 1
    }
    if (saison == "1") {
        score = score + 1
    }

    score = 21



    if ($('#scoreAd').length) {
        console.log("JQUERY:  SPAN exists")
        showScore.text("");
    }

    showScore.append("Ton score est de <span style='color: #0D6EFD; font-weight: bold;' id='scoreAd'>" + score + "</span>");
    if (score >= 20) {
        $("#scoreAd").after("<br>Félicitations tu peux récupérer ta <a href='./music.html' class='btn btn-outline-success'>Surprise</a>");
    } else {
        $("#scoreAd").after("<br>Ton score n'est pas suffisant pour obtenir ta surprise");
    }




    window.scrollTo(0, top);
});