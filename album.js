var Photo = function( filename, location ){
	this.filename = filename;
	this.location = location;
}

var Album = function(){
	this.photoAlbum = []
	this.addPicture = function(pictures){
		this.photoAlbum.push(pictures)
	}
}


var newPhoto = new Photo("Andy1", "NYCDA");

var newPhotoAlbum = new Album()

newPhotoAlbum.addPicture(newPhoto)

// adding a new guy
var guy = new Photo('guy', 'nyc') // to create a new photo

newPhotoAlbum.addPicture(guy) // to add guy to the album

newPhotoAlbum.photoAlbum[1] // to see the contents