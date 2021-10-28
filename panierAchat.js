// cache de la div "alerte" en cas de quantité négative
$(".alert").css("display", "none");

//déclaration des tableaux regroupant les inputs 
var tabQte = $("input[type=number]");
var tabPrix = $("input[name=prix]");
var tabTotal = $("input[name=total]");
var erreurs = $(".erreur");

//calcul des totaux en fonction des quantités rentrées, si une qte est negative elle affiche un message
for (let i = 0; i < tabQte.length; i++) {
    $(tabQte.eq(i)).change(function () {
        var qte = $(this).val();
        if (qte>=0) {
            erreurs.eq(i).css("display", "none");
            tabTotal.eq(i).val(qte*(tabPrix.eq(i).val()));
            calcultotaux();
        }else{
            erreurs.eq(i).css("display", "block");
            erreurs.eq(i).html("Merci de saisir une quantité positive");
        }
    })
}

//fonction pour calculer le net à payer
function calcultotaux() {
    $("#totalTotaux").val((parseInt($("#totalMatch").val())+parseInt($("#totalTrain").val())+parseInt($("#totalAvion").val())+parseInt($("#totalMusee").val()))+" €");
}

// Ancienne version non factorisée:

// //fonction générique de calcul du total par article
// function calculTotalUnitaire(nbre1, nbre2, element) {
//     $(element).val((nbre1*nbre2)+" €");
// }

// //remplissage du total de billet Match et mise à jour du net à payer
// $("#qteMatch").change(function () {
//     var qte = $(this).val();
//     var totalMatch = $("#totalMatch");
//     var prixMatch = $("#prixMatch").val();
//     if(qte>=0){
//         $("#alerteMatch").css("display", "none");
//         calculTotalUnitaire(qte, prixMatch, totalMatch );
//     }else{
//         $("#alerteMatch").css("display", "block");
//         $("#alerteMatch").html("Merci de saisir une quantité positive");
//     }
//     calcultotaux();
// })

// //remplissage du total de billet Train et mise à jour du net à payer
// $("#qteTrain").change(function () {
//     var qte = $(this).val();
//     var totalTrain = $("#totalTrain");
//     var prixTrain = $("#prixTrain").val();
//     if(qte>=0){
//         $("#alerteTrain").css("display", "none");
//         calculTotalUnitaire(qte, prixTrain, totalTrain );
//     }else{
//         $("#alerteTrain").css("display", "block");
//         $("#alerteTrain").html("Merci de saisir une quantité positive")
//     }
//    calcultotaux();
// })

// //remplissage du total de billet Musee et mise à jour du net à payer
// $("#qteMusee").change(function () {
//     var qte = $(this).val();
//     var totalMusee = $("#totalMusee");
//     var prixMusee = $("#prixMusee").val();
//     if(qte>=0){
//         $("#alerteMusee").css("display", "none");
//         calculTotalUnitaire(qte, prixMusee, totalMusee );
//     }else{
//         $("#alerteMusee").css("display", "block");
//         $("#alerteMusee").html("Merci de saisir une quantité positive")
//     }
//    calcultotaux();
// })

// //remplissage du total de billet Avion et mise à jour du net à payer
// $("#qteAvion").change(function () {
//     var qte = $(this).val();
//     var totalAvion = $("#totalAvion");
//     var prixAvion = $("#prixAvion").val();
//     if(qte>=0){
//         $("#alerteAvion").css("display", "none");
//         calculTotalUnitaire(qte, prixAvion, totalAvion );
//     }else{
//         $("#alerteAvion").css("display", "block");
//         $("#alerteAvion").html("Merci de saisir une quantité positive")
//     }
//     calcultotaux();
// })

