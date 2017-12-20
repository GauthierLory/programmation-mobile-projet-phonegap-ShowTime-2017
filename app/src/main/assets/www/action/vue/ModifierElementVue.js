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

        var elementPhoto = '<label for="photo">Photo</label><textarea name="photo" id="photo" valute ="'+ element.photo+'"/>';
        $("#photo").html(elementPhoto);

        var elementDate = '<label for="date">date</label><input type="date" name="date" id="date" value ="'+ element.date +'"/>';
        $("#date").html(elementDate);

        var elementCategorie = '<label for="categorie">categorie</label><input type="text" name="categorie" id="categorie" value ="'+ element.categorie +'"/>';
        $("#categorie").html(elementCategorie);

        var elementGenre = '<label for="genre">Genre</label><input type="text" name="genre" id="genre" value ="'+ element.genre +'"/>';
        $("#genre").html(elementGenre);

        var elementEmail = '<label for="email">Email</label><textarea name="Email" id="email" value ="'+ element.email +'"/>';
        $("#email").html(elementEmail);

        var elementNote = '<label for="note">Note</label><textarea name="note" id="note" value ="'+ element.note +'"/>';
        $("#note").html(elementNote);


             $("#formulaire-ajouter").on("submit", function (evenement)
        {
            evenement.preventDefault();
            var nom = $("#nom").val();
            var synopsis = $("#synopsis").val();
            var photo = $("#photo").val();
            var date = $("#date").val();
            var categorie = $("#categorie").val();
            var genre = $("#genre").val();
            var email = $("#email").val();
            var note = $("#note").val();

            instance.element = new element(nom, synopsis, photo, date, categorie, genre, emqil,note)
            window.location.hash = "#AjouterElementVue:NouveauElement";
        });
    }
}
ModifierElementVue.pageModifierElement = $("#page-modifier-element").html();
