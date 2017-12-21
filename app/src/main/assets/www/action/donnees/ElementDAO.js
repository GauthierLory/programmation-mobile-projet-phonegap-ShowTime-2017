var ElementDAO = function()
{

    var element1 = new Element(1,"Interstellar","Le film raconte les aventures d’un groupe d’explorateurs qui utilisent une faille récemment découverte dans l’espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire. ","2h08","21/12/17","Film","Action");
    var element2 = new Element(2,"Mission Impossible - Protocole Fantôme","Impliquée dans l'attentat terroriste du Kremlin, l'agence Mission Impossible (IMF) est totalement discréditée. Tandis que le président lance l'opération Protocole Fantôme, Ethan Hunt, privé de ressources et de renfort, doit trouver le moyen de blanchir l'agence et de déjouer toute nouvelle tentative d'attentat. Mais pour compliquer encore la situation, l'agent doit s'engager dans cette mission avec une équipe de fugitifs d'IMF dont il n'a pas bien cerné les motivations…","2h08","21/12/17","Serie","Horreur");
    var element3 = new Element(3,"Skyfall","Lorsque la dernière mission de Bond tourne mal, plusieurs agents infiltrés se retrouvent exposés dans le monde entier. Le MI6 est attaqué, et M est obligée de relocaliser l’Agence. Ces événements ébranlent son autorité, et elle est remise en cause par Mallory, le nouveau président de l’ISC, le comité chargé du renseignement et de la sécurité. Le MI6 est à présent sous le coup d’une double menace, intérieure et extérieure. Il ne reste à M qu’un seul allié de confiance vers qui se tourner : Bond. Plus que jamais, 007 va devoir agir dans l’ombre. Avec l’aide d’Eve, un agent de terrain, il se lance sur la piste du mystérieux Silva, dont il doit identifier coûte que coûte l’objectif secret et mortel…","2h08","21/12/17","Serie","Horreur");

    listeElement = [element1,element2,element3];

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

    this.supprimerElement = function(elementSupprime)
        {
            for (var indiceElement in listeElement)
            {
                element = listeElement[indiceElement];
                if(element.id == elementSupprime.id)
                {
                    listeElement.splice(indiceElement,1);
                    return;
                }
            }
        }


}