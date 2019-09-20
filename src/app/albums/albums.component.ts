import { Component, OnInit } from '@angular/core';

import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  titlePage: string = "Page principale Albums Music";
  albums: Album[];
  selectedAlbum: Album; //transmis à AlbumDetailsComponent
  playedAlbum: Album; //album renvoyé par AlbumDetails quand on clique sur play
  albumSearched: Album[]; //album renvoyé à la recherche

  listLength: number = 3;

  constructor(private albumService: AlbumService) 
  { 

  }

  ngOnInit() 
  {
    this.albums = this.albumService.paginate(0, this.listLength); //Récupère une liste d'albums limités par la variable listLength
  }

  onSelect(album: Album)
  {
    this.selectedAlbum = album;
  }

  playParent(album: Album)
  {
    this.playedAlbum = album;
  }

  getSearch(album: Album[])
  {
    this.albumSearched = album;
    console.log(this.albumSearched);
  }

}
