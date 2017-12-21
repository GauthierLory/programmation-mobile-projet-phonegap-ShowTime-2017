var ListeElementVue = function(listeElement)
{
    this.afficher = function()
    {

        $("#contenu").html(ListeElementVue.pageListeElement);

        var htmlSlideIndice = $("#slide-indice");
        var slideIndice = "";
        for (var indiceElement in listeElement)
            {
                slideIndice += '<li data-target="#carouselExampleIndicators" data-slide-to="'+ listeElement[indiceElement].id +'"></li>';

            }
        htmlSlideIndice.html(slideIndice);

        var htmlSlideAffiche = $("#slide-affiches");
        var slideAffiche = "";
        var actif = 1;
        for (var indiceElement in listeElement)
            {
                if (actif == 1){
                    slideAffiche += '<div class="carousel-item active"><a href="#element/' +listeElement[indiceElement].id +'"><img class="rounded mx-auto d-block img-fluid" src="'+listeElement[indiceElement].url+'" alt="First slide"/></a><div class="carousel-caption d-none d-block"></div></div>';
                    var actif = 0;
                }else{
                    slideAffiche += '<div class="carousel-item"><a href="#element/' +listeElement[indiceElement].id +'"><img class="rounded mx-auto d-block img-fluid" src="'+listeElement[indiceElement].url+'" alt="First slide"/></a><div class="carousel-caption d-none d-block"></div></div>';

                }

            }
        htmlSlideAffiche.html(slideAffiche);

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
