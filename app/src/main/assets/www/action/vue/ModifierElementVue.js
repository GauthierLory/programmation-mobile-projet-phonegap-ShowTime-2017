var ModifierElementVue = function(element)
{
    var instance = this;
    this.elementModifier = element;

    this.afficher = function()
    {
        $("#contenu").html(ModifierElementVue.pageModifierElement);

        var elementNom = '<label for="nom">Nom</label><input type="text" name="nom" id="nom" value ="'+ element.nom +'"/>';
        $("#nom").html(elementNom);

        var elementSynopsis = '<label for="synopsis">synopsis</mark></label><input type="textarea" name="synopsis" id="synopsis" value ="'+  element.synopsis +'"/>';
        $("#synopsis").html(elementSynopsis);

        var elementTime = '<label for="time">Time</label><textarea name="time" id="time" value ="'+ element.time +'"/>';
        $("#time").html(elementTime);

        var elementDate = '<label for="date">date</label><input type="date" name="date" id="date" value ="'+ element.date +'"/>';
        $("#taille").html(elementDate);

        var elementCategorie = '<label for="categorie">categorie</label><input type="text" name="categorie" id="categorie" value ="'+ element.categorie +'"/>';
        $("#reference").html(elementCategorie);

        var elementGenre = '<label for="genre">Genre</label><input type="text" name="genre" id="genre" value ="'+ element.genre +'"/>';
        $("#prix").html(elementGenre);



             $("#formulaire-ajouter").on("submit", function (evenement)
        {
            evenement.preventDefault();
            var nom = $("#nom").val();
            var synopsis = $("#synopsis").val();
            var time = $("#time").val();
            var date = $("#date").val();
            var categorie = $("#categorie").val();
            var genre = $("#genre").val();

            instance.element = new element(nom, synopsis, time, date, categorie, genre)
            window.location.hash = "#AjouterElementVue:NouveauElement";
        });
    }
}
ModifierElementVue.pageModifierElement = $("#page-modifier-element").html();
