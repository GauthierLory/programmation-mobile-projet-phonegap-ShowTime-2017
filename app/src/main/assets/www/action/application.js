var applicationListeElement =
{
    elementDAO: new ElementDAO(),
    ajouterElementVue: new AjouterElementVue(),
    modifierElementVue : null,
    lancer:function()
    {
        $(window).on('hashchange', $.proxy(this.naviguer, this));
        this.naviguer();
    },

    naviguer:function()
    {
        var ancre = window.location.hash;

        if (!ancre)
	        {
	            var listeElement = this.elementDAO.getListeElement();
	            var listeElementVue = new ListeElementVue(listeElement);
	            listeElementVue.afficher();
	        }

        else if(ancre.match(/^#ajouter-element/))
	        {
	            this.ajouterElementVue.afficher();
	        }

        else if (ancre.match(/^#AjouterElementVue:NouveauElement/))
	        {
	            var element = this.ajouterElementVue.element;
	            this.elementDAO.ajouterElement(element);
	            window.location.hash = "#";
	        }
        else if (ancre.match(/^#SupprimerElementVue:SupressionElement\/([0-9]+)/))
            {
                var trouvaille = ancre.match(/^#SupprimerElementVue:SupressionElement\/([0-9]+)/);
                var id = trouvaille[1];
                var element = this.elementDAO.getElementParId(id);
                this.elementDAO.supprimerElement(element);
                window.location.hash = "#";
            }

        else if(ancre.match(/^#modifier-element\/([0-9]+)/))
	        {
	            var trouvaille = ancre.match(/^#modifier-element\/([0-9]+)/);

	            var id = trouvaille[1];
	            var element = this.elementDAO.getElementParId(id);
	            this.modifierElementVue= new ModifierElementVue(element);
	            this.modifierElementVue.afficher();
	         }
         else if (ancre.match(/^#ModifierElementVue:ModifierElement/))
         {
            var element = this.modifierElementVue.elementModifier;
            this.elementDAO.modifierElement(element);
            this.modifierElementVue = null;
            window.location.hash = "#";

         }

        else
        {
            var trouvaille = ancre.match(/^#element\/([0-9]+)/);
            var id = trouvaille[1];
            var element = this.elementDAO.getElementParId(id);
            var elementVue = new ElementVue(element);
            elementVue.afficher();
        }
    }
}
applicationListeElement.lancer();
