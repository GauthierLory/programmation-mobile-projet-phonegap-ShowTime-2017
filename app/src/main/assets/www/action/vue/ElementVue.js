var ElementVue = function (element)
{
	this.afficher = function ()
	{
		//var pageListeElement = $("#page-element").html();

		$("#contenu").html(ElementVue.pageElement);

		$("#element-nom").html(element.nom);
		$("#element-synopsis").html(element.synopsis);
		$("#element-photo").html(element.photo);
		$("#element-date").html(element.date);
		$("#element-categorie").html(element.categorie);
		$("#element-genre").html(element.genre);
		$("#element-email").html(element.email);
		$("#element-duree").html(element.duree+" minutes");
		$("#boutonSupprimer").html('<a id="bouton" class="btn btn-danger animated swing" href="#SupprimerElementVue:SupressionElement/'+element.id+'">Supprimer</a>');
		$("#boutonModifier").html('<a id="bouton" class="btn btn-warning animated rubberBand" href="#modifier-element/' +element.id + '">Modifier</a>');

	}
}
ElementVue.pageElement = $("#page-element").html();
