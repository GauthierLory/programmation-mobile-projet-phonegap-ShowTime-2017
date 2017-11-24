var ElementVue = function (element)
{
	this.afficher = function ()
	{
		//var pageListeElement = $("#page-element").html();

		$("body").html(ElementVue.pageElement);

		$("#element-nom").html(element.nom);
		$("#element-synopsis").html(element.synopsis);
		$("#element-time").html(element.time);
		$("#element-date").html(element.date);
		$("#element-categorie").html(element.categorie);
		$("#element-genre").html(element.genre);

	}
}
ElementVue.pageElement = $("#page-element").html();
