var ModifierElementVue = function(element)
{
    var instance = this;
    this.elementModifier = element;

    this.afficher = function()
    {
        console.log(element);
        $("#contenu").html(ModifierElementVue.pageModifierElement);

        var elementTitre = '<input id="titre" class="element-nom" type="text" value ="'+element.nom+'" name="input" required="required"/>';
        $("#modifTitre").html(elementTitre);

        var elementSynopsis = '<textarea id="synopsis" class="medium" name="textarea" cols="20" rows="5" required="required">'+ element.synopsis+'</textarea>';
        $("#modifSynopsis").html(elementSynopsis);

        var elementDuree = '<input id="duree" class="element-duree" type="number" name="input" required="required" value="'+element.duree+'"/>';
        $("#modifDuree").html(elementDuree);

        var elementUrl = '<input id="url" class="element-url" type="text" name="input" required="required" value="'+element.url+'" />';
        $("#modifUrl").html(elementUrl);

        var elementDate = '<input id="date" class="large" data-format="yyyy-mm-dd" type="date" name="date" required="required" value="'+element.date+'"/>';
        $("#modifDate").html(elementDate);

        if(element.categorie == "Film"){
            document.getElementById("c1").checked = true;
        }else{
            document.getElementById("c2").checked = true;
        }

        document.getElementById('genre').value=element.genre;

        var elementEmail = '<input id="email" class="large" type="email" name="email" value="'+element.email+'"/>';
        $("#modifEmail").html(elementEmail);


        $("#formulaire-modifier").on("submit", function (evenement)
        {
            evenement.preventDefault();
            var titre = $("#titre").val();
            var synopsis = $("#synopsis").val();
            var email = $("#email").val();
            var date = $("#date").val();
            var duree = $("#duree").val();
            var url = $("#url").val();
            if (document.getElementById('c1').checked) {
              var categorie = document.getElementById('c1').value;
            }else if (document.getElementById('c2').checked){
                var categorie = document.getElementById('c2').value;
            }
            var genre = $("#genre").val();

            instance.elementModifier = new Element(element.id, titre, synopsis, duree, date, categorie, genre, url, email);
            window.location.hash = "#ModifierElementVue:ModifierElement";
        });
    }
}
ModifierElementVue.pageModifierElement = $("#page-modifier-element").html();
