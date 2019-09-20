import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onSearch: EventEmitter<Album[]> = new EventEmitter();

  albumFounded: Album[];
  constructor(private albumService: AlbumService) { }

  ngOnInit() 
  {
  }

  onSubmit(form: NgForm)
  {
    if (form.value['searchInput'] != null)
    {
      let word = form.value['searchInput'];
      this.albumFounded = this.albumService.searchAlbums(word);
      this.onSearch.emit(this.albumFounded);
    }
      
  }


}
