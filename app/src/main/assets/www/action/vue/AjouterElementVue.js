var AjouterElementVue = function()
{
    var instance = this;
    this.element = null;
    this.afficher = function()
    {
        this.element = null;

        $("#contenu").html(AjouterElementVue.pageAjouterElement);

        $("#formulaire-ajouter").on("submit", function (evenement)
        {
            evenement.preventDefault();
            var titre = $("#titre").val();
            console.log("NOM : "+titre);
            var synopsis = $("#synopsis").val();
            console.log("SYNOPSIS : "+synopsis);
            var email = $("#email").val();
            console.log("EMAIL : "+email);
            var date = $("#date").val();
            console.log("DATE : "+date);
            var url = $("#url").val();
            console.log("URL : "+url);
            if (document.getElementById('c1').checked) {
              var categorie = document.getElementById('c1').value;
            }else if (document.getElementById('c2').checked){
                var categorie = document.getElementById('c2').value;
            }

            console.log("CATEGORIE : "+categorie);
            var genre = $("#genre").val();
            console.log("GENRE : "+genre);

            instance.element = new Element(0,titre, synopsis, "2:04", date, categorie, genre, url, email);
//            instance.element = new Element(0,"test", "test", "2:99", "12/12", "serie", "comedie");
            window.location.hash = "#AjouterElementVue:NouveauElement";
        });
    }
}
AjouterElementVue.pageAjouterElement = $("#page-ajouter-element").html();
