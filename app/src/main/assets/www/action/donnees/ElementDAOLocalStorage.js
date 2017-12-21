var ElementDAOLocalStorage = function()
{
    listeElement = null;

      initialiser = function (){
	        if (!listeElement && localStorage['element'])
	        {
	            listeElement = new Array();
	            listeElement = JSON.parse(localStorage['element']);
	        }
	        if (!listeElement)
	        {
	            listeElement = new Array();
	        }
	    }

  	this.getListeElement = function(){
        return listeElement;
    }

    trouverNouvelId = function (){
        maximum = 0;
        for (var indiceElement in listeElement)
        {
            element = listeElement[indiceElement];
            if (element.id > maximum)
                maximum = element.id;
        }
        return maximum + 1;
    }

    this.ajouterElement = function (element){
        element.id = trouverNouvelId();
        listeElement.push(element);
        localStorage['element'] = JSON.stringify(listeElement);
    }

    this.getElementParId = function (id){
        for (var indiceElement in listeElement)
        {
            element = listeElement[indiceElement];
            if (element.id == id) return element;
        }
    }

    this.modifierElement = function(elementModifier){
        for (var indiceElement in listeElement){

            element = listeElement[indiceElement];
            if(element.id == elementModifier.id){

                listeElement[indiceElement] = elementModifier;
       			localStorage['element'] = JSON.stringify(listeElement);
                return;
            }
        }
    }

initialiser();
}