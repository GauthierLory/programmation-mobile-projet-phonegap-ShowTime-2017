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
		$("#element-note").html(element.note);

	}
}
ElementVue.pageElement = $("#page-element").html();
