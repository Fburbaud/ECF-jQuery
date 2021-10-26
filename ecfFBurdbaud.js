$(document).ready(function () {

    //efface les cases quand on est dessus:
    $(".salaire").focus(function () {
    $(this).val("");
    })

    //fonctions de base de calcule des salaires net et brut:
    function calculeSalaireNet(nbre1, nbre2) {
    return nbre1-(nbre1*nbre2)/100;
    }
    function calculeSalaireBrut(nbre1, nbre2) {
        return nbre1/(1-(nbre2/100));
    }

    //calculs automatiques à partir de la saisie du salaire annuel brut:
    $("#annuelBrut").keyup(function () {
        $("#annuelNet").val(calculeSalaireNet(parseInt($(this).val()),23));
        $("#mensuelNet").val((calculeSalaireNet(parseFloat($(this).val()), 23)/12).toFixed(2));
        $("#mensuelBrut").val((parseFloat($(this).val())/12).toFixed(2));
        $("#journalierNet").val((calculeSalaireNet(parseFloat($(this).val()), 23)/260).toFixed(2));
        $("#journalierBrut").val((parseFloat($(this).val())/260).toFixed(2));
        $("#horaireNet").val(((calculeSalaireNet(parseFloat($(this).val()),23)/12)/151.7).toFixed(2));
        $("#horaireBrut").val(((parseFloat($(this).val())/12)/151.7).toFixed(2));
    })
    
    //calculs automatiques à partir de la saisie du salaire annuel net:
    $("#annuelNet").keyup(function () {
        $("#annuelBrut").val(calculeSalaireBrut(parseInt($(this).val()),23));
        $("#mensuelNet").val(((parseFloat($(this).val()))/12).toFixed(2));
        $("#mensuelBrut").val((calculeSalaireBrut(parseFloat($(this).val()), 23)/12).toFixed(2));
        $("#journalierNet").val((parseFloat($(this).val())/260).toFixed(2));
        $("#journalierBrut").val((calculeSalaireBrut(parseFloat($(this).val()), 23)/260).toFixed(2));
        $("#horaireNet").val(((parseFloat($(this).val())/12)/151.7).toFixed(2));
        $("#horaireBrut").val(((calculeSalaireBrut(parseFloat($(this).val()),23)/12)/151.7).toFixed(2));
    })

    //calculs automatiques à partir de la saisie du salaire mensuel brut:
    $("#mensuelBrut").keyup(function () {
        $("#annuelNet").val(Math.round(calculeSalaireNet(parseInt($(this).val()),23)*12));
        $("#annuelBrut").val((parseInt($(this).val()))*12);
        $("#mensuelNet").val((calculeSalaireNet(parseFloat($(this).val()), 23)).toFixed(2));
        $("#journalierNet").val(((calculeSalaireNet(parseFloat($(this).val()),23)/151.7)*7).toFixed(2));
        $("#journalierBrut").val(((parseFloat($(this).val())/151.7)*7).toFixed(2));
        $("#horaireNet").val((calculeSalaireNet(parseFloat($(this).val()),23)/151.7).toFixed(2));
        $("#horaireBrut").val((parseFloat($(this).val())/151.7).toFixed(2));
    })

    //calculs automatiques à partir de la saisie du salaire mensuel net:
    $("#mensuelNet").keyup(function () {
        $("#annuelBrut").val(Math.round(calculeSalaireBrut(parseInt($(this).val()),23)*12));
        $("#annuelNet").val((parseInt($(this).val()))*12);
        $("#mensuelBrut").val((calculeSalaireBrut(parseFloat($(this).val()),23)).toFixed(2));
        $("#journalierBrut").val(((calculeSalaireBrut(parseFloat($(this).val()),23)/151.7)*7).toFixed(2));
        $("#journalierNet").val(((parseFloat($(this).val())/151.7)*7).toFixed(2));
        $("#horaireBrut").val((calculeSalaireBrut(parseFloat($(this).val()),23)/151.7).toFixed(2));
        $("#horaireNet").val((parseFloat($(this).val())/151.7).toFixed(2));
    })

    //calculs automatiques à partir de la saisie du salaire journalier brut:
    $("#journalierBrut").keyup(function () {
        $("#annuelNet").val(Math.round(calculeSalaireNet(parseInt($(this).val()),23)*260));
        $("#annuelBrut").val((parseInt($(this).val()))*260);
        $("#mensuelNet").val((calculeSalaireNet(parseFloat($(this).val()), 23)*21).toFixed(2));
        $("#mensuelBrut").val(((parseFloat($(this).val())*21)).toFixed(2));
        $("#journalierNet").val((calculeSalaireNet(parseFloat($(this).val()),23)).toFixed(2));
        $("#horaireNet").val((calculeSalaireNet(parseFloat($(this).val()),23)/7).toFixed(2));
        $("#horaireBrut").val((parseFloat($(this).val())/7).toFixed(2));
    })

    //calculs automatiques à partir de la saisie du salaire journalier net:
    $("#journalierNet").keyup(function () {
        $("#annuelBrut").val(Math.round(calculeSalaireBrut(parseInt($(this).val()),23)*260));
        $("#annuelNet").val((parseInt($(this).val()))*260);
        $("#mensuelBrut").val((calculeSalaireBrut(parseFloat($(this).val()),23)*21).toFixed(2));
        $("#mensuelNet").val(((parseFloat($(this).val()))*21).toFixed(2));
        $("#journalierBrut").val((calculeSalaireBrut(parseFloat($(this).val()),23)).toFixed(2));
        $("#horaireBrut").val(((calculeSalaireBrut(parseFloat($(this).val()),23))/7).toFixed(2));
        $("#horaireNet").val((parseFloat($(this).val())/7).toFixed(2));
    })

    //calculs automatiques à partir de la saisie du salaire horaire brut:
    $("#horaireBrut").keyup(function () {
        $("#annuelNet").val(Math.round(calculeSalaireNet(parseInt($(this).val()),23)*151.7*12));
        $("#annuelBrut").val(Math.round((parseInt($(this).val()))*151.7*12));
        $("#mensuelNet").val((calculeSalaireNet(parseFloat($(this).val()), 23)*151.7).toFixed(2));
        $("#mensuelBrut").val(((parseFloat($(this).val())*151.7)).toFixed(2));
        $("#journalierNet").val((calculeSalaireNet(parseFloat($(this).val()),23)*7).toFixed(2));
        $("#journalierBrut").val((parseFloat($(this).val())).toFixed(2)*7);
        $("#horaireNet").val((calculeSalaireNet(parseFloat($(this).val()),23)).toFixed(2));
    })

    //calculs automatiques à partir de la saisie du salaire horaire net:
    $("#horaireNet").keyup(function () {
        $("#annuelNet").val(Math.round((parseInt($(this).val()))*151.7*12));
        $("#annuelBrut").val(Math.round((calculeSalaireBrut(parseInt($(this).val()),23))*151.7*12));
        $("#mensuelNet").val(((parseFloat($(this).val()))*151.7).toFixed(2));
        $("#mensuelBrut").val((calculeSalaireBrut(parseFloat($(this).val()), 23)*151.7).toFixed(2));
        $("#journalierNet").val(((parseFloat($(this).val()))*7).toFixed(2));
        $("#journalierBrut").val((calculeSalaireBrut(parseFloat($(this).val()),23)*7).toFixed(2));
        $("#horaireBrut").val((calculeSalaireBrut(parseFloat($(this).val()),23)).toFixed(2));
    })

    $("#smic").click(function () {
        $("#annuelBrut").val(17496+" €");
        $("#mensuelBrut").val(1458+" €");

    })
    // $("input[type=checkbox]").change(function (e) {
    //     var checkCadre = $("input[type=checkbox][name=cadre]:checked").val();
    //     var checkFonctionnaire = $("input[type=checkbox][name=fonctionnaire]:checked").val();
    //     var checkPortage = $("input[type=checkbox][name=portage]:checked").val();
    //     var checkIndependant = $("input[type=checkbox][name=independantSociete]:checked").val();
    //     var checkAutoEntrepreneur = $("input[type=checkbox][name=autoentrepreneur]:checked").val();
        
    //     switch (e.target.name) {
    //         case checkCadre:
    //             taux = $("#taux").prop('value', 'Taux %: 25.5');
    //             break;
    //         case checkFonctionnaire:
    //             taux = $("#taux").prop('value', 'Taux %: 1');
    //             break;
    //         case checkPortage:
    //             taux = $("#taux").prop('value', 'Taux %: 50');
    //             break;
    //         case checkIndependant:
    //             taux = $("#taux").prop('value', 'Taux %: 45');
    //             break;
    //         case checkAutoEntrepreneur:
    //             taux = $("#taux").prop('value', 'Taux %: 25');
    //             break;
    //         default:
    //             taux = $("#taux").prop('value', 'Taux %: 3');
    //             break;
    //     }
    
    // })
})
