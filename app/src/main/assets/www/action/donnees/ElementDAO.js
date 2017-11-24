var ElementDAO = function()
{
    listeElement = [{"id" :1, "Nom" : "Le destin des dangereux 8","Synopsis" : "Nam nunc ipsum, congue eu nulla non, scelerisque dapibus orci. Donec fringilla tempor erat, elementum sodales tellus sollicitudin nec. In felis elit, suscipit quis sodales non, porta suscipit ante. Nulla at finibus ex. Phasellus enim erat, vehicula id lacus sed, pellentesque accumsan tellus. Ut ante nisl, tempus in pellentesque quis, consectetur nec orci. Vivamus erat orci, luctus ac erat elementum, mattis blandit sapien. Nullam facilisis neque odio, vel iaculis dui efficitur et. Mauris eleifend, ex feugiat luctus cursus, urna odio tempor purus, eget gravida dolor enim ac est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer gravida luctus enim, at varius leo dapibus a.",
	 "time" : "2h08", "date" : "21/12/17"},
	 {"id" :2, "Nom" : "Le destTin des dangereux 8","Synopsis" : "Nam nunc ipsum, congue eu nulla non, scelerisque dapibus orci. Donec fringilla tempor erat, elementum sodales tellus sollicitudin nec. In felis elit, suscipit quis sodales non, porta suscipit ante. Nulla at finibus ex. Phasellus enim erat, vehicula id lacus sed, pellentesque accumsan tellus. Ut ante nisl, tempus in pellentesque quis, consectetur nec orci. Vivamus erat orci, luctus ac erat elementum, mattis blandit sapien. Nullam facilisis neque odio, vel iaculis dui efficitur et. Mauris eleifend, ex feugiat luctus cursus, urna odio tempor purus, eget gravida dolor enim ac est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer gravida luctus enim, at varius leo dapibus a.",
	 "time" : "2h08", "date" : "21/12/17"}]

    this.getListeElement = function()
    {
        return listeElement;
    }

    this.getElementParId = function (id)
    {
		for (var indiceElement in listeElement)
		{
		    element = listeElement[indiceElement];
		    if(element.id == id ) return element;
		}
    }

    trouverNouvelId = function ()
    {
        maximum = 0;
        for (var indiceElement in listeElement)
        {
            element = listeElement[indiceElement];
            if (element.id > maximum)
                maximum = element.id;
        }
        return maximum + 1;
    }

    this.ajouterElement = function (element)
    {
        element.id = trouverNouvelId();
        listeElement.push(element);
    }

    this.modifierElement = function(elementModifier)
    {
        for (var indiceElement in listeElement)
        {
            element = listeElement[indiceElement];
            if(element.id == elementModifier.id)
            {
                listeElement[indiceElement] = elementModifier;
                return;
            }
        }
    }


}