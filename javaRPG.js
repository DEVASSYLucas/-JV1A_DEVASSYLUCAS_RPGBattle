var spartiateHTML = document.getElementById("spartiate attaque");
var vampireHTML = document.getElementById("vampire attaque");
var ninjaHTML = document.getElementById("ninja attaque");
var archerHTML = document.getElementById("archer attaque");
var spartiatePVHTML = document.getElementById("spartiate PV");
var vampirePVHTML = document.getElementById("vampire PV");
var ninjaPVHTML = document.getElementById("ninja PV");
var archerPVHTML = document.getElementById("archer PV");
var CommentaireHTML = document.getElementById("Text");
var MageHTML = document.getElementById("mage attaque");
var MagePVHTML = document.getElementById("mage PV");
var zombie1HTML = document.getElementById("zombie1 attaque");
var zombie1PVHTML =  document.getElementById("zombie1 PV");
var zombie2HTML = document.getElementById("zombie2 attaque");
var zombie2PVHTML =  document.getElementById("zombie2 PV");
var ActionsHTML = document.getElementsByClassName("actions")[0];
var AttaqueHTML = document.getElementById("Attaque")

var MagePV = 350
var zombie1PV = 150
var zombie2PV = 300
var spartiatePV = 120
var vampirePV = 80
var ninjaPV = 100
var archerPV = 100


spartiateHTML.onclick = function() {
    if(isPlay == false) {
        isPlay == true;
        if(spartiatePlay)
    
    CommentaireHTML.innerHTML = "Actions de spartiate";
    ActionsHTML.style.visibility = "visible";
    AttaqueHTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Quelle ennemi veut tu attaquer";
        MageHTML.onclick = function() {
            MagePV = MagePV - spartiateATK
            MagePVHTML.innerHTML = "<h2>" + MagePV + "/250 PV </h2>";
            CommentaireHTML.innerHTML =  + spartiateATK + " de dégâts  !<br> Sélectionnez un personnage";
            MageHTML.onclick = "none";
            zombie1HTML.onclick = "none";
            zombie2HTML.onclick = "none";
        }
           
        HTML.onclick = function() {
            zombie1PV = zombie1PV - spartiateATK
            zombie1PVHTML.innerHTML = "<h2>" + zombie1PV + "/150 PV </h2>";
            CommentaireHTML.innerHTML =  + spartiateATK + " de dégâts !<br> Sélectionnez un personnage";
            MageHTML.onclick = "none";
            zombie1HTML.onclick = "none";
            zombie2HTML.onclick = "none";
        }

        SpiderHTML.onclick = function() {
            zombie2PV = zombie2PV - spartiateATK
            zombie2PVHTML.innerHTML = "<h2>" + zombie2PV + "/50 PV </h2>";
            CommentaireHTML.innerHTML =  + spartiateATK + " de dégâts !<br> Sélectionnez un personnage";
            MageHTML.onclick = "none";
            zombie1HTML.onclick = "none";
            zombie2HTML.onclick = "none";
        }
        ActionsHTML.style.visibility = "hidden";
        spartiateHTML.onclick = "none";
        
    }
    

}


id="spartiate"= spartiateHTML;

