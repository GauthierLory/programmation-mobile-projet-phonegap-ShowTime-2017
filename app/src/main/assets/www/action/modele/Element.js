var Element = function (nom, synopsis, time, date, categorie, genre, id = undefined)
{
	this.id = id;
	this.nom = nom;
	this.synopsis = synopsis;
	this.time = time;
	this.date = date;
	this.categorie = categorie;
	this.genre = genre
}