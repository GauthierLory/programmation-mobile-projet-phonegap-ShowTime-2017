var ListeElementVue = function(listeElement)
{
    this.afficher = function()
    {

        $("body").html(ListeElementVue.pageListeElement);

        var htmlListeElement = $("#liste-element");
        var li = "";
        for (var indiceElement in listeElement)
        {
            li += '<li><a href="#element/' +
                  listeElement[indiceElement].id +' ">' +
                  listeElement[indiceElement].nom + "     " +
                  '</a><a href="#modifier-element/' +
                  listeElement[indiceElement].id +
                  '">Modifier</a></li>';

        }
        htmlListeElement.html(li);
    }
}
ListeElementVue.pageListeElement = $("#page-liste-element").html();
