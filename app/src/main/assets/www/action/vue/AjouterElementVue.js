var AjouterElementVue = function()
{
    var instance = this;
    this.element = null;
    this.afficher = function()
    {
        this.element = null;

        $("body").html(AjouterElementVue.pageAjouterElement);

        $("#formulaire-ajouter").on("submit", function (evenement)
        {
            evenement.preventDefault();
            var nom = $("#nom").val();
            var synopsis = $("#synopsis").val();
            var time = $("#time").val();
            var date = $("#date").val();
            var categorie = $("#categorie").val();
            var genre = $("#genre").val();

            instance.element = new Element(nom, synopsis, time, date, categorie, genre)
            window.location.hash = "#AjouterElementVue:NouveauElement";
        });
    }
}
AjouterElementVue.pageAjouterElement = $("#page-ajouter-element").html();