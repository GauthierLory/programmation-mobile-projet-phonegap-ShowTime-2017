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
            var nom = $("#nom").val();
            console.log("NOM : "+nom);
            var synopsis = $("#synopsis").val();
            var time = $("#time").val();
            var date = $("#date").val();
            var categorie = $("#categorie").val();
            var genre = $("#genre").val();

//            instance.element = new Element(0,nom, synopsis, time, date, categorie, genre)
            instance.element = new Element(0,"test", "test", "2:99", "12/12", "serie", "comedie")
            window.location.hash = "#AjouterElementVue:NouveauElement";
        });
    }
}
AjouterElementVue.pageAjouterElement = $("#page-ajouter-element").html();