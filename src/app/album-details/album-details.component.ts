import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '../album';
import { AlbumList } from '../album-list';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  @Input() album: Album;
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();

  albumChoosen: AlbumList;

  constructor(private albumService: AlbumService) 
  {

  }

  ngOnChanges()
  {
   
    if(this.album)
    {
    // récupération de la liste des chansons
      this.albumChoosen = this.albumService.getAlbumList(this.album.id);
      
    }
    
  }

  ngOnInit() 
  {
  }
  
  play(album: Album)
  {
    this.onPlay.emit(album);  // émettre un album vers le parent
  }
}
