$(document).ready(function () {
    
    //initialisation des regex pour les contrôles des noms, prénoms, mails et telephones
    var regexName = /^([a-zA-Z\u00C0-\u017F\s\-])+$/;
    var regexMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    var regexTel = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    
    //initialisation des variables pour la récupération des données
    var firstname = $("#firstName");
    var lastname = $("#lastName");
    var email = $("#email");
    var tel = $("#telephone");

    //vérification de saisie
    firstname.keyup(function () {
        if(!regexName.test($(this).val())){
            $(this).focus();
            $("#erreurPrenom").css("display", "block");
            return false;
        }else {
            $("#erreurPrenom").css("display", "none");
        }
    })
    lastname.keyup(function () {
        if(!regexName.test($(this).val())){
            $(this).focus();
            $("#erreurNom").css("display", "block");
            return false;
        }else {
            $("#erreurNom").css("display", "none");
        }
    })
    email.keyup(function () {
        if (!regexMail.test($(this).val()) ){
            $(this).focus();
            $("#erreurMail").css("display", "block");
            return false;
        }else {
            $("#erreurMail").css("display", "none");
        }
    })
    tel.keyup(function() {
        if (!regexTel.test($(this).val())) {
            $(this).focus();
            $("#erreurTel").css("display", "block");
            return false;
        }else {
            $("#erreurTel").css("display", "none");
        }
    })
    
    //initialization du tableau à vide
    // var tableauEtudiants = [];

    //initialization du compteur de lignes de la liste d'étudiants
    var nbrLigne = 0;
    
    $("#btnajoutmodif").click(function (e) {
        //on empêche laa page de se rafraichir automatiquement
        e.preventDefault();
        nbrLigne++;
        // tableauEtudiants.push();
        // $("#listeEtudiants").html("");

        //à chaue click, on ajoute une ligne du tableau ainsi que les données rentrées dans le formulaire
        $("#listeEtudiants").append('<tr class=ligne>'+'<td>'+nbrLigne+'</td>'+'<td>'+lastname.val()+'</td>'+'<td>'+firstname.val()+'</td>'+'<td>'+email.val()+'</td>'+'<td>'+tel.val()+'</td>'+'<td>'+'<button type="button" class="btn btn-secondary btnedition">'+'<i class="bi bi-pencil-square">'+'</i>'+'</button>'+'</td>'+'<td>'+'<button type="button" class="btn btn-secondary btnsuppression" data-bs-toggle="modal" data-bs-target="#staticBackdrop">'+'<i class="bi bi-trash">'+'</i>'+'</button>'+'</td>'+'</tr>');
        
        // $(".btnsuppression").click(function (byebye) {
        //     console.log(byebye.target.index());
        //     $("#staticBackdropLive").css("display", "block");
        //     $(".fermetureModal").click(function () {
        //         $("#staticBackdropLive").css("display", "none");
        //     })
        //     $("#suppressionLigne").click(function () {
        //         $("#staticBackdropLive").css("display", "none");
        //         tableauEtudiants.splice(byebye.target.id,1);
        //         // $(".ligne").remove(byebye.target.id);
        //     })
        //     console.log(tableauEtudiants);
        // })
        $(".btnedition").click(function () {
        console.log("coucou");
        $("#btnajoutmodif").html("Modifier");
    
    
    
        })    
    })
    function productDelete(ctl) {
        $(ctl).parents("tr").remove();
    }
})