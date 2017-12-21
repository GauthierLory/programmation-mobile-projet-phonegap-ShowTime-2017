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
            var synopsis = $("#synopsis").val();
            var email = $("#email").val();
            var duree = $("#duree").val();
            var date = $("#date").val();
            var url = $("#url").val();
            if (document.getElementById('c1').checked) {
              var categorie = document.getElementById('c1').value;
            }else if (document.getElementById('c2').checked){
                var categorie = document.getElementById('c2').value;
            }
            var genre = $("#genre").val();

            instance.element = new Element(0,titre, synopsis, duree, date, categorie, genre, url, email);
//            instance.element = new Element(0,"test", "test", "2:99", "12/12", "serie", "comedie");
            window.location.hash = "#AjouterElementVue:NouveauElement";
        });
    }
}
AjouterElementVue.pageAjouterElement = $("#page-ajouter-element").html();
