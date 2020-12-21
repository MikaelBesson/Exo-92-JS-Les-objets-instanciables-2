//# Exo-92-JS-Les-objets-instanciables-2
// 1. Reprenez votre objet **Personne** de l'exo précédent.
let Personne = function(nom, prenom, age, sexe, job, jobPlace, hobbies) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.sexe = sexe;
    this.job = job;
    this.jobPlace = jobPlace;
    this.hobbies = hobbies;
}

//2. Créez un tableau classique.
let tableau = [];

//3. Créez 5 nouvelles instances de l'objet **Personne** et placez les dans le tableau créé.
let mika = new Personne("besson","mikael","42","masculin","apprenant","UP TO","develloper du code");
tableau.push(mika);
let groot = new Personne("je s'apl groot","je s'apl groot","je s'apl groot","je s'apl groot","je s'apl groot","je s'apl groot","je s'apl groot",);
tableau.push(groot);
let mando = new Personne("lorian","Mando","inconnu","masculin","chasseur de prime","la galaxie","distribuer des mandales");
tableau.push(mando);
let norris = new Personne("norris","chuck","50","masculin","acteur","holywood","kung fu");
tableau.push(norris);
let yoda = new Personne("inconnu","yoda","900","masculin","maitre jedi","coruscant","parler en verlant");
tableau.push(yoda);

//4. A l'aide d'une boucle affichez dans un div que vous créerez en JavaScript pour chaque objet,
//    toutes les informations relatives à chaque objet, en passant par le tableau.

for(let i =0; i < tableau.length; i++){
    document.getElementById("mika").innerHTML = tableau[0].nom+" "+tableau[0].prenom+" "+
        tableau[0].age+" "+tableau[0].sexe+" "+tableau[0].job+" "+tableau[0].jobPlace+" "+
        tableau[0].hobbies;
    document.getElementById("groot").innerHTML = tableau[1].nom+" "+tableau[1].prenom+" "+
        tableau[1].age+" "+tableau[1].sexe+" "+tableau[1].job+" "+tableau[1].jobPlace+" "+
        tableau[1].hobbies;
    document.getElementById("mando").innerHTML = tableau[2].nom+" "+tableau[2].prenom+" "+
        tableau[2].age+" "+tableau[2].sexe+" "+tableau[2].job+" "+tableau[2].jobPlace+" "+
        tableau[2].hobbies;
    document.getElementById("norris").innerHTML = tableau[3].nom+" "+tableau[3].prenom+" "+
        tableau[3].age+" "+tableau[3].sexe+" "+tableau[3].job+" "+tableau[3].jobPlace+" "+
        tableau[3].hobbies;
    document.getElementById("yoda").innerHTML = tableau[4].nom+" "+tableau[4].prenom+" "+
        tableau[4].age+" "+tableau[4].sexe+" "+tableau[4].job+" "+tableau[4].jobPlace+" "+
        tableau[4].hobbies;
}

class personne {
    constructor(nom, prenom, age, sexe, job, jobPlace, hobbies) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.sexe = sexe;
        this.job = job;
        this.jobPlace = jobPlace;
        this.hobbies = hobbies;
    }
    presenter(){
         ("Je suis "+this.nom+" "+this.prenom+" mon age "+this.age+" mon sexe "+this.sexe+" mon metier "+this.job+
        " mon lieux de travail "+this.jobPlace+" mon passe temps "+this.hobbies);
    }
}



