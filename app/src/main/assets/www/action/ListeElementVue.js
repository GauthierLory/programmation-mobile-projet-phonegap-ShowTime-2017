var ListeElementVue = function()
{
	this.afficher = function()
	{
		var pageListeElement = $("#page-liste-element").html()

		$("body").html(pageListeElement);
		var htmlListeElement = $("#liste-element");

		var li = "";

		var elementDAO = new ElementDAO();

		var listeElement = elementDAO.getListeElement();

		for (var indiceElement in listeElement)
			{
			li += '<li><a href = "#element/'+ indiceElement +'">'+ listeElement[indiceElement].nom + '</a></li>';
			}

		htmlListeElement.html(li);
	}
}