import { Injectable } from '@angular/core';
import { ALBUMS } from './mock-albums';
import { ALBUM_LISTS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() 
  { 

  }

  getAlbums() //retourne tous les albums
  {
    return ALBUMS.sort((x,y) => y.duration - x.duration ); // tri des albums par ordre décroissant de durée
  }

  paginate(start: number, end: number)
  {
    return this.getAlbums().slice(start, end);
  }

  getCountAlbums()
  {
    return ALBUMS.length;
  }

  getAlbum( id: string) //retourne un album
  {
    return ALBUMS.find(elem => elem.id === id)
  }
  
  getAlbumList( id : string) // retourne la liste des titres d’un album
  {
    return ALBUM_LISTS.find(elem => elem.id === id)
  } 
  
  searchAlbums(word: string)
  {
    return ALBUMS.filter(elem => elem.title.toLowerCase().includes(word.toLowerCase())) //récupère tous les albums dont le title contient la recherche
  }
}
