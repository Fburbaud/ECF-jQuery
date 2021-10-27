$(document).ready(function () {
    
    //taux par défaut
    var taux = 23;

    var differenceMensuelNetBrut;
    
    //efface les cases quand on est dessus:
    $(".salaire").focus(function () {
    $(this).val("");
    })

    //fonctions de base de calcule des salaires net et brut:
    function calculeSalaireNet(nbre1, nbre2) {
    return nbre1-(nbre1*(nbre2/100));
    }
    function calculeSalaireBrut(nbre1, nbre2) {
        return nbre1/(1-(nbre2/100));
    }
    function choixTaux(cochage) {
        if(cochage.target.checked){
            //on repasse toutes les checkboxes unchecked
            $("input[type=checkbox]").prop("checked", false);
            //et dans le même temps ça recoche celle cochée de base pour n'avoir qu'une checkbox de cocher à
            //la fois.
            cochage.target.checked = true;
            taux = cochage.target.value;
            $("#taux").prop("value", "Taux %: "+taux);
            differenceMensuelNetBrut = (parseFloat($("#mensuelBrut").val())-parseFloat($("#mensuelNet").val())).toFixed(2); 
            $("#explications").html("Vous gagnez un salaire net mensuel de "+"<b>"+$("#mensuelNet").val()+"</b>"+" (ce qui représente un salaire brut mensuel de "+"<b>"+$("#mensuelBrut").val()+"</b>"+"). Si le taux de charges est de "+"<b>"+taux+"%"+"</b>"+", la différence entre le brut et le net sera de "+"<u>"+differenceMensuelNetBrut+"</u>"+" € chaque mois.")
        }else{
            taux = 23;
            $("#taux").prop("value", "Taux %: "+taux);
            differenceMensuelNetBrut = (parseFloat($("#mensuelBrut").val())-parseFloat($("#mensuelNet").val())).toFixed(2); 
            $("#explications").html("Vous gagnez un salaire net mensuel de "+"<b>"+$("#mensuelNet").val()+"</b>"+" (ce qui représente un salaire brut mensuel de "+"<b>"+$("#mensuelBrut").val()+"</b>"+"). Si le taux de charges est de "+"<b>"+taux+"%"+"</b>"+", la différence entre le brut et le net sera de "+"<u>"+differenceMensuelNetBrut+"</u>"+" € chaque mois.")
        }
    }

    //calculs automatiques à partir de la saisie du salaire annuel brut:
    $("#annuelBrut").keyup(function () {
        $("#annuelNet").val((Math.round(calculeSalaireNet(parseInt($(this).val()),taux)))+" €");
        $("#mensuelNet").val(((calculeSalaireNet(parseFloat($(this).val()), taux)/12).toFixed(2))+" €");
        $("#mensuelBrut").val(((parseFloat($(this).val())/12).toFixed(2))+" €");
        $("#journalierNet").val(((calculeSalaireNet(parseFloat($(this).val()), taux)/260).toFixed(2))+" €");
        $("#journalierBrut").val(((parseFloat($(this).val())/260).toFixed(2))+" €");
        $("#horaireNet").val((((calculeSalaireNet(parseFloat($(this).val()),taux)/12)/151.7).toFixed(2))+" €");
        $("#horaireBrut").val((((parseFloat($(this).val())/12)/151.7).toFixed(2))+" €");
        differenceMensuelNetBrut = (parseFloat($("#mensuelBrut").val())-parseFloat($("#mensuelNet").val())).toFixed(2); 
        $("#explications").html("Vous gagnez un salaire net mensuel de "+"<b>"+$("#mensuelNet").val()+"</b>"+" (ce qui représente un salaire brut mensuel de "+"<b>"+$("#mensuelBrut").val()+"</b>"+"). Si le taux de charges est de "+"<b>"+taux+"%"+"</b>"+", la différence entre le brut et le net sera de "+"<u>"+differenceMensuelNetBrut+"</u>"+" € chaque mois.")
    })
    
    //calculs automatiques à partir de la saisie du salaire annuel net:
    $("#annuelNet").keyup(function () {
        $("#annuelBrut").val((Math.round(calculeSalaireBrut(parseInt($(this).val()),taux)))+" €");
        $("#mensuelNet").val((((parseFloat($(this).val()))/12).toFixed(2))+" €");
        $("#mensuelBrut").val(((calculeSalaireBrut(parseFloat($(this).val()), taux)/12).toFixed(2))+" €");
        $("#journalierNet").val(((parseFloat($(this).val())/260).toFixed(2))+" €");
        $("#journalierBrut").val(((calculeSalaireBrut(parseFloat($(this).val()), taux)/260).toFixed(2))+" €");
        $("#horaireNet").val((((parseFloat($(this).val())/12)/151.7).toFixed(2))+" €");
        $("#horaireBrut").val((((calculeSalaireBrut(parseFloat($(this).val()),taux)/12)/151.7).toFixed(2))+" €");
        differenceMensuelNetBrut = (parseFloat($("#mensuelBrut").val())-parseFloat($("#mensuelNet").val())).toFixed(2); 
        $("#explications").html("Vous gagnez un salaire net mensuel de "+"<b>"+$("#mensuelNet").val()+"</b>"+" (ce qui représente un salaire brut mensuel de "+"<b>"+$("#mensuelBrut").val()+"</b>"+"). Si le taux de charges est de "+"<b>"+taux+"%"+"</b>"+", la différence entre le brut et le net sera de "+"<u>"+differenceMensuelNetBrut+"</u>"+" € chaque mois.")
    })

    //calculs automatiques à partir de la saisie du salaire mensuel brut:
    $("#mensuelBrut").keyup(function () {
        $("#annuelNet").val((Math.round(calculeSalaireNet(parseInt($(this).val()),taux)*12))+" €");
        $("#annuelBrut").val((Math.round((parseInt($(this).val()))*12))+" €");
        $("#mensuelNet").val(((calculeSalaireNet(parseFloat($(this).val()), taux)).toFixed(2))+" €");
        $("#journalierNet").val((((calculeSalaireNet(parseFloat($(this).val()),taux)/151.7)*7).toFixed(2))+" €");
        $("#journalierBrut").val((((parseFloat($(this).val())/151.7)*7).toFixed(2))+" €");
        $("#horaireNet").val(((calculeSalaireNet(parseFloat($(this).val()),taux)/151.7).toFixed(2))+" €");
        $("#horaireBrut").val(((parseFloat($(this).val())/151.7).toFixed(2))+" €");
        differenceMensuelNetBrut = (parseFloat($("#mensuelBrut").val())-parseFloat($("#mensuelNet").val())).toFixed(2); 
        $("#explications").html("Vous gagnez un salaire net mensuel de "+"<b>"+$("#mensuelNet").val()+"</b>"+" (ce qui représente un salaire brut mensuel de "+"<b>"+$("#mensuelBrut").val()+"</b>"+"). Si le taux de charges est de "+"<b>"+taux+"%"+"</b>"+", la différence entre le brut et le net sera de "+"<u>"+differenceMensuelNetBrut+"</u>"+" € chaque mois.")
    })

    //calculs automatiques à partir de la saisie du salaire mensuel net:
    $("#mensuelNet").keyup(function () {
        $("#annuelBrut").val((Math.round(calculeSalaireBrut(parseInt($(this).val()),taux)*12))+" €");
        $("#annuelNet").val((Math.round((parseInt($(this).val()))*12))+" €");
        $("#mensuelBrut").val(((calculeSalaireBrut(parseFloat($(this).val()),taux)).toFixed(2))+" €");
        $("#journalierBrut").val((((calculeSalaireBrut(parseFloat($(this).val()),taux)/151.7)*7).toFixed(2))+" €");
        $("#journalierNet").val((((parseFloat($(this).val())/151.7)*7).toFixed(2))+" €");
        $("#horaireBrut").val(((calculeSalaireBrut(parseFloat($(this).val()),taux)/151.7).toFixed(2))+" €");
        $("#horaireNet").val(((parseFloat($(this).val())/151.7).toFixed(2))+" €");
        differenceMensuelNetBrut = (parseFloat($("#mensuelBrut").val())-parseFloat($("#mensuelNet").val())).toFixed(2); 
        $("#explications").html("Vous gagnez un salaire net mensuel de "+"<b>"+$("#mensuelNet").val()+"</b>"+" (ce qui représente un salaire brut mensuel de "+"<b>"+$("#mensuelBrut").val()+"</b>"+"). Si le taux de charges est de "+"<b>"+taux+"%"+"</b>"+", la différence entre le brut et le net sera de "+"<u>"+differenceMensuelNetBrut+"</u>"+" € chaque mois.")
    })

    //calculs automatiques à partir de la saisie du salaire journalier brut:
    $("#journalierBrut").keyup(function () {
        $("#annuelNet").val((Math.round(calculeSalaireNet(parseInt($(this).val()),taux)*260))+" €");
        $("#annuelBrut").val((Math.round((parseInt($(this).val()))*260))+" €");
        $("#mensuelNet").val(((calculeSalaireNet(parseFloat($(this).val()), taux)*21).toFixed(2))+" €");
        $("#mensuelBrut").val((((parseFloat($(this).val())*21)).toFixed(2))+" €");
        $("#journalierNet").val(((calculeSalaireNet(parseFloat($(this).val()),taux)).toFixed(2))+" €");
        $("#horaireNet").val(((calculeSalaireNet(parseFloat($(this).val()),taux)/7).toFixed(2))+" €");
        $("#horaireBrut").val(((parseFloat($(this).val())/7).toFixed(2))+" €");
        differenceMensuelNetBrut = (parseFloat($("#mensuelBrut").val())-parseFloat($("#mensuelNet").val())).toFixed(2); 
        $("#explications").html("Vous gagnez un salaire net mensuel de "+"<b>"+$("#mensuelNet").val()+"</b>"+" (ce qui représente un salaire brut mensuel de "+"<b>"+$("#mensuelBrut").val()+"</b>"+"). Si le taux de charges est de "+"<b>"+taux+"%"+"</b>"+", la différence entre le brut et le net sera de "+"<u>"+differenceMensuelNetBrut+"</u>"+" € chaque mois.")
    })

    //calculs automatiques à partir de la saisie du salaire journalier net:
    $("#journalierNet").keyup(function () {
        $("#annuelBrut").val((Math.round(calculeSalaireBrut(parseInt($(this).val()),taux)*260))+" €");
        $("#annuelNet").val((Math.round((parseInt($(this).val()))*260))+" €");
        $("#mensuelBrut").val(((calculeSalaireBrut(parseFloat($(this).val()),taux)*21).toFixed(2))+" €");
        $("#mensuelNet").val((((parseFloat($(this).val()))*21).toFixed(2))+" €");
        $("#journalierBrut").val(((calculeSalaireBrut(parseFloat($(this).val()),taux)).toFixed(2))+" €");
        $("#horaireBrut").val((((calculeSalaireBrut(parseFloat($(this).val()),taux))/7).toFixed(2))+" €");
        $("#horaireNet").val(((parseFloat($(this).val())/7).toFixed(2))+" €");
        differenceMensuelNetBrut = (parseFloat($("#mensuelBrut").val())-parseFloat($("#mensuelNet").val())).toFixed(2); 
        $("#explications").html("Vous gagnez un salaire net mensuel de "+"<b>"+$("#mensuelNet").val()+"</b>"+" (ce qui représente un salaire brut mensuel de "+"<b>"+$("#mensuelBrut").val()+"</b>"+"). Si le taux de charges est de "+"<b>"+taux+"%"+"</b>"+", la différence entre le brut et le net sera de "+"<u>"+differenceMensuelNetBrut+"</u>"+" € chaque mois.")
    })

    //calculs automatiques à partir de la saisie du salaire horaire brut:
    $("#horaireBrut").keyup(function () {
        $("#annuelNet").val((Math.round(calculeSalaireNet(parseInt($(this).val()),taux)*151.7*12))+" €");
        $("#annuelBrut").val((Math.round((parseInt($(this).val()))*151.7*12))+" €");
        $("#mensuelNet").val(((calculeSalaireNet(parseFloat($(this).val()), taux)*151.7).toFixed(2))+" €");
        $("#mensuelBrut").val((((parseFloat($(this).val())*151.7)).toFixed(2))+" €");
        $("#journalierNet").val(((calculeSalaireNet(parseFloat($(this).val()),taux)*7).toFixed(2))+" €");
        $("#journalierBrut").val(((parseFloat($(this).val())).toFixed(2)*7)+" €");
        $("#horaireNet").val(((calculeSalaireNet(parseFloat($(this).val()),taux)).toFixed(2))+" €");
        differenceMensuelNetBrut = (parseFloat($("#mensuelBrut").val())-parseFloat($("#mensuelNet").val())).toFixed(2); 
        $("#explications").html("Vous gagnez un salaire net mensuel de "+"<b>"+$("#mensuelNet").val()+"</b>"+" (ce qui représente un salaire brut mensuel de "+"<b>"+$("#mensuelBrut").val()+"</b>"+"). Si le taux de charges est de "+"<b>"+taux+"%"+"</b>"+", la différence entre le brut et le net sera de "+"<u>"+differenceMensuelNetBrut+"</u>"+" € chaque mois.")
    })

    //calculs automatiques à partir de la saisie du salaire horaire net:
    $("#horaireNet").keyup(function () {
        $("#annuelNet").val((Math.round((parseInt($(this).val()))*151.7*12))+" €");
        $("#annuelBrut").val((Math.round((calculeSalaireBrut(parseInt($(this).val()),taux))*151.7*12))+" €");
        $("#mensuelNet").val((((parseFloat($(this).val()))*151.7).toFixed(2))+" €");
        $("#mensuelBrut").val(((calculeSalaireBrut(parseFloat($(this).val()), taux)*151.7).toFixed(2))+" €");
        $("#journalierNet").val((((parseFloat($(this).val()))*7).toFixed(2))+" €");
        $("#journalierBrut").val(((calculeSalaireBrut(parseFloat($(this).val()),taux)*7).toFixed(2))+" €");
        $("#horaireBrut").val(((calculeSalaireBrut(parseFloat($(this).val()),taux)).toFixed(2))+" €");
        differenceMensuelNetBrut = (parseFloat($("#mensuelBrut").val())-parseFloat($("#mensuelNet").val())).toFixed(2); 
        $("#explications").html("Vous gagnez un salaire net mensuel de "+"<b>"+$("#mensuelNet").val()+"</b>"+" (ce qui représente un salaire brut mensuel de "+"<b>"+$("#mensuelBrut").val()+"</b>"+"). Si le taux de charges est de "+"<b>"+taux+"%"+"</b>"+", la différence entre le brut et le net sera de "+"<u>"+differenceMensuelNetBrut+"</u>"+" € chaque mois.")
    })

    //calculs automatiques à partir du click "appliquer le smic":
    $("#smic").click(function () {
        var annuelBrutSmic = 17496;
        var mensuelBrutSmic = 1458;
        $("#annuelBrut").val(annuelBrutSmic+" €");
        $("#mensuelBrut").val(mensuelBrutSmic+" €");
        $("#annuelNet").val((Math.round(calculeSalaireNet(annuelBrutSmic, taux)))+" €"); 
        $("#mensuelNet").val(((calculeSalaireNet(mensuelBrutSmic, taux)).toFixed(2))+" €");
        $("#journalierBrut").val(((annuelBrutSmic/260).toFixed(2))+" €");
        $("#journalierNet").val((((calculeSalaireNet(annuelBrutSmic, taux))/260).toFixed(2))+" €");
        $("#horaireBrut").val(((mensuelBrutSmic/151.7).toFixed(2))+" €");
        $("#horaireNet").val((((calculeSalaireNet(mensuelBrutSmic, taux))/151.7).toFixed(2))+" €");
        differenceMensuelNetBrut = (parseFloat($("#mensuelBrut").val())-parseFloat($("#mensuelNet").val())).toFixed(2); 
        $("#explications").html("Vous gagnez un salaire net mensuel de "+"<b>"+$("#mensuelNet").val()+"</b>"+" (ce qui représente un salaire brut mensuel de "+"<b>"+$("#mensuelBrut").val()+"</b>"+"). Si le taux de charges est de "+"<b>"+taux+"%"+"</b>"+", la différence entre le brut et le net sera de "+"<u>"+differenceMensuelNetBrut+"</u>"+" € chaque mois.")
    })

    //creation fonction qui au changement (cochage) d'état des checkboxes, prend la valeur de la value
    //de la checkbox pour l'appliquer à la variable taux.
    $("input[type=checkbox]").change(function (cochage) {
        if(cochage.target.checked){
            //on repasse toutes les checkboxes unchecked
            $("input[type=checkbox]").prop("checked", false);
            //et dans le même temps ça recoche celle cochée de base pour n'avoir qu'une checkbox de cocher à
            //la fois.
            cochage.target.checked = true;
            taux = cochage.target.value;
            $("#taux").prop("value", "Taux %: "+taux);
            differenceMensuelNetBrut = (parseFloat($("#mensuelBrut").val())-parseFloat($("#mensuelNet").val())).toFixed(2); 
            $("#explications").html("Vous gagnez un salaire net mensuel de "+"<b>"+$("#mensuelNet").val()+"</b>"+" (ce qui représente un salaire brut mensuel de "+"<b>"+$("#mensuelBrut").val()+"</b>"+"). Si le taux de charges est de "+"<b>"+taux+"%"+"</b>"+", la différence entre le brut et le net sera de "+"<u>"+differenceMensuelNetBrut+"</u>"+" € chaque mois.")
        }else{
            taux = 23;
            $("#taux").prop("value", "Taux %: "+taux);
            differenceMensuelNetBrut = (parseFloat($("#mensuelBrut").val())-parseFloat($("#mensuelNet").val())).toFixed(2); 
            $("#explications").html("Vous gagnez un salaire net mensuel de "+"<b>"+$("#mensuelNet").val()+"</b>"+" (ce qui représente un salaire brut mensuel de "+"<b>"+$("#mensuelBrut").val()+"</b>"+"). Si le taux de charges est de "+"<b>"+taux+"%"+"</b>"+", la différence entre le brut et le net sera de "+"<u>"+differenceMensuelNetBrut+"</u>"+" € chaque mois.")
        }
    })
})
